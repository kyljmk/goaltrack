import { createContext, ReactNode, useContext, useState } from "react";
import { InfoContextType } from "../Types";

const InfoContext = createContext<InfoContextType | null>(null);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteLeagues, setFavouriteLeagues] = useState<number[]>([
    39, 40, 41, 42, 140, 78, 135, 61, 2, 3, 848,
  ]);
  const [favouriteTeams, setFavouriteTeams] = useState<number[]>([
    39, 40, 41, 42, 140, 78, 135, 61, 2, 3, 848,
  ]);

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
