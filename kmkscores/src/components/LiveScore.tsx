import React from "react";
import { IFixtureProps } from "../Types";
import "../styles/LiveScore.css";
import { useNavigate } from "react-router-dom";

function LiveScore({ details, menu }: IFixtureProps) {
  const navigate = useNavigate();
  let {
    id,
    homeName,
    awayName,
    homeScore,
    awayScore,
    flagUrl,
    homeLogo,
    awayLogo,
    status,
    kickoff,
    minutesPlayed,
  } = details;

  const localTime = new Date(kickoff).toISOString();
  console.log(localTime);
  let isLive: boolean = false;
  const liveStatuses: string[] = ["1H", "HT", "2H", "ET", "BT", "P", "INT"];
  if (liveStatuses.includes(status)) isLive = true;

  if (status === "NS") status = kickoff.slice(11, 16);
  if (status === "1H" || status === "2H") status = `${minutesPlayed}'`;

  return (
    <div
      onClick={() => {
        if (!menu) navigate("/game", { state: { id: id } });
      }}
      className={isLive ? "liveScore-live" : "liveScore"}
      style={{ cursor: menu ? "default" : "pointer" }}
    >
      <div className="matchStatus-container">
        <span className="matchStatus-text">{status}</span>
      </div>
      <div className="liveScore-teams">
        <div className="liveScore-teams-home">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="liveScore-teams-home-logo"
              src={homeLogo}
              alt={`${homeName}'s logo`}
            />
            <span className="liveScore-teams-home-name">{homeName}</span>
          </div>
          <span className="liveScore-teams-home-score">{homeScore}</span>
        </div>
        <div className="liveScore-teams-away">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="liveScore-teams-away-logo"
              src={awayLogo}
              alt={`${awayName}'s logo`}
            />
            <span className="liveScore-teams-away-name">{awayName}</span>
          </div>
          <span className="liveScore-teams-away-score">{awayScore}</span>
        </div>
      </div>
    </div>
  );
}

export default LiveScore;
