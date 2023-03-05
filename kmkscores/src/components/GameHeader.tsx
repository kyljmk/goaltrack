import React from "react";
import { IGameHeaderProps } from "../Types";

function GameHeader({
  home,
  homeScore,
  away,
  awayScore,
  league,
  leagueLogo,
  flag,
  round,
  dateTime,
  matchStatus,
  minutesPlayed,
}: IGameHeaderProps) {
  let timeStamp: string = "";

  const inProgressStatuses: string[] = [
    "1H",
    "HT",
    "2H",
    "ET",
    "BT",
    "P",
    "INT",
    "LIVE",
  ];
  const gameInProgress: boolean = inProgressStatuses.includes(matchStatus);
  if (matchStatus === "HT" || matchStatus === "FT") {
    timeStamp = matchStatus;
  } else if (matchStatus === "NS") {
    timeStamp = dateTime.slice(11, 16);
  } else {
    timeStamp = `${minutesPlayed?.toString()}'`;
  }
  console.log(gameInProgress);
  const date: string = dateTime.slice(0, 10);

  return (
    <div className="leagueRound-container">
      <div className="game-info-flagContainer">
        <img
          src={flag}
          alt="Flag of the country that the league is in"
          className="game-info-flag"
        />
        <span className="game-info-leagueRound">{`${league} | Round ${
          round.split("- ")[1]
        }`}</span>
      </div>
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
          <span
            className="game-info-score"
            style={{
              display: matchStatus === "NS" ? "none" : "inline",
            }}
          >{`${homeScore} - ${awayScore}`}</span>
          <span
            className="game-info-minutes"
            style={{ fontSize: matchStatus === "NS" ? "18px" : "12px" }}
          >
            {timeStamp}
          </span>
          <span style={{ display: gameInProgress ? "none" : "inline" }}>
            {date}
          </span>
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
    </div>
  );
}

export default GameHeader;
