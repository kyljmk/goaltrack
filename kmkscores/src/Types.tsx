import { Dispatch, SetStateAction } from "react";

export interface ITeamInfo {
    id: number,
    name: string,
    score: number,
    logoUrl: string
}

export interface ILiveResults {
    id: number,
    home: ITeamInfo,
    away: ITeamInfo
    league: string,
    flagUrl: string
}

export interface InfoContextType {
    liveResults: ILiveResults[],
    setLiveResults: Dispatch<SetStateAction<ILiveResults[]>>,
}