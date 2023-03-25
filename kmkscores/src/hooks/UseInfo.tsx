import { createContext, ReactNode, useContext, useState } from "react";
import { InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [newFavouriteLeagues, setNewFavouriteLeagues] = useState<number[]>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("newFavouriteLeagues")) || [
      1, 2, 3, 4, 5, 848, 32, 960, 39, 40, 41, 42, 45, 48, 78, 81, 529, 140,
      143, 556, 135, 137, 547, 61, 65, 66, 526,
    ]
  );

  // World Cup - 1
  // Champs League - 2
  // Europa - 3
  // Europa Conference - 848
  // Euros - 4
  // World Cup Qual - 32
  // UEFA Nations League - 5
  // Euro Qual - 960

  // England
  // Prem - 39
  // Champ - 40
  // L1 - 41
  // L2 - 42
  // FA Cup - 45
  // League Cup - 48

  // Germany
  // Bundesliga - 78
  // DFB Pokal - 81
  // Super Cup - 529

  // Spain
  // La Liga - 140
  // Copa del Rey - 143
  // SuperCup - 556

  // Italy
  // Serie A - 135
  // Coppa Italia - 137
  // Super Cup - 547

  // France
  // Ligue 1 - 61
  // Coup de la Ligue - 65
  // Coup de France - 66
  // Super Cup - 526

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
