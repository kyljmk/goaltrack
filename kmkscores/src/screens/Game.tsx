import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IFixtureDetails } from "../Types";
import "../styles/Game.css";
import Events from "../components/Events";
import GameHeader from "../components/GameHeader";
import Lineups from "../components/Lineups";
import Stats from "../components/Stats";
import { useApiGetGame } from "../hooks/UseApi";

function Game() {
  const fixtureId: number = useLocation().state.id;
  const [options, setOptions] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  const { fixtureDetails, loading } = useApiGetGame(868141);

  const {
    home,
    away,
    matchStatus,
    minutesPlayed,
    league,
    leagueLogo,
    round,
    dateTime,
    referee,
    venue,
    events,
    lineups,
    statistics,
  } = fixtureDetails;

  const eventElements = events?.map((e, i) => {
    return (
      <Events
        key={i}
        homeName={home.name}
        time={e.time}
        team={e.team}
        player={e.player}
        assist={e.assist}
        type={e.type}
        detail={e.detail}
        comment={e.comment}
      />
    );
  });

  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <div className="gameContainer">
        {loading === true ? (
          <div>
            <span>LOADING...</span>
          </div>
        ) : (
          <div className="game">
            <GameHeader
              key={fixtureId}
              home={home}
              away={away}
              matchStatus={matchStatus}
              minutesPlayed={minutesPlayed}
              league={league}
              leagueLogo={leagueLogo}
              round={round}
              dateTime={dateTime}
            />
            <div className="game-refVenue-container">
              <span className="game-referee">{referee}</span>
              <span className="game-venue">{venue}</span>
            </div>
            <div className="game-options">
              <div
                onClick={() => {
                  setOptions(0);
                }}
                className={
                  options === 0
                    ? "game-options-summarySelected"
                    : "game-options-summary"
                }
              >
                Summary
              </div>
              <div
                onClick={() => {
                  setOptions(1);
                }}
                className={
                  options === 1
                    ? "game-options-statsSelected"
                    : "game-options-stats"
                }
              >
                Stats
              </div>
              <div
                onClick={() => {
                  setOptions(2);
                }}
                className={
                  options === 2
                    ? "game-options-lineUpsSelected"
                    : "game-options-lineUps"
                }
              >
                Line-Ups
              </div>
            </div>
            {options === 0 && (
              <div className="events-container">{eventElements}</div>
            )}
            {options === 1 && (
              <Stats home={statistics.home} away={statistics.away} />
            )}
            {options === 2 && (
              <Lineups home={lineups.home} away={lineups.away} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
