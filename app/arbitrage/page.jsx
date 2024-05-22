"use client"

import { useEffect, useState } from 'react';
import styles from '../globals.css';
import parseSport from './parseSport.jsx'

const API_KEY = 'fda088ab2a849bf3ae767642ebfb481a';
const SPORT = 'upcoming'; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
const REGIONS = 'us'; // uk | us | eu | au. Multiple can be specified if comma delimited
const MARKETS = 'h2h'; // h2h | spreads | totals. Multiple can be specified if comma delimited
const ODDS_FORMAT = 'decimal'; // decimal | american
const DATE_FORMAT = 'iso'; // iso | unix
const BET_SIZE = 100;
const BOOKMAKER_INDEX = 0;
const NAME_INDEX = 1;
const ODDS_INDEX = 2;
const FIRST = 0;

class Event {
  constructor(data) {
    this.data = data;
    this.sport_key = data['sport_key'];
    this.id = data['id'];
  }
  findBestOdds() {
    const FIRST = 0;
    const ODDS_INDEX = 2;
    const NAME_INDEX = 1;
    const BOOKMAKER_INDEX = 0;

    // Number of possible outcomes for a sporting event
    this.numOutcomes = this.data['bookmakers'][FIRST]["markets"][FIRST]['outcomes'].length;
    //this.numOutcomes = 2; //numOutcomes;

    // Finding the best odds for each outcome in each event
    let bestOdds = [];
    for (let i = 0; i < this.numOutcomes; i++) {
        bestOdds.push([null, null, -Infinity]);
    }
    // [Bookmaker, Name, Price]

    let bookmakers = this.data['bookmakers'];
    for (let index = 0; index < bookmakers.length - 1; index++) {
      let bookmaker = bookmakers[index];
      for (let outcome = 0; outcome < (this.numOutcomes); outcome++) {

        let bookmakerOdds = parseFloat(bookmaker['markets'][FIRST]['outcomes'][outcome]['price']);
        let currentBestOdds = bestOdds[outcome][ODDS_INDEX];
        if (bookmakerOdds > currentBestOdds) {
          bestOdds[outcome][BOOKMAKER_INDEX] = bookmaker['title'];
          bestOdds[outcome][NAME_INDEX] = bookmaker['markets'][FIRST]['outcomes'][outcome]['name'];
          bestOdds[outcome][ODDS_INDEX] = bookmakerOdds;
        }

      }
    }
    this.bestOdds = bestOdds;
    console.log(this.bestOdds);
    //console.log(bestOdds);
    return bestOdds;
  }

  arbitrage() {
    const BET_SIZE = 1; // Assuming a bet size of 1 for illustration

    let totalArbitragePercentage = 0;
    for (let odds of this.bestOdds) {
      totalArbitragePercentage += 1.0 / odds[2];
    }

    this.totalArbitragePercentage = totalArbitragePercentage;
    this.expectedEarnings = (BET_SIZE / totalArbitragePercentage) - BET_SIZE;

    // if the sum of the reciprocals of the odds is less than 1, there is opportunity for arbitrage
    if (totalArbitragePercentage < 1) {
      return true;
    }
    return false;
  }

  convertDecimalToAmerican() {  //Need to fix
    const bestOdds = this.bestOdds;
    const ODDS_INDEX = 2;

    for (let odds of bestOdds) {
      let decimal = odds[ODDS_INDEX];
      let american;

      if (decimal >= 2) {
        american = (decimal - 1) * 100;
      } else if (decimal < 2) {
        american = -100 / (decimal - 1);
      }

      odds[ODDS_INDEX] = Math.round(american * 100) / 100; // rounding to 2 decimal places
    }

    return bestOdds;
  }
  calculateArbitrageBets() {
    const BET_SIZE = 1; // Assuming a bet size of 1 for illustration
    const ODDS_INDEX = 2;

    let betAmounts = [];
    for (let outcome = 0; outcome < this.numOutcomes; outcome++) {
      let individualArbitragePercentage = 1 / this.bestOdds[outcome][ODDS_INDEX];
      let betAmount = (BET_SIZE * individualArbitragePercentage) / this.totalArbitragePercentage;
      betAmounts.push(Math.round(betAmount * 100) / 100); // rounding to 2 decimal places
    }

    this.betAmounts = betAmounts;
    return betAmounts;
  }

}

async function getGames() {
  const res = await fetch(`https://api.the-odds-api.com/v4/sports/${SPORT}/odds?api_key=${API_KEY}&regions=${REGIONS}&markets=${MARKETS}&oddsFormat=${ODDS_FORMAT}&dateFormat=${DATE_FORMAT}`);
  return res.json();
}

//write a function to calculate arbitrage from games
//async function getBestGames


export default async function Arbitrage() {
  const games = await getGames();
  let numgames = 0;
  let events = [];
  var table = [];
  
  for (let data of games) {
    events.push(new Event(data));
  }

  let arbitrageEvents = [];
  for (let event of events) {
    let bestOdds = event.findBestOdds();
    if (event.arbitrage()) {
      arbitrageEvents.push(event);
      numgames = 2;
    }
  }

  for (let event of arbitrageEvents) {
    event.calculateArbitrageBets();
    //event.convertDecimalToAmerican();
  }

  for (let event of arbitrageEvents) {
    var row = [];

    console.log(event.id);
    // row.push(event.id);
    row.push(parseSport(event.sport_key));
    row.push(event.expectedEarnings.toFixed(2));

    for (let index = 0; index < event.bestOdds.length; index++) {
      let outcome = event.bestOdds[index];
      row.push(outcome[BOOKMAKER_INDEX]);
      row.push(outcome[NAME_INDEX]);
      row.push(outcome[ODDS_INDEX]);
      row.push(event.betAmounts[index]);
    }

    table.push(row);
  }
  for (let row of table) {
    //console.log(row);
  }

  let eventIds = arbitrageEvents.map(event => event.id);
  let sportKeys = arbitrageEvents.map(event => event.sport_key);
  let expectedEarnings = arbitrageEvents.map(event => event.expectedEarnings);

  const eventsData = eventIds.map((id, index) => ({
    id,
    sportKey: sportKeys[index],
    expectedEarnings: expectedEarnings[index]
  }));

  return (
    <div>
      <h1 className="text-6xl text-center mt-24 font-thin">Arbitrage</h1>
      <h2 className="text-lg text-center my-12 font-thin">Find Betting Opportunities</h2>
      <div className="mx-auto">
        <table className="styled-table w-full border-collapse">
          <thead>
            <tr>
              {/* <th>Event ID</th> */}
              <th>Sport Key</th>
              <th>Expected Earnings</th>
              <th>Bookmaker 1</th>
              <th>Team 1</th>
              <th>Odds 1</th>
              <th>Bet 1</th>
              <th>Bookmaker 2</th>
              <th>Team 2</th>
              <th>Odds 2</th>
              <th>Bet 2</th>
              <th>Bookmaker 3</th>
              <th>Team 3</th>
              <th>Odds 3</th>
              <th>Bet 3</th>
              
              {/* Add more table headers here if needed */}
            </tr>
          </thead>
          {numgames > 0 &&
            <tbody>
              {table.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          }
        </table>
        {numgames < 1 &&
            <h3 className="text-4xl font-thin text-center my-10">No Arbitrage Opportunities at this time</h3>
          }
      </div>

      {/* { <pre>{JSON.stringify(games, null, 2)}</pre> } */}
    </div>
  );
}


// return (
//   <div>
//     <h2>Array for Error Checking</h2>
//     <pre>{JSON.stringify(yourArray, null, 2)}</pre>
//   </div>
// );