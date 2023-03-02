import React, { ReactElement } from "react";
import { ICombinedStat, IStatsProps } from "../Types";
import "../styles/Stats.css";

function Stats({ statistics }: IStatsProps) {
  let statsElements: JSX.Element[] | ReactElement = <div></div>;

  if (statistics !== null) {
    const combinedStats: ICombinedStat[] = [];

    for (let i = 0; i < statistics[0]?.statistics.length; i++) {
      combinedStats[i] = {
        type: statistics[0]?.statistics[i].type,
        homeValue:
          statistics[0]?.statistics[i].value === null
            ? 0
            : statistics[0]?.statistics[i].value,
        awayValue:
          statistics[1]?.statistics[i].value === null
            ? 0
            : statistics[1]?.statistics[i].value,
      };
    }

    statsElements = combinedStats.map((x, i) => {
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
                    homePercentage > awayPercentage ? "#F4A340" : "gray",
                }}
              />
            </div>
            <div className="stat-bar-away-container">
              <div
                className="stat-bar-away"
                style={{
                  width: `${awayPercentage}%`,
                  backgroundColor:
                    awayPercentage > homePercentage ? "#F4A340" : "gray",
                }}
              />
            </div>
          </div>
        </div>
      );
    });
  }

  return <div className="stats-container">{statsElements}</div>;
}

export default Stats;
