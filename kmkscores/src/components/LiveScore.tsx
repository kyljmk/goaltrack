import React from "react";
import { ILiveResultsProps } from "../Types";
import "../styles/LiveScore.css";

function LiveScore({
  homeName,
  awayName,
  homeScore,
  awayScore,
  flagUrl,
}: ILiveResultsProps) {
  return (
    <div className="liveScore">
      <img
        className="liveScore-img"
        src={flagUrl}
        alt="leagues national flag"
      />
      <div className="liveScore-text">
        <div className="liveScore-text-home">
          <span className="liveScore-text-home-name">{homeName}</span>
          <span className="liveScore-text-home-score">{homeScore}</span>
        </div>
        <div className="liveScore-text-away">
          <span className="liveScore-text-away-name">{awayName}</span>
          <span className="liveScore-text-away-score">{awayScore}</span>
        </div>
      </div>
    </div>
  );
}

export default LiveScore;
