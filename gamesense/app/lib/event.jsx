const BOOKMAKER_INDEX = 0;
const NAME_INDEX = 1;
const ODDS_INDEX = 2;
const FIRST = 0;
const BET_SIZE = 100;

class Event {
    constructor(data) {
        this.data = data;
        this.sport_key = data.sport_key;
        this.id = data.id;
    }

    findBestOdds() {
        const numOutcomes = this.data.bookmakers[FIRST].markets[FIRST].outcomes.length;

        const bestOdds = Array.from({ length: numOutcomes }, () => [null, null, Number.NEGATIVE_INFINITY]);
        // [Bookmaker, Name, Price]

        const bookmakers = this.data.bookmakers;
        for (let index = 0; index < bookmakers.length; index++) {
            const bookmaker = bookmakers[index];

            for (let outcome = 0; outcome < numOutcomes; outcome++) {
                const bookmakerOdds = parseFloat(bookmaker.markets[FIRST].outcomes[outcome].price);
                const currentBestOdds = bestOdds[outcome][ODDS_INDEX];

                if (bookmakerOdds > currentBestOdds) {
                    bestOdds[outcome][BOOKMAKER_INDEX] = bookmaker.title;
                    bestOdds[outcome][NAME_INDEX] = bookmaker.markets[FIRST].outcomes[outcome].name;
                    bestOdds[outcome][ODDS_INDEX] = bookmakerOdds;
                }
            }
        }
        this.bestOdds = bestOdds;
        return bestOdds;
    }

    arbitrage() {
        let totalArbitragePercentage = 0;
        for (const odds of this.bestOdds) {
            totalArbitragePercentage += 1.0 / odds[ODDS_INDEX];
        }

        this.totalArbitragePercentage = totalArbitragePercentage;
        this.expectedEarnings = (BET_SIZE / totalArbitragePercentage) - BET_SIZE;

        if (totalArbitragePercentage < 1) {
            return true;
        }
        return false;
    }

    convertDecimalToAmerican() {
        const bestOdds = this.bestOdds;
        for (const odds of bestOdds) {
            const decimal = odds[ODDS_INDEX];
            let american;
            if (decimal >= 2) {
                american = (decimal - 1) * 100;
            } else if (decimal < 2) {
                american = -100 / (decimal - 1);
            }
            odds[ODDS_INDEX] = Math.round(american * 100) / 100;
        }
        return bestOdds;
    }

    calculateArbitrageBets() {
        const betAmounts = [];
        for (let outcome = 0; outcome < this.numOutcomes; outcome++) {
            const individualArbitragePercentage = 1 / this.bestOdds[outcome][ODDS_INDEX];
            const betAmount = (BET_SIZE * individualArbitragePercentage) / this.totalArbitragePercentage;
            betAmounts.push(Math.round(betAmount * 100) / 100);
        }

        this.betAmounts = betAmounts;
        return betAmounts;
    }
}