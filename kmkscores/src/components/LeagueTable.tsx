import React from "react";
import { useSearchParams } from "react-router-dom";
import { useApiGetLeagueTable } from "../hooks/UseApi";

function LeagueTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { leagueTable, loading } = useApiGetLeagueTable(Number(id));

  const tableElements = leagueTable[0].league.standings[0].map((team) => {
    return (
      <tr className="team-row">
        <td>{team.rank}</td>
        <td className="team-cell">
          <img src={team.team.logo} alt="Team's Logo" className="team-logo" />
          {team.team.name}
        </td>
        <td>{team.all.played}</td>
        <td className="web">{team.all.win}</td>
        <td className="web">{team.all.draw}</td>
        <td className="web">{team.all.lose}</td>
        <td>
          {team.all.goals.for}:{team.all.goals.against}
        </td>
        <td>{team.points}</td>
        <td>{team.form}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>G</th>
            <th>Pts</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>{tableElements}</tbody>
      </table>
    </div>
  );
}

export default LeagueTable;
