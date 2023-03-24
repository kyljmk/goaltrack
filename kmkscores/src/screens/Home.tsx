import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LiveLeaguesComponent from "../components/LiveLeaguesComponent";
import Header from "../components/Header";
import Menu from "../components/Menu";
import EmptyFixtures from "../components/EmptyFixtures";
import { useApiGetAllGames } from "../hooks/UseApi";
import "../styles/Home.css";
import { FixtureResponse, InfoContextType } from "../Types";
import ProgressBar from "@badrap/bar-of-progress";
import DatePicker from "../components/DatePicker";
import CountryLeagues from "../components/CountryLeagues";
import useInfo from "../hooks/UseInfo";

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const [dateString, setDateString] = useState<string>(
    today.toISOString().split("T")[0]
  );

  const currentDay = today.toISOString().split("T")[0];

  const allResults = useApiGetAllGames();

  const [viewingDay, setViewingDay] = useState<number>(2);

  const progress = new ProgressBar({
    size: 4,
    color: "#f4a340",
    className: "progressBar",
    delay: 100,
  });

  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 700);

  const { favouriteLeagues } = useInfo() as InfoContextType;
  const { favouriteTeams } = useInfo() as InfoContextType;

  const newLeagueElements = Object.values(
    allResults[viewingDay]
      .filter((item: FixtureResponse) =>
        favouriteLeagues.includes(item.league.id)
      )
      .reduce((x: any, y: any) => {
        (x[y.league.name] = x[y.league.name] || []).push(y);

        return x;
      }, {})
  ).map((league: any) => {
    return (
      <LiveLeaguesComponent
        key={league[0].league.id}
        fixtures={league}
        menu={menu}
      />
    );
  });

  const newTeamsElements = allResults[viewingDay].filter(
    (item: FixtureResponse) =>
      favouriteTeams.includes(item.teams.home.id) ||
      favouriteTeams.includes(item.teams.away.id)
  ) ? (
    Object.values(
      allResults[viewingDay]
        .filter(
          (item: FixtureResponse) =>
            favouriteTeams.includes(item.teams.home.id) ||
            favouriteTeams.includes(item.teams.away.id)
        )
        .reduce((x: any, y: any) => {
          (x[y.league.name] = x[y.league.name] || []).push(y);

          return x;
        }, {})
    ).map((league: any) => {
      return (
        <LiveLeaguesComponent
          key={league[0].league.id}
          fixtures={league}
          menu={menu}
        />
      );
    })
  ) : (
    <EmptyFixtures message="There are no games from your favourite teams on this day." />
  );

  const liveStatuses: string[] = ["1H", "HT", "2H", "ET", "BT", "P", "INT"];

  const newLiveElements = allResults[viewingDay].filter(
    (item: FixtureResponse) => liveStatuses.includes(item.fixture.status.short)
  ) ? (
    Object.values(
      allResults[viewingDay]
        .filter((item: FixtureResponse) =>
          liveStatuses.includes(item.fixture.status.short)
        )
        .sort(
          (a: FixtureResponse, b: FixtureResponse) => a.league.id - b.league.id
        )
        .reduce((x: any, y: any) => {
          (x[y.league.name] = x[y.league.name] || []).push(y);

          return x;
        }, {})
    ).map((league: any) => {
      return (
        <LiveLeaguesComponent
          key={league[0].league.id}
          fixtures={league}
          menu={menu}
        />
      );
    })
  ) : (
    <EmptyFixtures
      key="0"
      message="There are no live fixtures right now, go to bed."
    />
  );

  function compare(a: FixtureResponse, b: FixtureResponse) {
    if (a.league.country < b.league.country) {
      return -1;
    }
    if (a.league.country > b.league.country) {
      return 1;
    }
    return 0;
  }

  const allResultsElements = Object.values(
    allResults[viewingDay].sort(compare).reduce((x: any, y: any) => {
      (x[y.league.country] = x[y.league.country] || []).push(y);

      return x;
    }, {})
  ).map((country: any) => {
    return (
      <CountryLeagues
        key={country[0].fixture.id}
        country={country}
        menu={menu}
      />
    );
  });

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
        <Menu menu={true} dropdown={false} setMenu={setMenu} />
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
                setDateString(currentDay);
                setViewingDay(2);
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
            <DatePicker
              dateString={dateString}
              setDateString={setDateString}
              liveGames={homeOptions === 1}
              setViewingDate={setViewingDay}
            />
            {homeOptions === 0 && newLeagueElements}
            {homeOptions === 0 && allResultsElements}
            {homeOptions === 1 && newLiveElements}
            {homeOptions === 2 && newTeamsElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
