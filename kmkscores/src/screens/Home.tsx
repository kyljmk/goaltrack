import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LeaguesComponent from "../components/LeaguesComponent";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useApiGetDailyLeague, useApiGetLiveGames } from "../hooks/UseApi";
import "../styles/Home.css";
import { DailyFixture, DailyFixtureResponse } from "../Types";
import EmptyFixtures from "../components/EmptyFixtures";

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];

  const { daysFixtures, loadingLeagues } = useApiGetDailyLeague(dateString);
  const { liveResults, loadingLive } = useApiGetLiveGames();

  let leagueElements = daysFixtures.map((league: DailyFixture) => {
    if (league.response.length !== 0) {
      return (
        <LeaguesComponent
          key={league.response[0].league.id}
          fixtures={league.response}
          menu={menu}
        />
      );
    }
  });

  if (daysFixtures.length === 0) {
    leagueElements = [
      <EmptyFixtures message="There are no fixtures from you favourites leages today." />,
    ];
  }

  const orderedLiveElements: DailyFixtureResponse[][] = Object.values(
    liveResults.reduce((x: any, y: any) => {
      (x[y.league.id] = x[y.league.id] || []).push(y);

      return x;
    }, {})
  );

  let liveElements: JSX.Element[] = orderedLiveElements.map((leagues) => {
    return (
      <LeaguesComponent
        key={leagues[0].league.id}
        fixtures={leagues}
        menu={menu}
      />
    );
  });

  if (orderedLiveElements.length === 0) {
    liveElements = [
      <EmptyFixtures message="There are no live fixtures right now, go to bed." />,
    ];
  }

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
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
            {homeOptions === 0 &&
              (loadingLeagues ? <div>Loading...</div> : leagueElements)}
            {homeOptions === 1 &&
              (loadingLive ? <div>Loading...</div> : liveElements)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
