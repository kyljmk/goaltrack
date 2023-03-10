import React from "react";
import { useSearchParams } from "react-router-dom";
import { useApiGetTeamInfo } from "../hooks/UseApi";

function TeamInfo() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  const teamInfo = useApiGetTeamInfo(id);

  return (
    <div>
      <div className="teamHeader">
        <img
          src={teamInfo?.team.logo}
          alt="club logo"
          className="teamHeader-logo"
        />
        <div className="teamHeader-nameContainer">
          <h1 className="teamHeader-name">{teamInfo?.team.name}</h1>
          <div> ({teamInfo?.team.country}) </div>
        </div>
      </div>
      <div className="teams-optionsContainer">
        <div className="teams-option">Results</div>
        <div className="teams-option">Fixtures</div>
        <div className="teams-option">Standings</div>
        <div className="teams-option">Squad</div>
      </div>
    </div>
  );
}

export default TeamInfo;
