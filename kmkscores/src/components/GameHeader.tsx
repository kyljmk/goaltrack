import React from "react";
import { IGameHeaderProps } from "../Types";

function GameHeader({
  home,
  homeScore,
  away,
  awayScore,
  league,
  leagueLogo,
  round,
  dateTime,
  matchStatus,
  minutesPlayed,
}: IGameHeaderProps) {
  let timeStamp: string = "";

  if (matchStatus === "HT" || matchStatus === "FT") {
    timeStamp = matchStatus;
  } else if (matchStatus === "NS") {
    timeStamp = dateTime.slice(11, 16);
  } else {
    timeStamp = `${minutesPlayed?.toString()}'`;
  }

  return (
    <div className="leagueRound-container">
      <span className="game-info-leagueRound">{`${league} | Round ${
        round.split("- ")[1]
      }`}</span>
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
