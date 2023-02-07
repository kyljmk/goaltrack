import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IFixtureDetails } from "../Types";
import "../styles/Game.css";
import { timeStamp } from "console";
import Events from "../components/Events";

function Game() {
  const fixtureId: number = useLocation().state.id;

  const [fixtureDetails, setFixtureDetails] = useState<IFixtureDetails>({
    home: {
      name: "QPR",
      logo: "https://media.api-sports.io/football/teams/72.png",
      score: 1,
    },
    away: {
      name: "Fulham",
      logo: "https://media-3.api-sports.io/football/teams/36.png",
      score: 2,
    },
    matchStatus: "FT",
    minutesPlayed: 90,
    league: "Championship",
    leagueLogo: "https://media-3.api-sports.io/football/leagues/40.png",
    round: "Regular Season - 11",
    dateTime: "2017-09-29T18:45:00+00:00",
    referee: "Peter Bankes, England",
    venue: "Loftus Road",
    events: [
      {
        time: {
          elapsed: 17,
          extra: null,
        },
        team: {
          id: 72,
          name: "QPR",
          logo: "https://media.api-sports.io/football/teams/72.png",
        },
        player: {
          id: 2752,
          name: "Massimo Luongo",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comment: null,
      },
    ],
    statistics: null,
  });
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`,
      options
    )
      .then((response) => response.json())
      .then((data) =>
        setFixtureDetails({
          home: {
            name: data.response[0].teams.home.name,
            logo: data.response[0].teams.home.logo,
            score: data.response[0].goals.home,
          },
          away: {
            name: data.response[0].teams.away.name,
            logo: data.response[0].teams.away.logo,
            score: data.response[0].goals.away,
          },
          matchStatus: data.response[0].fixture.status.short,
          minutesPlayed: data.response[0].fixture.status.elapsed,
          league: data.response[0].league.name,
          leagueLogo: data.response[0].league.logo,
          round: data.response[0].league.round,
          dateTime: data.response[0].fixture.data,
          referee: data.response[0].fixture.referee,
          venue: data.response[0].fixture.venue.name,
          events: data.response[0].events,
          statistics: {
            home: data.response[0].statistics[0].statistics,
            away: data.response[0].statistics[1].statistics,
          },
        })
      )
      .catch((err) => console.error(err));
  }, []);

  console.log(fixtureDetails);

  const {
    home,
    away,
    matchStatus,
    minutesPlayed,
    league,
    leagueLogo,
    round,
    dateTime,
    referee,
    venue,
    events,
  } = fixtureDetails;

  let timeStamp: string = "";
  timeStamp =
    matchStatus === "HT" || matchStatus === "FT"
      ? (timeStamp = matchStatus)
      : (timeStamp = `${minutesPlayed.toString()}'`);

  const eventElements = events?.map((e) => {
    return (
      <Events
        key={e.time.elapsed}
        homeName={home.name}
        time={e.time}
        team={e.team}
        player={e.player}
        assist={e.assist}
        type={e.type}
        detail={e.detail}
        comment={e.comment}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="gameContainer">
        <div className="game">
          <div className="gameHeader">
            <div className="game-home">
              <img
                className="game-home-logo"
                src={home.logo}
                alt="home teams logo"
              />
              <span className="game-home-name">{home.name}</span>
            </div>
            <div className="game-info">
              <img
                src={leagueLogo}
                alt="logo of the league"
                className="game-info-leagueLogo"
              />
              <span className="game-info-leagueRound">{`${league} | Round ${
                round.split("- ")[1]
              }`}</span>
              <span className="game-info-score">{`${home.score} - ${away.score}`}</span>
              <span className="game-info-minutes">{timeStamp}</span>
            </div>
            <div className="game-away">
              <img
                className="game-away-logo"
                src={away.logo}
                alt="home teams logo"
              />
              <span className="game-away-name">{away.name}</span>
            </div>
          </div>
          <div className="game-refVenue-container">
            <span className="game-referee">{referee}</span>
            <span className="game-venue">{venue}</span>
          </div>
          <div>{eventElements}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
