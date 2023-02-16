import { useEffect, useState } from "react";
import DailyLeague from "../components/DailyLeague";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useApiGetDailyLeague } from "../hooks/UseApi";
import useInfo from "../hooks/UseInfo";
import "../styles/Home.css";
import { DailyFixture, InfoContextType } from "../Types";

function Home() {
  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];
  const [menu, setMenu] = useState<boolean>(true);

  const { daysFixtures, loading } = useApiGetDailyLeague(dateString);
  const leagueElements = daysFixtures.map((league: DailyFixture[]) => {
    if (league.length !== 0) {
      return <DailyLeague key={league[0]?.league.id} fixtures={league} />;
    }
  });
  console.log(daysFixtures);
  return (
    <div className="App">
      <Header />
      <div className="menu-container">
        <Menu menu={true} dropdown={false} />
        <div className="leagues-container">
          <div className="leagues">{leagueElements}</div>
        </div>
      </div>
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
