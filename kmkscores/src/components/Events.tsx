import React, { useEffect } from "react";
import { IEventProps } from "../Types";
import "../styles/Events.css";

function Events({
  time,
  team,
  player,
  assist,
  type,
  detail,
  homeName,
  scoreCount,
  setScoreCount,
}: IEventProps) {
  let imageUrl: string = "";

  if (type === "Goal") imageUrl = "goal.png";
  if (detail === "Yellow Card") imageUrl = "yellow_card.png";
  if (detail === "Second Yellow Card") imageUrl = "second_yellow.png";
  if (type === "subst") imageUrl = "substitution.jpg";
  if (detail === "Red Card") imageUrl = "red_card.png";
  console.log();

  return (
    <div className={team.name === homeName ? "homeEvent" : "awayEvent"}>
      <span className="event-timeStamp">
        {time.elapsed === 90
          ? `${time.elapsed}'+${time.extra}`
          : `${time.elapsed}'`}
      </span>
      <div className="event-imageContainer">
        <img
          className="event-image"
          src={imageUrl}
          alt="A symbol determining what type of event took place"
        />
      </div>
      <span className="event-playerName">{player.name}</span>
      {assist.name && <span className="event-assistName">({assist.name})</span>}
    </div>
  );
}

export default Events;
