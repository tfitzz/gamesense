export default function parseSport(sportKey) {

    switch (sportKey) {
      case 'americanfootball_cfl':
        return 'CFL';
      case 'americanfootball_ncaaf':
        return 'NCAAF';
      case 'americanfootball_ncaaf_championship_winner':
        return 'NCAAF Championship Winner';
      case 'americanfootball_nfl':
        return 'NFL';
      case 'americanfootball_nfl_super_bowl_winner':
        return 'NFL Super Bowl Winner';
      case 'americanfootball_ufl':
        return 'UFL';
      case 'aussierules_afl':
        return 'AFL';
      case 'baseball_mlb':
        return 'MLB';
      case 'baseball_mlb_preseason':
        return 'MLB Preseason';
      case 'baseball_mlb_world_series_winner':
        return 'MLB World Series Winner';
      case 'baseball_npb':
        return 'NPB';
      case 'baseball_kbo':
        return 'KBO League';
      case 'baseball_ncaa':
        return 'NCAA Baseball';
      case 'basketball_euroleague':
        return 'Basketball Euroleague';
      case 'basketball_nba':
        return 'NBA';
      case 'basketball_nba_championship_winner':
        return 'NBA Championship Winner';
      case 'basketball_wnba':
        return 'WNBA';
      case 'basketball_ncaab':
        return 'NCAAB';
      case 'basketball_ncaab_championship_winner':
        return 'NCAAB Championship Winner';
      case 'boxing_boxing':
        return 'Boxing';
      case 'cricket_big_bash':
        return 'Big Bash';
      case 'cricket_caribbean_premier_league':
        return 'Caribbean Premier League';
      case 'cricket_icc_world_cup':
        return 'ICC World Cup';
      case 'cricket_international_t20':
        return 'International Twenty20';
      case 'cricket_ipl':
        return 'IPL';
      case 'cricket_odi':
        return 'One Day Internationals';
      case 'cricket_psl':
        return 'Pakistan Super League';
      case 'cricket_t20_blast':
        return 'T20 Blast';
      case 'cricket_test_match':
        return 'Test Matches';
      case 'golf_masters_tournament_winner':
        return 'Masters Tournament Winner';
      case 'golf_pga_championship_winner':
        return 'PGA Championship Winner';
      case 'golf_the_open_winner':
        return 'The Open Winner';
      case 'golf_us_open_winner':
        return 'US Open Winner';
      case 'icehockey_nhl':
        return 'NHL';
      case 'icehockey_nhl_championship_winner':
        return 'NHL Championship Winner';
      case 'icehockey_sweden_hockey_league':
        return 'SHL';
      case 'icehockey_sweden_allsvenskan':
        return 'HockeyAllsvenskan';
      case 'mma_mixed_martial_arts':
        return 'MMA';
      case 'politics_us_presidential_election_winner':
        return 'US Presidential Elections Winner';
      case 'rugbyleague_nrl':
        return 'NRL';
      case 'soccer_africa_cup_of_nations':
        return 'Africa Cup of Nations';
      case 'soccer_argentina_primera_division':
        return 'Primera División - Argentina';
      case 'soccer_australia_aleague':
        return 'A-League';
      case 'soccer_austria_bundesliga':
        return 'Austrian Football Bundesliga';
      case 'soccer_belgium_first_div':
        return 'Belgium First Division';
      case 'soccer_brazil_campeonato':
        return 'Brazil Série A';
      case 'soccer_brazil_serie_b':
        return 'Brazil Série B';
      case 'soccer_chile_campeonato':
        return 'Primera División - Chile';
      case 'soccer_china_superleague':
        return 'Super League - China';
      case 'soccer_denmark_superliga':
        return 'Denmark Superliga';
      case 'soccer_efl_champ':
        return 'Championship';
      case 'soccer_england_efl_cup':
        return 'EFL Cup';
      case 'soccer_england_league1':
        return 'League 1';
      case 'soccer_england_league2':
        return 'League 2';
      case 'soccer_epl':
        return 'EPL';
      case 'soccer_fa_cup':
        return 'FA Cup';
      case 'soccer_fifa_world_cup':
        return 'FIFA World Cup';
      case 'soccer_fifa_world_cup_womens':
        return 'FIFA Womens World Cup';
      case 'soccer_fifa_world_cup_winner':
        return 'FIFA World Cup Winner';
      case 'soccer_finland_veikkausliiga':
        return 'Veikkausliiga - Finland';
      case 'soccer_france_ligue_one':
        return 'Ligue 1 - France';
      case 'soccer_france_ligue_two':
        return 'Ligue 2 - France';
      case 'soccer_germany_bundesliga':
        return 'Bundesliga - Germany';
      case 'soccer_germany_bundesliga2':
        return 'Bundesliga 2 - Germany';
      case 'soccer_germany_liga3':
        return '3. Liga - Germany';
      case 'soccer_greece_super_league':
        return 'Super League - Greece';
      case 'soccer_italy_serie_a':
        return 'Serie A - Italy';
      case 'soccer_italy_serie_b':
        return 'Serie B - Italy';
      case 'soccer_japan_j_league':
        return 'J League';
      case 'soccer_korea_kleague1':
        return 'K League 1';
      case 'soccer_league_of_ireland':
        return 'League of Ireland';
      case 'soccer_mexico_ligamx':
        return 'Liga MX';
      case 'soccer_netherlands_eredivisie':
        return 'Dutch Eredivisie';
      case 'soccer_norway_eliteserien':
        return 'Eliteserien - Norway';
      case 'soccer_poland_ekstraklasa':
        return 'Ekstraklasa - Poland';
      case 'soccer_portugal_primeira_liga':
        return 'Primeira Liga - Portugal';
      case 'soccer_spain_la_liga':
        return 'La Liga - Spain';
      case 'soccer_spain_segunda_division':
        return 'La Liga 2 - Spain';
      case 'soccer_spl':
        return 'Premiership - Scotland';
      case 'soccer_sweden_allsvenskan':
        return 'Allsvenskan - Sweden';
      case 'soccer_sweden_superettan':
        return 'Superettan - Sweden';
      case 'soccer_switzerland_superleague':
        return 'Swiss Superleague';
      case 'soccer_turkey_super_league':
        return 'Turkey Super League';
      case 'soccer_uefa_europa_conference_league':
        return 'UEFA Europa Conference League';
      case 'soccer_uefa_champs_league':
        return 'UEFA Champions League';
      case 'soccer_uefa_champs_league_qualification':
        return 'UEFA Champions League Qualification';
      case 'soccer_uefa_europa_league':
        return 'UEFA Europa League';
      case 'soccer_uefa_european_championship':
        return 'UEFA European Championship';
      case 'soccer_uefa_euro_qualification':
        return 'UEFA Euro Qualification';
      case 'soccer_uefa_nations_league':
        return 'UEFA Nations League';
      case 'soccer_conmebol_copa_libertadores':
        return 'Copa Libertadores';
      case 'soccer_usa_mls':
        return 'MLS';
      case 'tennis_atp_aus_open_singles':
        return 'ATP Australian Open';
      case 'tennis_atp_french_open':
        return 'ATP French Open';
      case 'tennis_atp_us_open':
        return 'ATP US Open';
      case 'tennis_atp_wimbledon':
        return 'ATP Wimbledon';
      case 'tennis_wta_aus_open_singles':
        return 'WTA Australian Open';
      case 'tennis_wta_french_open':
        return 'WTA French Open';
      case 'tennis_wta_us_open':
        return 'WTA US Open';
      case 'tennis_wta_wimbledon':
        return 'WTA Wimbledon';
      default:
        return 'Unknown Sport';
  };
}