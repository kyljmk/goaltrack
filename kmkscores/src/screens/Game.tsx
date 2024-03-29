import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Game.css";
import Events from "../components/Events";
import GameHeader from "../components/GameHeader";
import Lineups from "../components/Lineups";
import Stats from "../components/Stats";
import { useApiGetGame } from "../hooks/UseApi";
import Menu from "../components/Menu";

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

  const firstHalfElements = events
    ?.filter((event) => event.time.elapsed <= 45)
    .map((event, i) => {
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
          comment={event.comments}
          scoreCount={scoreCount}
          setScoreCount={setScoreCount}
        />
      );
    });

  const secondHalfElements = events
    ?.filter((event) => event.time.elapsed > 45 && event.time.elapsed < 91)
    .map((event, i) => {
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
          comment={event.comments}
          scoreCount={scoreCount}
          setScoreCount={setScoreCount}
        />
      );
    });

  const aetElements = events
    ?.filter(
      (event) =>
        event.time.elapsed > 90 && event.comments !== "Penalty Shootout"
    )
    .map((event, i) => {
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
          comment={event.comments}
          scoreCount={scoreCount}
          setScoreCount={setScoreCount}
        />
      );
    });

  const penaltyElements = events
    ?.filter((event) => event.comments === "Penalty Shootout")
    .map((event, i) => {
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
          comment={event.comments}
          scoreCount={scoreCount}
          setScoreCount={setScoreCount}
        />
      );
    });

  const halftimeCheck: string[] = [
    "HT",
    "2H",
    "ET",
    "BT",
    "P",
    "FT",
    "AET",
    "PEN",
  ];
  const fulltimeCheck: string[] = ["ET", "BT", "P", "FT", "AET", "PEN"];
  const aetCheck: string[] = ["P", "AET", "PEN"];
  const halftimeScore: string = `${fixtureDetails.score.halftime.home} - ${fixtureDetails.score.halftime.away}`;
  const fulltimeScore: string = `${fixtureDetails.score.fulltime.home} - ${fixtureDetails.score.fulltime.away}`;
  const aetScore: string = `${fixtureDetails.score.extratime.home} - ${fixtureDetails.score.extratime.away}`;
  const penScore: string = `${fixtureDetails.score.penalty.home} - ${fixtureDetails.score.penalty.away}`;

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div className="menu-container">
        <Menu menu={true} dropdown={false} setMenu={setMenu} />
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
                country={league.country}
                international={league.country === "World"}
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
              {options === 0 &&
                (fixture.status.short === "NS" ? (
                  <div className="game-prematchMessage">
                    The match hasn't kicked off yet.
                  </div>
                ) : (
                  <div className="events-container">
                    {firstHalfElements}
                    {halftimeCheck.includes(
                      fixtureDetails.fixture.status.short
                    ) && (
                      <div className="events-halftimeBanner">
                        <span className="events-halftimeText">HT</span>
                        <span className="events-halftimeScore">
                          {halftimeScore}
                        </span>
                      </div>
                    )}
                    {secondHalfElements}
                    {fulltimeCheck.includes(
                      fixtureDetails.fixture.status.short
                    ) && (
                      <div className="events-fulltimeBanner">
                        <span className="events-fulltimeText">FT</span>
                        <span className="events-fulltimeScore">
                          {fulltimeScore}
                        </span>
                      </div>
                    )}
                    {aetElements}
                    {aetCheck.includes(fixtureDetails.fixture.status.short) && (
                      <div className="events-fulltimeBanner">
                        <span className="events-fulltimeText">AET</span>
                        <span className="events-fulltimeScore">{aetScore}</span>
                      </div>
                    )}
                    {penaltyElements}
                    {penaltyElements !== undefined && (
                      <div className="events-fulltimeBanner">
                        <span className="events-fulltimeText">PEN</span>
                        <span className="events-fulltimeScore">{penScore}</span>
                      </div>
                    )}
                  </div>
                ))}
              {options === 1 &&
                (fixture.status.short === "NS" ? (
                  <div className="game-prematchMessage">
                    The match hasn't kicked off yet.
                  </div>
                ) : (
                  <Stats statistics={statistics} />
                ))}
              {options === 2 &&
                (fixtureDetails.lineups?.length === 0 ? (
                  <div className="game-prematchMessage">
                    The line-ups havn't been released yet.
                  </div>
                ) : (
                  <Lineups lineups={lineups} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
