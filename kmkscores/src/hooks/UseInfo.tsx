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
  const [favourites, setFavourites] = useState<number[]>([39, 140, 78, 2]);

  // useEffect(() => {
  // const apiKey: string = process.env.REACT_APP_API_KEY as string;
  //   fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "apiKey",
  //       "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setLiveResults(data.response));
  // }, []);

  return (
    <InfoContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </InfoContext.Provider>
  );
};

export default function useInfo() {
  return useContext(InfoContext);
}
