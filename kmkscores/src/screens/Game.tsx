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
    events: null,
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
          events: data.response[0].events,
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
    events,
  } = fixtureDetails;

  const eventElements = events?.map((e) => {
    let imageUrl: string = "";
    if (e.type === "Goal") imageUrl = "goal.png";
    if (e.detail === "Yellow Card") imageUrl = "yellow_card.png";
    if (e.detail === "Second Yellow Card") imageUrl = "second_yellow.png";
    if (e.type === "subst") imageUrl = "substitution.jpg";
    if (e.detail === "Red Card") imageUrl = "red_card.png";
    return (
      <div className={e.team.name === home.name ? "homeEvent" : "awayEvent"}>
        <span className="event-timeStamp">
          {e.time.elapsed === 90
            ? `${e.time.elapsed}'+${e.time.extra}`
            : `${e.time.elapsed}'`}
        </span>
        <div className="event-imageContainer">
          <img
            className="event-image"
            src={imageUrl}
            alt="A symbol determining what type of event took place"
          />
        </div>
        <span className="event-playerName">{e.player.name}</span>
      </div>
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
              <span className="game-info-minutes">{`${minutesPlayed}'`}</span>
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
          <div>{eventElements}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
