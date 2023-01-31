import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IFixtureDetails } from "../Types";
import "../styles/Game.css";

function Game() {
  const location = useLocation();
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
    minutesPlayed: 0,
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
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${location.state.id}`,
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
          minutesPlayed: data.response[0].fixture.status.elapsed,
        })
      )
      .catch((err) => console.error(err));
  }, []);

  const { home, away, minutesPlayed } = fixtureDetails;

  return (
    <div className="gameContainer">
      <Header />
      <div className="game">
        <div className="game-home">
          <img src={home.logo} alt="home teams logo" />
          <h1>{home.name}</h1>
        </div>
        <div className="game-score">
          <h1>{`${home.score} - ${away.score}`}</h1>
          <span>{`${minutesPlayed}'`}</span>
        </div>
        <div className="game-away">
          <img src={away.logo} alt="home teams logo" />
          <h1>{away.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Game;
