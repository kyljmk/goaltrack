import { createContext, ReactNode, useContext, useState } from "react";
import { InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [newFavouriteLeagues, setNewFavouriteLeagues] = useState<number[]>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("newFavouriteLeagues")) || [
      39, 40, 140, 78, 135, 2, 3,
    ]
  );

  // World Cup - 1
  // Euros - 4
  // World Cup Qual - 32
  // UEFA Nations League - 5
  // Euro Qual - 960

  const [newFavouriteTeams, setNewFavouriteTeams] = useState<number[]>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("newFavouriteTeams")) || [10]
  );

  return (
    <InfoContext.Provider
      value={{
        newFavouriteLeagues,
        setNewFavouriteLeagues,
        newFavouriteTeams,
        setNewFavouriteTeams,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default function useInfo() {
  return useContext(InfoContext);
}
