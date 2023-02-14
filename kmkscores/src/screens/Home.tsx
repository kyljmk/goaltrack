import { useEffect, useState } from "react";
import DailyLeague from "../components/DailyLeague";
import Header from "../components/Header";
import LiveScore from "../components/LiveScore";
import { useApiGetDailyLeague } from "../hooks/UseApi";
import useInfo from "../hooks/UseInfo";
import { DailyFixture, InfoContextType } from "../Types";

function Home() {
  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];

  const leagues: DailyFixture[][] = useApiGetDailyLeague(dateString);
  const leagueElements = leagues.map((league: DailyFixture[]) => {
    if (league.length !== 0) {
      return <DailyLeague key={league[0]?.league.id} fixtures={league} />;
    }
  });
  console.log(leagues);
  return (
    <div className="App">
      <Header />
      <div className="livescoreContainer">{leagueElements}</div>
    </div>
  );
}

export default Home;

export type test = {
  league: {
    name: string;
    id: number;
  };
};
