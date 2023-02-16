import React from "react";
import { IFixtureProps } from "../Types";
import "../styles/LiveScore.css";
import { useNavigate } from "react-router-dom";

function LiveScore({ details, menu }: IFixtureProps) {
  const navigate = useNavigate();
  const {
    id,
    homeName,
    awayName,
    homeScore,
    awayScore,
    flagUrl,
    homeLogo,
    awayLogo,
  } = details;

  return (
    <div
      onClick={() => {
        if (!menu) navigate("/game", { state: { id: id } });
      }}
      className="liveScore"
      style={{ cursor: menu ? "default" : "pointer" }}
    >
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
