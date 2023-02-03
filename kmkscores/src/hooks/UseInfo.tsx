import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [liveResults, setLiveResults] = useState<any>([
    {
      fixture: {
        id: 12345,
      },
      league: {
        flag: "https://media-3.api-sports.io/flags/gb.svg",
      },
      teams: {
        home: { name: "Manchester United" },
        away: { name: "Arsenal" },
      },
      goals: {
        home: 2,
        away: 0,
      },
    },
  ]);

  useEffect(() => {
    fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => setLiveResults(data.response));
  }, []);

  return (
    <InfoContext.Provider value={{ liveResults, setLiveResults }}>
      {children}
    </InfoContext.Provider>
  );
};

export default function useInfo() {
  return useContext(InfoContext);
}
