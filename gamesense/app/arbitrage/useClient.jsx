import React, { useEffect, useState } from 'react';
import { fetchOdds } from '../lib/getmatches.jsx';

export default function useClient() {
  const [table, setTable] = useState([]);

  class Event {
    constructor(data) {
      this.data = data;
      this.sport_key = data['sport_key'];
      this.id = data['id'];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data here
      const data = [
        {
          "sport_key": "soccer",
          "id": "1",
          "bookmakers": [
            {
              "title": "Bookmaker A",
              "markets": [
                {
                  "outcomes": [
                    {"name": "Team A", "price": "1.75"},
                    {"name": "Team B", "price": "2.10"}
                  ]
                }
              ]
            },
            {
              "title": "Bookmaker B",
              "markets": [
                {
                  "outcomes": [
                    {"name": "Team A", "price": "1.80"},
                    {"name": "Team B", "price": "2.00"}
                  ]
                }
              ]
            }
          ]
        },
        {
          "sport_key": "basketball",
          "id": "2",
          "bookmakers": [
            {
              "title": "Bookmaker C",
              "markets": [
                {
                  "outcomes": [
                    {"name": "Team X", "price": "1.90"},
                    {"name": "Team Y", "price": "1.95"}
                  ]
                }
              ]
            }
          ]
        }
      ]; // Adjust the API endpoint

      // Process data here
      const events = [];

      for (let eventData of data) {
        events.push(new Event(eventData));
      }

      const newTable = [];
      for (let event of events) {
        const row = [];
        row.push(event.id);
        row.push(event.sport_key);
        row.push(event.expectedEarnings.toFixed(2));
        for (let index = 0; index < event.bestOdds.length; index++) {
          const outcome = event.bestOdds[index];
          row.push(outcome[index]);
          row.push(outcome[index]);
          row.push(outcome[index]);
          row.push(event.betAmounts[index]);
        }
        newTable.push(row);
      }

      // Update state
      setTable(newTable);
    };

    fetchData();
  }, []); // Dependency array ensures the effect runs only once

  return table;
}