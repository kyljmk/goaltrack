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
import { FixtureResponse } from "../Types";
import ProgressBar from "@badrap/bar-of-progress";

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];

  const { leaguesDaysFixtures, loadingLeagues } =
    useApiGetFavouriteLeaguesFixtures(dateString);
  const { teamsDaysFixtures, loadingTeams } =
    useApiGetFavouriteTeamsFixtures(dateString);

  const { liveResults, loadingLive } = useApiGetLiveGames();

  const progress = new ProgressBar({
    size: 4,
    color: "#f4a340",
    className: "progressBar",
    delay: 100,
  });

  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 1000);

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
    let i: number = 0;
    input.forEach((array: FixtureResponse[]) => {
      if (array.length !== 0) {
        i++;
      }
    });

    return i === 0;
  };

  if (lengthZeroCheck(leaguesDaysFixtures)) {
    leagueElements = [
      <EmptyFixtures message="There are no fixtures from you favourites leages today." />,
    ];
  }

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
        <title> GoalTrack</title>
        <meta
          name="description"
          content="Up-to-the-minute and live football results."
        />
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta name="twitter:site" content="@user" />{" "}
        <meta name="twitter:creator" content="@user" />{" "}
        <meta name="twitter:title" content="GoalTrack" />{" "}
        <meta
          name="twitter:description"
          content="Live football results up-to-the-minute"
        />{" "}
        <meta name="twitter:image" content="logo-icon.png" />{" "}
        <meta property="og:title" content="GoalTrack" />{" "}
        <meta
          property="og:description"
          content="Live football results up-to-the-minute"
        />{" "}
        <meta property="og:image" content="logo-icon.png" />
        <meta property="og:url" content="goaltrack.live" />
        <meta property="og:site_name" content="GoalTrack" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
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
            {homeOptions === 2 &&
              (loadingTeams ? <div>Loading...</div> : teamsElements)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
