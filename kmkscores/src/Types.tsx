import { Dispatch, SetStateAction } from "react";

export interface ITeamInfo {
  id: number;
  name: string;
  score: number;
  logoUrl: string;
}

export interface ILiveResultsProps {
  homeName: string;
  awayName: string;
  homeScore: number;
  awayScore: number;
  flagUrl: string;
}

export interface InfoContextType {
  liveResults: any;
  setLiveResults: Dispatch<SetStateAction<any>>;
}
