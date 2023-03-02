import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LiveLeaguesComponent from "../components/LiveLeaguesComponent";
import Header from "../components/Header";
import Menu from "../components/Menu";
import EmptyFixtures from "../components/EmptyFixtures";
import {
  useApiGetFavouriteLeaguesFixtures,
  useApiGetFavouriteTeamsFixtures,
  useApiGetLiveGames,
} from "../hooks/UseApi";
import "../styles/Home.css";
import { DailyFixture, FixtureResponse } from "../Types";

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];

  const { leaguesDaysFixtures } = useApiGetFavouriteLeaguesFixtures(dateString);
  const { teamsDaysFixtures, loadingTeams } =
    useApiGetFavouriteTeamsFixtures(dateString);

  const { liveResults, loadingLive } = useApiGetLiveGames();

  let leagueElements = leaguesDaysFixtures.map((league: FixtureResponse[]) => {
    if (league.length !== 0) {
      return (
        <LiveLeaguesComponent
          key={league[0].league.id}
          fixtures={league}
          menu={menu}
        />
      );
    }
  });

  const lengthZeroCheck = (input: FixtureResponse[][]): boolean => {
    input.forEach((array: FixtureResponse[]) => {
      if (array.length !== 0) return false;
    });
    return true;
  };

  if (lengthZeroCheck(leaguesDaysFixtures)) {
    leagueElements = [
      <EmptyFixtures message="There are no fixtures from you favourites leages today." />,
    ];
  }

  console.log(leaguesDaysFixtures);

  const orderedLiveElements: FixtureResponse[][] = Object.values(
    liveResults.reduce((x: any, y: any) => {
      (x[y.league.name] = x[y.league.name] || []).push(y);

      return x;
    }, {})
  );

  let liveElements: JSX.Element[] = orderedLiveElements.map((leagues) => {
    return (
      <LiveLeaguesComponent
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

  const orderedTeamElements: FixtureResponse[][] = Object.values(
    teamsDaysFixtures.reduce((x: any, y: any) => {
      (x[y.league.name] = x[y.league.name] || []).push(y);

      return x;
    }, {})
  );

  let teamsElements = orderedTeamElements.map((league) => {
    if (league.length !== 0) {
      return (
        <LiveLeaguesComponent
          key={league[0].league.id}
          fixtures={league}
          menu={menu}
        />
      );
    }
  });

  if (orderedTeamElements.length === 0) {
    teamsElements = [
      <EmptyFixtures message="There are no fixtures from your favourite teams right now." />,
    ];
  }

  return (
    <div className="App">
      <Helmet>
        <title>This is GoalTrack</title>
        <meta
          name="description"
          content="Up-to-the-minutes and live football results."
        />
      </Helmet>
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
        <Menu menu={true} dropdown={false} />
        <div
          className="homefixtures-container"
          style={{ opacity: menu ? 0.1 : 1 }}
        >
          <span
            style={{
              marginBottom: "30px",
              fontSize: "24px",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            This website is currently under construction! It has limited
            functionality, however all data should be accurate and up to data.
            Construction should completed by the first weekend of March.
          </span>
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
            {homeOptions === 1 &&
              (loadingLive ? <div>Loading...</div> : liveElements)}
            {homeOptions === 2 &&
              (loadingTeams ? <div>Loading...</div> : teamsElements)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
