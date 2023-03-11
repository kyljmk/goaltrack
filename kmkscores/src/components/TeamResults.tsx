import { match } from "assert";
import React from "react";
import { FixtureResponse, ITeamResultsProps } from "../Types";

function TeamResults({ teamResults, id }: ITeamResultsProps) {
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
      backgroundColor = "green";
    } else if (opposition.winner) {
      matchResult = "Loss";
      backgroundColor = "red";
    } else {
      matchResult = "Draw";
      backgroundColor = "#f4a340";
    }

    const month = t.fixture.date.slice(5, 7);
    const day = t.fixture.date.slice(8, 10);

    return (
      <div key={t.fixture.id} className="team-result">
        <span>{`${day}.${month}`}</span>
        <div className="team-result-names">
          <span style={{ marginBottom: "5px" }}>{t.teams.home.name}</span>
          <span>{t.teams.away.name}</span>
        </div>
        <div className="team-result-scores">
          <span style={{ marginBottom: "5px" }}>{t.goals.home}</span>
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
