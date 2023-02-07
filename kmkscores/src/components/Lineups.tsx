import React from "react";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILineUpProps, ILineUps } from "../Types";

function Lineups(lineUps: ILineUpProps) {
  const { home, away } = lineUps;

  const startingXIElemnts = home?.startingXI.map((x) => {
    return (
      <div key={x.id}>
        {x.number}
        {x.name}
      </div>
    );
  });
  return (
    <div>
      <span>Starting Line-Ups</span>
      <div>{startingXIElemnts}</div>
      <span>Substitutes</span>
      <span>Coaches</span>
    </div>
  );
}

export default Lineups;
