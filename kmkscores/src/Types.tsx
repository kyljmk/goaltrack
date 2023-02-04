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
