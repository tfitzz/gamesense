const API_KEY = '0e94a1b480542442fdac3b438874994a';
const SPORT = 'upcoming'; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
const REGIONS = 'us'; // uk | us | eu | au. Multiple can be specified if comma delimited
const MARKETS = 'h2h'; // h2h | spreads | totals. Multiple can be specified if comma delimited
const ODDS_FORMAT = 'decimal'; // decimal | american
const DATE_FORMAT = 'iso'; // iso | unix
const BET_SIZE = 100;

async function fetchOdds() {
    try {
        const response = await fetch(`https://api.the-odds-api.com/v4/sports/${SPORT}/odds?api_key=${API_KEY}&regions=${REGIONS}&markets=${MARKETS}&oddsFormat=${ODDS_FORMAT}&dateFormat=${DATE_FORMAT}`);
        const odds_response = await response.json();
        return odds_response;
    } catch (error) {
        console.error('Error fetching odds:', error);
        return null;
    }
}