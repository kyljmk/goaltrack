import { createContext, ReactNode, useContext, useState } from "react";
import { InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteLeagues, setFavouriteLeagues] = useState<number[]>(
    localStorage.getItem("favouriteTeams")?.length === 0
      ? JSON.parse(localStorage.getItem("favouriteTeams") || "")
      : [39, 40, 41, 42, 140, 78, 135, 61, 2, 3, 848]
  );
  const [favouriteTeams, setFavouriteTeams] = useState<number[]>(
    JSON.parse(localStorage.getItem("favouriteTeams") || "")
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
