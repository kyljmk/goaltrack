import React from "react";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILineUpProps, ILineUps } from "../Types";

function Lineups(lineUps: ILineUpProps) {
  return (
    <div>
      <span>Starting Line-Ups</span>
      <span>Substitutes</span>
      <span>Coaches</span>
    </div>
  );
}

export default Lineups;
