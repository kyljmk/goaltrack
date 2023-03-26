import React from "react";
import { useNavigate } from "react-router-dom";
import { IGameHeaderProps } from "../Types";

function GameHeader({
  home,
  homeScore,
  away,
  awayScore,
  league,
  leagueLogo,
  flag,
  country,
  round,
  dateTime,
  matchStatus,
  minutesPlayed,
  international,
}: IGameHeaderProps) {
  const navigate = useNavigate();

  if (country === "England") {
    flag = "https://www.flashscore.com/res/_fs/build/en.e20b07c.png";
  }
  if (country === "Scotland") {
    flag = "https://www.flashscore.com/res/_fs/build/sc.a2615a8.png";
  }
  if (country === "Wales") {
    flag = "https://www.flashscore.com/res/_fs/build/wa.768307e.png";
  }
  if (country === "Northern-Ireland") {
    flag = "https://www.flashscore.com/res/_fs/build/nirl.dab832b.png";
  }

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

  let timeStamp: string = "";
  const gameInProgress: boolean = inProgressStatuses.includes(matchStatus);
  if (matchStatus === "HT" || matchStatus === "FT") {
    timeStamp = matchStatus;
  } else if (matchStatus === "NS") {
    timeStamp = dateTime.slice(11, 16);
  } else if (matchStatus === "PST") {
    timeStamp = "Postponed";
  } else {
    timeStamp = `${minutesPlayed?.toString()}'`;
  }

  const date: string = dateTime.slice(0, 10);
  const refactoredRound: string = round.includes("Regular Season")
    ? `Round ${round.split("- ")[1]}`
    : round;

  return (
    <div className="leagueRound-container">
      <div className="game-info-flagContainer">
        <img
          src={
            flag
              ? flag
              : "https://www.flashscore.com/res/_fs/build/world.b7d16db.png"
          }
          alt="Flag of the country that the league is in"
          className="game-info-flag"
        />
        <span className="game-info-leagueRound">{`${league} | ${refactoredRound}`}</span>
      </div>
      <div className="gameHeader">
        <div
          className="game-home"
          onClick={() => navigate(`/teams?id=${home.id}`)}
        >
          <div
            className="game-home-logoContainer"
            style={{ backgroundColor: international ? "black" : "white" }}
          >
            <img
              className="game-home-logo"
              src={home.logo}
              alt="home teams logo"
            />
          </div>
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
              display:
                matchStatus === "NS" || matchStatus === "PST"
                  ? "none"
                  : "inline",
            }}
          >{`${homeScore} - ${awayScore}`}</span>
          <span
            className="game-info-minutes"
            style={{
              fontSize:
                matchStatus === "NS" || matchStatus === "PST" ? "18px" : "12px",
            }}
          >
            {timeStamp}
          </span>
          <span
            className="game-info-date"
            style={{ display: gameInProgress ? "none" : "inline" }}
          >
            {date}
          </span>
        </div>
        <div
          className="game-away"
          onClick={() => navigate(`/teams?id=${away.id}`)}
        >
          <div
            className="game-away-logoContainer"
            style={{ backgroundColor: international ? "black" : "white" }}
          >
            <img
              className="game-away-logo"
              src={away.logo}
              alt="home teams logo"
              style={{ borderRadius: international ? "20px" : "0" }}
            />
          </div>
          <span className="game-away-name">{away.name}</span>
        </div>
      </div>
    </div>
  );
}

export default GameHeader;
