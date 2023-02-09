import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IFixtureDetails } from "../Types";
import "../styles/Game.css";
import Events from "../components/Events";
import GameHeader from "../components/GameHeader";
import Lineups from "../components/Lineups";
import Stats from "../components/Stats";

function Game() {
  const fixtureId: number = useLocation().state.id;
  const [options, setOptions] = useState<number>(0);

  const [fixtureDetails, setFixtureDetails] = useState<IFixtureDetails>({
    home: {
      name: "QPR",
      logo: "https://media.api-sports.io/football/teams/72.png",
      score: 1,
    },
    away: {
      name: "Fulham",
      logo: "https://media-3.api-sports.io/football/teams/36.png",
      score: 2,
    },
    matchStatus: "FT",
    minutesPlayed: 90,
    league: "Championship",
    leagueLogo: "https://media-3.api-sports.io/football/leagues/40.png",
    round: "Regular Season - 11",
    dateTime: "2017-09-29T18:45:00+00:00",
    referee: "Peter Bankes, England",
    venue: "Loftus Road",
    events: [
      {
        time: {
          elapsed: 17,
          extra: null,
        },
        team: {
          id: 72,
          name: "QPR",
          logo: "https://media.api-sports.io/football/teams/72.png",
        },
        player: {
          id: 2752,
          name: "Massimo Luongo",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comment: null,
      },
    ],
    lineups: {
      home: {
        team: {
          id: 72,
          name: "QPR",
          logo: "https://media.api-sports.io/football/teams/72.png",
          colors: "string",
        },
        coach: {
          id: 1,
          name: "string",
          photo: "string",
        },
        formation: "string",
        startXI: [
          {
            player: {
              id: 1,
              name: "string",
              number: 1,
              pos: "string",
              grid: "string",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 1,
              name: "string",
              number: 1,
              pos: "string",
              grid: "string",
            },
          },
        ],
      },
      away: {
        team: {
          id: 72,
          name: "QPR",
          logo: "https://media.api-sports.io/football/teams/72.png",
          colors: "string",
        },
        coach: {
          id: 1,
          name: "string",
          photo: "string",
        },
        formation: "string",
        startXI: [
          {
            player: {
              id: 1,
              name: "string",
              number: 1,
              pos: "string",
              grid: "string",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 1,
              name: "",
              number: 1,
              pos: "",
              grid: "",
            },
          },
        ],
      },
    },
    statistics: {
      home: {
        team: {
          id: 0,
          name: "",
          logo: "",
        },
        statistics: [
          {
            type: "",
            value: 0,
          },
        ],
      },
      away: {
        team: {
          id: 0,
          name: "",
          logo: "",
        },
        statistics: [
          {
            type: "",
            value: 0,
          },
        ],
      },
    },
  });
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`,
      options
    )
      .then((response) => response.json())
      .then((data) =>
        setFixtureDetails({
          home: {
            name: data.response[0].teams.home.name,
            logo: data.response[0].teams.home.logo,
            score: data.response[0].goals.home,
          },
          away: {
            name: data.response[0].teams.away.name,
            logo: data.response[0].teams.away.logo,
            score: data.response[0].goals.away,
          },
          matchStatus: data.response[0].fixture.status.short,
          minutesPlayed: data.response[0].fixture.status.elapsed,
          league: data.response[0].league.name,
          leagueLogo: data.response[0].league.logo,
          round: data.response[0].league.round,
          dateTime: data.response[0].fixture.data,
          referee: data.response[0].fixture.referee,
          venue: data.response[0].fixture.venue.name,
          events: data.response[0].events,
          lineups: {
            home: data.response[0].lineups[0],
            away: data.response[0].lineups[1],
          },
          statistics: {
            home: data.response[0].statistics[0],
            away: data.response[0].statistics[1],
          },
        })
      )
      .catch((err) => console.error(err));
  }, []);

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
      <Header />
      <div className="gameContainer">
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
          {options === 2 && <Lineups home={lineups.home} away={lineups.away} />}
        </div>
      </div>
    </div>
  );
}

export default Game;
