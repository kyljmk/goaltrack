import { createContext, ReactNode, useContext, useState } from "react";
import { InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteLeagues, setFavouriteLeagues] = useState<number[]>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("favouriteLeagues")) || [
      39, 40, 140, 78, 135, 2, 3,
    ]
  );

  // World Cup - 1
  // Euros - 4
  // Friendlies - 10
  // World Cup Qual - 32
  // UEFA Nations League - 5
  // Euro Qual - 960

  const [favouriteTeams, setFavouriteTeams] = useState<number[]>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("favouriteTeams")) || []
  );

  return (
    <InfoContext.Provider
      value={{
        favouriteLeagues,
        setFavouriteLeagues,
        favouriteTeams,
        setFavouriteTeams,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default function useInfo() {
  return useContext(InfoContext);
}
