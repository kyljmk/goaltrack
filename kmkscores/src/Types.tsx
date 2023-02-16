import { Dispatch, SetStateAction } from "react";

export interface ITeamInfo {
  id: number;
  name: string;
  score: number;
  logoUrl: string;
}

export interface IFixtureProps {
  details: {
    id: number;
    homeName: string;
    homeLogo: string;
    awayName: string;
    awayLogo: string;
    homeScore: number | null;
    awayScore: number | null;
    flagUrl: string;
  };
  menu: boolean;
}

export type Team = {
  name: string;
  logo: string;
  score: number;
};

export interface IFixtureDetails {
  home: Team;
  away: Team;
  matchStatus: string;
  minutesPlayed: number;
  league: string;
  leagueLogo: string;
  round: string;
  dateTime: string;
  referee: string;
  venue: string;
  events: IMatchEvent[] | null;
  lineups: {
    home: ILineUp;
    away: ILineUp;
  };
  statistics: {
    home: {
      team: {
        id: number;
        name: string;
        logo: string;
      };
      statistics: ITeamStat[];
    };
    away: {
      team: {
        id: number;
        name: string;
        logo: string;
      };
      statistics: ITeamStat[];
    };
  };
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
  home: ILineUp;
  away: ILineUp;
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
  home: Team;
  away: Team;
  matchStatus: string;
  minutesPlayed: number;
  league: string;
  leagueLogo: string;
  round: string;
  dateTime: string;
}

export interface InfoContextType {
  favourites: number[];
  setFavourites: Dispatch<SetStateAction<number[]>>;
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
}

export interface IStatsProps {
  home: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    statistics: ITeamStat[];
  };
  away: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    statistics: ITeamStat[];
  };
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
  fixtures: DailyFixture[];
  menu: boolean;
}

export interface IMenuProps {
  menu: boolean;
  dropdown: boolean;
}

export interface IHeaderProps {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}
