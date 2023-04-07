import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useApiGetLeagueIdAndSeason,
  useApiGetTeamFixturesResults,
  useApiGetTeamInfo,
} from "../hooks/UseApi";
import useInfo from "../hooks/UseInfo";
import { FixtureResponse, InfoContextType } from "../Types";
import LeagueTable from "./LeagueTable";
import TeamResultsFixtures from "./TeamResultsFixtures";
import TeamSquad from "./TeamSquad";

function TeamInfo() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const [options, setOptions] = useState<number>(5);
  const { newFavouriteTeams, setNewFavouriteTeams } =
    useInfo() as InfoContextType;

  const teamInfo = useApiGetTeamInfo(id);
  const { leagueId, season } = useApiGetLeagueIdAndSeason(id);

  const handleFavToggle = (id: number) => {
    if (newFavouriteTeams.includes(id)) {
      setNewFavouriteTeams(newFavouriteTeams.filter((item) => item !== id));
    } else {
      setNewFavouriteTeams((prev) => [...prev, id].sort((a, b) => a - b));
    }
  };

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
        <div
          onClick={() => handleFavToggle(id)}
          className={
            newFavouriteTeams.includes(id)
              ? "teamHeader-star-selected"
              : "teamHeader-star-unselected"
          }
        >
          <FontAwesomeIcon icon={faStar} size="2xl" />
        </div>
      </div>
      <div className="teams-optionsContainer">
        <div
          className={options === 0 ? "teams-option-selected" : "teams-option"}
          onClick={() => setOptions(0)}
        >
          Results
        </div>
        <div
          className={options === 1 ? "teams-option-selected" : "teams-option"}
          onClick={() => setOptions(1)}
        >
          Fixtures
        </div>
        <div
          className={options === 2 ? "teams-option-selected" : "teams-option"}
          onClick={() => setOptions(2)}
        >
          Standings
        </div>
        <div
          className={
            options === 3 ? "teams-option-selected" : "teams-option-notReady"
          }
          // onClick={() => setOptions(3)}
        >
          Squad
        </div>
      </div>
      {options === 0 && (
        <TeamResultsFixtures
          season={season}
          id={id}
          resultsFixtures={"results"}
        />
      )}
      {options === 1 && (
        <TeamResultsFixtures
          season={season}
          id={id}
          resultsFixtures={"fixtures"}
        />
      )}
      {options === 2 && (
        <LeagueTable id={leagueId} currentSeason={season} teamPage={true} />
      )}
      {options === 3 && <TeamSquad />}
    </div>
  );
}

export default TeamInfo;
