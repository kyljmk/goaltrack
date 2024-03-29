import React, { ReactElement } from "react";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILineUpProps } from "../Types";
import "../styles/Lineups.css";

function Lineups({ lineups }: ILineUpProps) {
  let lineupsElement: ReactElement = <div>hello</div>;

  if (lineups !== null) {
    const startHomeElements = lineups[0]?.startXI.map((x) => {
      if (x.player.name.split(" ").length > 1) {
        var names = x.player.name.split(" ");
        names[0] = names[0].substring(0, 1) + ".";
        x.player.name = names.join(" ");
      }
      return (
        <div key={x.player.number} className="startLineups-home-player">
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

    const subHomeElements = lineups[0]?.substitutes.map((x) => {
      if (x.player.name.split(" ").length > 1) {
        var names = x.player.name.split(" ");
        names[0] = names[0].substring(0, 1) + ".";
        x.player.name = names.join(" ");
      }
      return (
        <div key={x.player.number} className="startLineups-home-player">
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

    const startAwayElements = lineups[1]?.startXI.map((x) => {
      if (x.player.name.split(" ").length > 1) {
        var names = x.player.name.split(" ");
        names[0] = names[0].substring(0, 1) + ".";
        x.player.name = names.join(" ");
      }
      return (
        <div key={x.player.number} className="startLineups-away-player">
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

    const subAwayElements = lineups[1]?.substitutes.map((x) => {
      if (x.player.name.split(" ").length > 1) {
        var names = x.player.name.split(" ");
        names[0] = names[0].substring(0, 1) + ".";
        x.player.name = names.join(" ");
      }
      return (
        <div key={x.player.number} className="startLineups-away-player">
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

    lineupsElement = (
      <div className="lineups-container">
        <span className="startLineups-title">Starting Line-Ups</span>
        <div className="startLineups-container">
          <div>{startHomeElements}</div>
          <div className="startLineups-away-container">{startAwayElements}</div>
        </div>
        <span className="substitutes-title">Substitutes</span>
        <div className="substitutes-container">
          <div>{subHomeElements}</div>
          <div className="substitutes-away-container">{subAwayElements}</div>
        </div>
        <span className="coaches-title">Coaches</span>
        <div className="coaches-container">
          <div>{lineups[0]?.coach.name}</div>
          <div>{lineups[1]?.coach.name}</div>
        </div>
      </div>
    );
  }

  return <>{lineupsElement}</>;
}

export default Lineups;
