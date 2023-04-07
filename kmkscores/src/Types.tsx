import { type } from "os";
import { Dispatch, SetStateAction } from "react";

// export interface ITeamInfo {
//   id: number;
//   name: string;
//   score: number;
//   logoUrl: string;
// }

export interface IFixtureProps {
  details: {
    id: number | null;
    homeName: string;
    homeLogo: string;
    awayName: string;
    awayLogo: string;
    homeScore: number | null;
    awayScore: number | null;
    flagUrl: string;
    status: string;
    kickoff: string;
    minutesPlayed: number | null;
  };
  menu: boolean;
}

export type Team = {
  name: string;
  logo: string;
  score: number;
};

export interface IFixtureDetails {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: ITeam;
    away: ITeam;
  };
  goals: Score;
  score: {
    halftime: Score;
    fulltime: Score;
    extratime: Score;
    penalty: Score;
  };
  events: IMatchEvent[] | null;
  lineups: ILineUp[] | null;
  statistics:
    | {
        team: {
          id: number;
          name: string;
          logo: string;
        };
        statistics: ITeamStat[];
      }[]
    | null;
}

export interface ILineUp {
  team: {
    id: number;
    name: string;
    logo: string;
    colors: string;
  };
  coach: {
    id: number;
    name: string;
    photo: string;
  };
  formation: string;
  startXI: IPlayer[];
  substitutes: IPlayer[];
}

export interface ILineUpProps {
  lineups: ILineUp[] | null;
}

export interface IPlayer {
  player: {
    id: number;
    name: string;
    number: number;
    pos: string;
    grid: string;
  };
}

export interface IGameHeaderProps {
  home: ITeam;
  homeScore: number | null;
  away: ITeam;
  awayScore: number | null;
  matchStatus: string;
  minutesPlayed: number | null;
  league: string;
  leagueLogo: string;
  flag: string;
  country: string;
  round: string;
  dateTime: string;
  international: boolean;
}

export interface InfoContextType {
  newFavouriteLeagues: number[];
  setNewFavouriteLeagues: Dispatch<SetStateAction<number[]>>;
  newFavouriteTeams: number[];
  setNewFavouriteTeams: Dispatch<SetStateAction<number[]>>;
}

export interface IMatchEvent {
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: string;
  detail: string;
  comment: string | null;
}

export interface IEventProps {
  homeName: string;
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: string;
  detail: string;
  comment: string | null;
  scoreCount: number[];
  setScoreCount: Dispatch<SetStateAction<number[]>>;
}

export interface IStatsProps {
  statistics:
    | {
        team: {
          id: number;
          name: string;
          logo: string;
        };
        statistics: ITeamStat[];
      }[]
    | null;
}

export type ITeamStat = {
  type: string;
  value: number;
};

export type ICombinedStat = {
  type: string;
  homeValue: number;
  awayValue: number;
};

export type League = {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  round: string;
  season: number;
};

export interface DailyFixture {
  response: FixtureResponse[];
}

