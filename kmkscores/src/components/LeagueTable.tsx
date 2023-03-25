import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApiGetLeagueTable } from "../hooks/UseApi";
import useInfo from "../hooks/UseInfo";
import { ILeagueInfo, ILeagueTableProps, InfoContextType } from "../Types";

function LeagueTable({ id, teamPage }: ILeagueTableProps) {
  const { leagueTable } = useApiGetLeagueTable(id);
  const { newFavouriteLeagues, setNewFavouriteLeagues } =
    useInfo() as InfoContextType;
  const navigate = useNavigate();

  const handleFavToggle = (id: number) => {
    if (newFavouriteLeagues.includes(id)) {
      setNewFavouriteLeagues(newFavouriteLeagues.filter((item) => item !== id));
    } else {
      setNewFavouriteLeagues((prev) => [...prev, id].sort((a, b) => a - b));
    }
  };

  const tableElements = leagueTable[0].league.standings.map((league) => {
    const seperateTableElements = league.map((team) => {
      const regExArray = team.form.match(/.{1,1}/g);
      const formattedForm = regExArray?.join(" ");

      return (
        <tr className="team-row">
          <td>{team.rank}</td>
          <td>
            <div
              className="team-name"
              onClick={() => navigate(`/teams?id=${team.team.id}`)}
            >
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
          <tbody>{seperateTableElements}</tbody>
        </table>
      </div>
    );
  });

  return (
    <div>
      {!teamPage && (
        <div className="leagueTable-title-container">
          <img
            src={leagueTable[0].league.logo}
            alt="League logo"
            className="leagueTable-title-logo"
          />
          <h1 className="leagueTable-title-text">
            {leagueTable[0].league.name}
          </h1>
          <div
            onClick={() => handleFavToggle(leagueTable[0].league.id)}
            className={
              newFavouriteLeagues.includes(leagueTable[0].league.id)
                ? "leagueTable-title-starSelected"
                : "leagueTable-title-starUnselected"
            }
          >
            <FontAwesomeIcon icon={faStar} size="2xl" />
          </div>
        </div>
      )}
      <div style={{ marginTop: teamPage ? "20px" : "0" }}>{tableElements}</div>
    </div>
  );
}

export default LeagueTable;
