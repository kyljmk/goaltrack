import React from "react";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILineUpProps } from "../Types";
import "../styles/Lineups.css";

function Lineups(lineUps: ILineUpProps) {
  const { home, away } = lineUps;
  const startHomeElements = home.startXI.map((x) => {
    return (
      <div className="startLineups-home-player">
        <div className="startLineups-home-player-number-container">
          <FontAwesomeIcon
            className="startLineups-home-player-number-shirt"
            size="2xl"
            icon={faShirt}
          />
          <span className="startLineups-home-player-number">
            {x.player.number}
          </span>
        </div>
        <span className="startLineups-home-player-name">{x.player.name}</span>
      </div>
    );
  });

  const startAwayElements = away.startXI.map((x) => {
    return (
      <div className="startLineups-away-player">
        <span className="startLineups-away-player-name">{x.player.name}</span>
        <div className="startLineups-away-player-number-container">
          <FontAwesomeIcon
            className="startLineups-away-player-number-shirt"
            size="2xl"
            icon={faShirt}
          />
          <span className="startLineups-away-player-number">
            {x.player.number}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="lineups-container">
      <span className="startLineups-title">Starting Line-Ups</span>
      <div className="startLineups-container">
        <div>{startHomeElements}</div>
        <div className="startLineups-away-container">{startAwayElements}</div>
      </div>
      <span className="substitutes-title">Substitutes</span>
      <div className="substitutes-container">
        <div>{startHomeElements}</div>
        <div>{startAwayElements}</div>
      </div>
      <span className="coaches-title">Coaches</span>
      <div className="coaches-container">
        <div>{home.coach.name}</div>
        <div>{away.coach.name}</div>
      </div>
    </div>
  );
}

export default Lineups;
