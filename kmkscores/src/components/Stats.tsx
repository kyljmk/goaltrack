import React from "react";
import { ICombinedStat, IStatsProps } from "../Types";
import "../styles/Stats.css";

function Stats(stats: IStatsProps) {
  const { home, away } = stats;
  const combinedStats: ICombinedStat[] = [];

  for (let i = 0; i < home.statistics.length; i++) {
    combinedStats[i] = {
      type: home.statistics[i].type,
      homeValue:
        home.statistics[i].value === null ? 0 : home.statistics[i].value,
      awayValue:
        away.statistics[i].value === null ? 0 : away.statistics[i].value,
    };
  }

  const statsElements = combinedStats.map((x, i) => {
    let homePercentage: number =
      (x.homeValue / (x.homeValue + x.awayValue)) * 100;
    let awayPercentage: number =
      (x.awayValue / (x.homeValue + x.awayValue)) * 100;
    if (x.type === "Ball Possession" || x.type === "Passes %") {
      homePercentage = x.homeValue;
      awayPercentage = x.awayValue;
    }
    return (
      <div key={i} className="stat">
        <div className="stat-text">
          <span className="stat-text-home">{x.homeValue}</span>
          <span className="stat-text-type">{x.type}</span>
          <span className="stat-text-away">{x.awayValue}</span>
        </div>
        <div className="stat-bar-container">
          <div className="stat-bar-home-container">
            <div
              className="stat-bar-home"
              style={{
                width: `${homePercentage}%`,
                backgroundColor:
                  homePercentage > awayPercentage ? "goldenrod" : "gray",
              }}
            />
          </div>
          <div className="stat-bar-away-container">
            <div
              className="stat-bar-away"
              style={{
                width: `${awayPercentage}%`,
                backgroundColor:
                  awayPercentage > homePercentage ? "goldenrod" : "gray",
              }}
            />
          </div>
        </div>
      </div>
    );
  });

  return <div className="stats-container">{statsElements}</div>;
}

export default Stats;
