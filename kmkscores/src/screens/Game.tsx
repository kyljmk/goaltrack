import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Game.css";
import Events from "../components/Events";
import GameHeader from "../components/GameHeader";
import Lineups from "../components/Lineups";
import Stats from "../components/Stats";
import { useApiGetGame } from "../hooks/UseApi";

function Game() {
  const [options, setOptions] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  const [scoreCount, setScoreCount] = useState<number[]>([0, 0]);

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { fixtureDetails, loadingGame } = useApiGetGame(id);
  console.log(fixtureDetails);

  const { fixture, league, teams, goals, score, events, lineups, statistics } =
    fixtureDetails;

  const eventElements = events?.map((event, i) => {
    return (
      <Events
        key={i}
        homeName={teams.home.name}
        time={event.time}
        team={event.team}
        player={event.player}
        assist={event.assist}
        type={event.type}
        detail={event.detail}
        comment={event.comment}
        scoreCount={scoreCount}
        setScoreCount={setScoreCount}
      />
    );
  });

  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <div className="gameContainer">
        {loadingGame === true ? (
          <div>
            <span>LOADING...</span>
          </div>
        ) : (
          <div className="game">
            <GameHeader
              key={id}
              home={teams.home}
              homeScore={goals.home}
              away={teams.away}
              awayScore={goals.away}
              matchStatus={fixture.status.short}
              minutesPlayed={fixture.status.elapsed}
              league={league.name}
              leagueLogo={league.logo}
              flag={league.flag}
              round={league.round}
              dateTime={fixture.date}
            />
            <div className="game-refVenue-container">
              <span className="game-referee">{fixture.referee}</span>
              <span className="game-venue">{fixture.venue.name}</span>
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
            {options === 1 && <Stats statistics={statistics} />}
            {options === 2 && <Lineups lineups={lineups} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
