import React from "react";
import { useSearchParams } from "react-router-dom";
import { useApiGetLeagueTable } from "../hooks/UseApi";

function LeagueTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { leagueTable, loading } = useApiGetLeagueTable(Number(id));

  const tableElements = leagueTable[0].league.standings[0].map((team) => {
    const regExArray = team.form.match(/.{1,1}/g);
    const formattedForm = regExArray?.join(" ");

    return (
      <tr className="team-row">
        <td>{team.rank}</td>
        <td>
          <div className="team-name">
            <div className="logo-container">
              <img
                src={team.team.logo}
                alt="Team's Logo"
                className="team-logo"
              />
            </div>
            <div className="team-name-text">{team.team.name}</div>
          </div>
        </td>
        <td>{team.all.played}</td>
        <td className="web-display">{team.all.win}</td>
        <td className="web-display">{team.all.draw}</td>
        <td className="web-display">{team.all.lose}</td>
        <td>
          {team.all.goals.for}:{team.all.goals.against}
        </td>
        <td className="team-points">{team.points}</td>
        <td className="web-display-form">
          <span>{formattedForm}</span>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="leagueTable-title-container">
        <img
          src={leagueTable[0].league.logo}
          alt="League logo"
          className="leagueTable-title-logo"
        />
        <h1 className="leagueTable-title-text">{leagueTable[0].league.name}</h1>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>MP</th>
            <th className="web-display">W</th>
            <th className="web-display">D</th>
            <th className="web-display">L</th>
            <th>G</th>
            <th>P</th>
            <th className="web-display-form">Form</th>
          </tr>
        </thead>
        <tbody>{tableElements}</tbody>
      </table>
    </div>
  );
}

export default LeagueTable;
