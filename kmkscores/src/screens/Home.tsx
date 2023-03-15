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

function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [homeOptions, setHomeOptions] = useState<number>(0);

  const today: Date = new Date();
  const [dateString, setDateString] = useState<string>(
    today.toISOString().split("T")[0]
  );

  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();

  const minusTwo = new Date(today);
  minusTwo.setDate(minusTwo.getDate() - 2);
  const dayMinusTwo = minusTwo.toISOString().split("T")[0];

  const minusOne = new Date(today);
  minusOne.setDate(minusOne.getDate() - 1);
  const dayMinusOne = minusOne.toISOString().split("T")[0];

  const currentDay = today.toISOString().split("T")[0];
  console.log(currentDay);
  const plusOne = new Date(today);
  plusOne.setDate(plusOne.getDate() + 1);
  const dayPlusOne = plusOne.toISOString().split("T")[0];

  const plusTwo = new Date(today);
  plusTwo.setDate(plusTwo.getDate() + 2);
  const dayPlusTwo = plusTwo.toISOString().split("T")[0];

  const plusThree = new Date(today);
  plusThree.setDate(plusThree.getDate() + 3);
  const dayPlusThree = plusThree.toISOString().split("T")[0];

  const plusFour = new Date(today);
  plusFour.setDate(plusFour.getDate() + 4);
  const dayPlusFour = plusFour.toISOString().split("T")[0];

  let leaguesDaysFixtures = useApiGetFavouriteLeaguesFixtures(
    dayMinusTwo,
    dayPlusFour
  );
  const teamsDaysFixtures = useApiGetFavouriteTeamsFixtures(dateString);
  const liveResults = useApiGetLiveGames();

  // const filteredLeaguesDaysFixtures = leaguesDaysFixtures.map((item) =>
  //   item.filter((item) => item.fixture.date.split("T")[0] === dateString)
  // );
  // console.log(filteredLeaguesDaysFixtures);

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

  const dateFormatter = (dateString: string) => {
    return `${dateString.slice(8, 10)}.${dateString.slice(5, 7)}`;
  };

  const dayFormatter = (dayNumber: number) => {
    let day;
    switch (dayNumber) {
      case -2:
        day = "Fri";
        break;
      case -1:
        day = "Sat";
        break;
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
      case 7:
        day = "Sun";
        break;
      case 8:
        day = "Mon";
        break;
      case 9:
        day = "Tues";
        break;
      case 10:
        day = "Wed";
        break;
    }

    return day;
  };

  return (
    <div className="App">
      {/* <Helmet>
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
      </Helmet> */}
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
                setDateString("2023-03-14");
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
            <div className="datePicker">
              <div
                className={
                  dateString === dayMinusTwo
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(dayMinusTwo)}
              >
                <div>{dateFormatter(dayMinusTwo)}</div>
                <div>{dayFormatter(day - 2)}</div>
              </div>
              <div
                className={
                  dateString === dayMinusOne
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(dayMinusOne)}
              >
                <div>{dateFormatter(dayMinusOne)}</div>
                <div>{dayFormatter(day - 1)}</div>
              </div>
              <div
                className={
                  dateString === currentDay
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(currentDay)}
              >
                <div>{dateFormatter(currentDay)}</div>
                <div>Today</div>
              </div>
              <div
                className={
                  dateString === dayPlusOne
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(dayPlusOne)}
              >
                <div>{dateFormatter(dayPlusOne)}</div>
                <div>{dayFormatter(day + 1)}</div>
              </div>
              <div
                className={
                  dateString === dayPlusTwo
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(dayPlusTwo)}
              >
                <div>{dateFormatter(dayPlusTwo)}</div>
                <div>{dayFormatter(day + 2)}</div>
              </div>
              <div
                className={
                  dateString === dayPlusThree
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(dayPlusThree)}
              >
                <div>{dateFormatter(dayPlusThree)}</div>
                <div>{dayFormatter(day + 3)}</div>
              </div>
              <div
                className={
                  dateString === dayPlusFour
                    ? "datePicker-dates-selected"
                    : "datePicker-dates"
                }
                onClick={() => setDateString(dayPlusFour)}
              >
                <div>{dateFormatter(dayPlusFour)}</div>
                <div>{dayFormatter(day + 4)}</div>
              </div>
            </div>
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
