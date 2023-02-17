import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DailyLeague from "../components/DailyLeague";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useApiGetDailyLeague } from "../hooks/UseApi";
import "../styles/Home.css";
import { DailyFixture } from "../Types";
import Favourites from "./Favourites";

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];

  const { daysFixtures, loadingLeagues } = useApiGetDailyLeague(dateString);

  const leagueElements = daysFixtures.map((league: DailyFixture) => {
    if (league.response.length !== 0) {
      return (
        <DailyLeague
          key={league.response[0].league.id}
          fixtures={league}
          menu={menu}
        />
      );
    }
  });
  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div className="menu-container">
        <Menu menu={true} dropdown={false} />
        <div className="homefixtures-container">
          <div className="homeOptions-container">
            <div
              onClick={() => {
                setHomeOptions(0);
              }}
              className={
                homeOptions === 0
                  ? "homeOptions-item-selected"
                  : "homeOptions-item"
              }
            >
              <FontAwesomeIcon
                className="homeOptions-item-icon"
                icon={faStar}
              />
              Leagues
            </div>
            <div
              onClick={() => {
                setHomeOptions(1);
              }}
              className={
                homeOptions === 1
                  ? "homeOptions-item-selected"
                  : "homeOptions-item"
              }
            >
              <FontAwesomeIcon
                className="homeOptions-item-icon"
                icon={faClock}
              />
              Live
            </div>
            <div
              onClick={() => {
                setHomeOptions(2);
              }}
              className={
                homeOptions === 2
                  ? "homeOptions-item-selected"
                  : "homeOptions-item"
              }
            >
              <FontAwesomeIcon
                className="homeOptions-item-icon"
                icon={faStar}
              />
              Teams
            </div>
          </div>
          <div className="homefixtures">
            {homeOptions === 0 && leagueElements}
          </div>
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
