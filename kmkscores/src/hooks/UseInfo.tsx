import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ILiveResults, InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({children} : {children: ReactNode}) => {
    const [liveResults, setLiveResults] = useState<any>([{
        // id: 0,
        // home: {
        //     id: 0,
        //     name: "test",
        //     score: 0,
        //     logoUrl: ""
        // },
        // away: {
        //     id: 0,
        //     name: "test",
        //     score: 0,
        //     logoUrl: ""
        // },
        // league: "",
        // flagUrl: ""
    }])

    useEffect(() => {
        fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => setLiveResults(data.response))
        // .then(data => data.response.map((x: any) =>
        //     setLiveResults(prev => [...prev,{
        //         id: x.fixture.id,
        //         home: {
        //             id: x.teams.home.id,
        //             name: x.teams.home.name,
        //             score: x.goals.home,
        //             logoUrl: x.teams.home.logo
        //         },
        //         away: {
        //         id: x.teams.away.id,
        //         name: x.teams.away.name,
        //         score: x.goals.away,
        //         logoUrl: x.teams.away.logo
        //         },
        //         league: x.league.name,
        //         flagUrl: x.league.flag
        //     }])
        // ))
    }, [])
    
    return (
        <InfoContext.Provider value={{liveResults, setLiveResults}}>{children}</InfoContext.Provider>
    )
}

export default function useInfo() {
    return useContext(InfoContext)
}