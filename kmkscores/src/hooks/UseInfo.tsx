import { createContext, ReactNode, useContext, useState } from "react";
import { ILiveResults, InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({children} : {children: ReactNode}) => {
    const [liveResults, setLiveResults] = useState<ILiveResults[]>([{
        id: 0,
        home: {
            id: 0,
            name: "test",
            score: 0,
            logoUrl: ""
        },
        away: {
            id: 0,
            name: "test",
            score: 0,
            logoUrl: ""
        },
        league: "",
        flagUrl: ""
    }])
    
    return (
        <InfoContext.Provider value={{liveResults, setLiveResults}}>{children}</InfoContext.Provider>
    )
}

export default function useInfo() {
    return useContext(InfoContext)
}