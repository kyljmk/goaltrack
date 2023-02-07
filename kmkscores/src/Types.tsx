import { Dispatch, SetStateAction } from "react";

export interface ITeamInfo {
  id: number;
  name: string;
  score: number;
  logoUrl: string;
}

export interface ILiveResultsProps {
  id: number;
  homeName: string;
  awayName: string;
  homeScore: number;
  awayScore: number;
  flagUrl: string;
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
  statistics: IMatchStats | null;
  lineups: {
    home: ILineUp | null;
    away: ILineUp | null;
  };
}

export interface ILineUps {
  home: ILineUp;
  away: ILineUp;
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
  startingXI: IPlayer[];
  substitutes: IPlayer[];
}

export interface ILineUpProps {
  home: ILineUp | null;
  away: ILineUp | null;
}

export interface IPlayer {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string;
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
  liveResults: any;
  setLiveResults: Dispatch<SetStateAction<any>>;
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

export interface IMatchStats {
  home: ITeamStats[];
  away: ITeamStats[];
}

export type ITeamStats = {
  type: string;
  value: number;
};
