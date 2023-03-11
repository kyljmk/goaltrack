import { match } from "assert";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FixtureResponse, ITeamResultsProps } from "../Types";

function TeamResults({ teamResults, id }: ITeamResultsProps) {
  const navigate = useNavigate();

  function compare(a: FixtureResponse, b: FixtureResponse) {
    if (a.fixture.date < b.fixture.date) {
      return 1;
    }
    if (a.fixture.date > b.fixture.date) {
      return -1;
    }
    return 0;
  }

  const teamResultElements = teamResults.sort(compare).map((t) => {
    const team = t.teams.home.id === id ? t.teams.home : t.teams.away;
    const opposition = t.teams.home.id === id ? t.teams.away : t.teams.home;
    let matchResult = "";
    let backgroundColor = "";
    if (team.winner) {
      matchResult = "Win";
      backgroundColor = "darkgreen";
    } else if (opposition.winner) {
      matchResult = "Loss";
      backgroundColor = "darkred";
    } else {
      matchResult = "Draw";
      backgroundColor = "#f4a340";
    }

    const month = t.fixture.date.slice(5, 7);
    const day = t.fixture.date.slice(8, 10);

    return (
      <div
        key={t.fixture.id}
        className="team-result"
        onClick={() => navigate(`/game?id=${t.fixture.id}`)}
      >
        <span>{`${day}.${month}`}</span>

        <div className="team-result-names">
          <div className="team-result-nameContainer">
            <img
              src={t.teams.home.logo}
              alt="team logo"
              className="team-result-logo"
            />
            <span>{t.teams.home.name}</span>
          </div>
          <div className="team-result-nameContainer">
            <img
              src={t.teams.away.logo}
              alt="team logo"
              className="team-result-logo"
            />
            <span>{t.teams.away.name}</span>
          </div>
        </div>
        <div className="team-result-scores">
          <span>{t.goals.home}</span>
          <span>{t.goals.away}</span>
        </div>
        <span style={{ backgroundColor }} className="team-result-matchResult">
          {matchResult.slice(0, 1)}
        </span>
      </div>
    );
  });
  return <div>{teamResultElements}</div>;
}

export default TeamResults;
