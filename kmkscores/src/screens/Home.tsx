import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
import DatePicker from "../components/DatePicker";

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const [dateString, setDateString] = useState<string>(
    today.toISOString().split("T")[0]
  );

  const minusTwo = new Date(today);
  minusTwo.setDate(minusTwo.getDate() - 2);
  const dayMinusTwo = minusTwo.toISOString().split("T")[0];

  const currentDay = today.toISOString().split("T")[0];

  const plusFour = new Date(today);
  plusFour.setDate(plusFour.getDate() + 4);
  const dayPlusFour = plusFour.toISOString().split("T")[0];

  let leaguesDaysFixtures = useApiGetFavouriteLeaguesFixtures(
    dayMinusTwo,
    dayPlusFour
  );
  const teamsDaysFixtures = useApiGetFavouriteTeamsFixtures(
    dayMinusTwo,
    dayPlusFour
  );

  const liveResults = useApiGetLiveGames();

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

  let leagueElements = leaguesDaysFixtures
    .map((item) =>
      item.filter((item) => item.fixture.date.split("T")[0] === dateString)
    )
    .map((league: FixtureResponse[]) => {
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

  const noFixturesCheck = (input: any): boolean => {
    let i: number = 0;
    input.forEach((item: any) => {
      if (item !== undefined) {
        i++;
      }
    });

    return i === 0;
  };

  if (noFixturesCheck(leagueElements)) {
    leagueElements = [
      <EmptyFixtures message="There are no fixtures from you favourite leages on this day." />,
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

  let teamsElements = teamsDaysFixtures
    .map((item) =>
      item.filter(
        (item) =>
          item.fixture.date.split("T")[0] === dateString &&
          item.fixture.status.short !== "PST"
      )
    )
    .map((league) => {
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

  if (noFixturesCheck(teamsElements)) {
    teamsElements = [
      <EmptyFixtures message="There are no fixtures from your favourite teams on this day." />,
    ];
  }

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
            />
            {homeOptions === 0 && leagueElements}
            {homeOptions === 1 && liveElements}
            {homeOptions === 2 && teamsElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
