import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IFixtureDetails } from "../Types";
import "../styles/Game.css";

function Game() {
  const fixtureId: number = useLocation().state.id;

  const [fixtureDetails, setFixtureDetails] = useState<IFixtureDetails>({
    home: {
      name: "",
      logo: "",
      score: 0,
    },
    away: {
      name: "",
      logo: "",
      score: 0,
    },
    matchStatus: "",
    minutesPlayed: 0,
    league: "",
    leagueLogo: "",
    round: "",
    dateTime: "",
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
        })
      )
      .catch((err) => console.error(err));
  }, []);

  const {
    home,
    away,
    matchStatus,
    minutesPlayed,
    league,
    leagueLogo,
    round,
    dateTime,
  } = fixtureDetails;

  return (
    <div>
      <Header />
      <div className="gameContainer">
        <div className="game">
          <div className="game-home">
            <img src={home.logo} alt="home teams logo" />
            <h1>{home.name}</h1>
          </div>
          <div className="game-score">
            <img
              src={leagueLogo}
              alt="logo of the league"
              className="game-leagueLogo"
            />
            <span>{`${league} | Round ${round.split("- ")[1]}`}</span>
            <h1>{`${home.score} - ${away.score}`}</h1>
            <span>{`${minutesPlayed}'`}</span>
          </div>
          <div className="game-away">
            <img src={away.logo} alt="home teams logo" />
            <h1>{away.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