export interface FixtureResponse {
  fixture: {
    id: number | null;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number | null;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number | null;
    round: string;
  };
  teams: {
    home: ITeam;
    away: ITeam;
  };
  goals: Score;
  score: {
    halftime: Score;
    fulltime: Score;
    extratime: Score;
    penalty: Score;
  };
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export type Score = {
  home: number | null;
  away: number | null;
};

export interface IDailyLeagueProps {
  fixtures: FixtureResponse[];
  menu: boolean;
}

export interface IMenuProps {
  menu: boolean;
  dropdown: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

export interface IHeaderProps {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

export interface IEmptyMessage {
  message: string;
}

export interface ILeagueDetails {
  league: {
    id: number;
    logo: string;
    name: string;
    type: string;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: {
    coverage: null;
    current: boolean;
    end: string;
    start: string;
    year: number;
  }[];
}

export interface ILeagueResultProps {
  country: ILeagueDetails[];
}

export interface ILeagueTable {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: {
      rank: number;
      team: {
        id: number;
        name: string;
        logo: string;
      };
      points: number;
      goalsDiff: number;
      group: string;
      form: string;
      status: string;
      description: string;
      all: IRecord;
      home: IRecord;
      away: IRecord;
      update: string;
    }[][];
  };
}

export interface IRecord {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}

export interface ITeamStats {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  form: string;
  fixtures: {
    played: RecordSplit;
    wins: RecordSplit;
    draws: RecordSplit;
    losses: RecordSplit;
  };
  goals: {
    for: {
      total: RecordSplit;
      average: {
        home: string;
        away: string;
        total: string;
      };
      minutes: MinutesStats;
    };
    against: {
      total: RecordSplit;
      average: {
        home: string;
        away: string;
        total: string;
      };
      minutes: MinutesStats;
    };
  };
  biggest: {
    streak: {
      wins: number;
      draws: number;
      loses: number;
    };
    wins: {
      home: string;
      away: string;
    };
    loses: {
      home: string;
      away: string;
    };
    goals: {
      for: {
        home: number;
        away: number;
      };
      against: {
        home: number;
        away: number;
      };
    };
  };
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  lineups: {
    formation: string;
    played: number;
  }[];
  cards: {
    yellow: MinutesStats;
    red: MinutesStats;
  };
}

export type RecordSplit = {
  home: number;
  away: number;
  total: number;
};

export type MinutesStats = {
  "0-15": {
    total: number | null;
    percentage: string | null;
  };
  "16-30": {
    total: number | null;
    percentage: string | null;
  };
  "31-45": {
    total: number | null;
    percentage: string | null;
  };
  "46-60": {
    total: number | null;
    percentage: string | null;
  };
  "61-75": {
    total: number | null;
    percentage: string | null;
  };
  "76-90": {
    total: number | null;
    percentage: string | null;
  };
  "91-105": {
    total: number | null;
    percentage: string | null;
  };
  "106-120": {
    total: number | null;
    percentage: string | null;
  };
};

export interface ITeamInfo {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

export interface ILeagueInfo {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
    flag: string;
  };
}

export interface ISearchProps {
  isLeague: boolean;
}

export interface ICountry {
  name: string;
  code: string;
  flag: string;
}

export interface ITeamSearchProps {
  country: string | null;
  setCountry: Dispatch<SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  filteredTeams: ITeamInfo[];
  setFilteredTeams: Dispatch<SetStateAction<ITeamInfo[]>>;
}

export interface ITeamStatsResponse {
  biggest: {
    goals: {
      against: Score;
      for: Score;
    };
    loses: {
      away: string | null;
      home: string | null;
    };
    streak: {
      draws: number | null;
      loses: number | null;
      wins: number | null;
    };
    wins: {
      away: string;
      home: string;
    };
  };
  cards: {
    red: MinutesStats;
    yellow: MinutesStats;
  };
  clean_sheets: HomeAwayTotal;
  failed_to_score: HomeAwayTotal;
  fixtures: {
    draws: HomeAwayTotal;
    loses: HomeAwayTotal;
    played: HomeAwayTotal;
    wins: HomeAwayTotal;
  };
  form: string;
  goals: {
    against: {
      average: {
        home: string;
        away: string;
        total: string;
      };
      minutes: MinutesStats;
      total: HomeAwayTotal;
    };
    home: {
      average: {
        home: string;
        away: string;
        total: string;
      };
      minutes: MinutesStats;
      total: HomeAwayTotal;
    };
  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;
  };
  lineups: {
    formation: string;
    played: number;
  }[];
  penalty: {
    missed: {
      percentage: string;
      total: number;
    };
    scored: {
      percentage: string;
      total: number;
    };
    total: number | null;
  };
  team: {
    id: number;
    logo: string;
    name: string;
  };
}

export type HomeAwayTotal = {
  home: number | null;
  away: number | null;
  total: number | null;
};

export interface ILeagueTableProps {
  id: number;
  currentSeason: number;
  teamPage: boolean;
}

export interface ITeamResultsProps {
  season: number;
  id: number;
  resultsFixtures: string;
}

export interface IDatePickerProps {
  dateString: string;
  setDateString: Dispatch<SetStateAction<string>>;
  liveGames: boolean;
  setViewingDate: Dispatch<SetStateAction<number>>;
}

export interface ICountryLeagueProps {
  country: FixtureResponse[];
  menu: boolean;
}
