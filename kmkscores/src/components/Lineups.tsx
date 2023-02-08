import React from "react";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILineUpProps } from "../Types";
import "../styles/Lineups.css";

function Lineups(lineUps: ILineUpProps) {
  const { home, away } = lineUps;
  const startHomeElements = home.startXI.map((x) => {
    return (
      <div>
        <span>{`${x.player.number} ${x.player.name}`}</span>
      </div>
    );
  });

  const startAwayElements = away.startXI.map((x) => {
    return (
      <div>
        <span>{`${x.player.number} ${x.player.name}`}</span>
      </div>
    );
  });

  return (
    <div>
      <span>Starting Line-Ups</span>
      <div className="startLineups-container">
        <div>{startHomeElements}</div>
        <div>{startAwayElements}</div>
      </div>
      <span>Substitutes</span>
      <span>Coaches</span>
    </div>
  );
}

export default Lineups;
