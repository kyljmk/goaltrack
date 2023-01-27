import React from "react";
import { ILiveResultsProps } from "../Types";

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
          <h1 className="liveScore-text-home-name">{homeName}</h1>
          <h2 className="liveScore-text-home-score">{homeScore}</h2>
        </div>
        <div className="liveScore-text-away">
          <h1 className="liveScore-text-away-name">{awayName}</h1>
          <h2 className="liveScore-text-away-score">{awayScore}</h2>
        </div>
      </div>
    </div>
  );
}

export default LiveScore;
