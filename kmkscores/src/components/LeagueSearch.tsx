import React, { ChangeEvent, useState } from "react";
import { useApiGetLeagues } from "../hooks/UseApi";
import { ILeagueDetails } from "../Types";
import LeagueResults from "./LeagueResults";

function LeagueSearch() {
  const [options, setOptions] = useState<string>("league");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredLeagues, setFilteredLeagues] = useState<ILeagueDetails[][]>(
    []
  );

  const { leagues, leaguesLoading } = useApiGetLeagues(options);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    setFilteredLeagues(
      Object.values(
        leagues
          .filter(
            (league) =>
              league.country.name
                .toLocaleLowerCase()
                .includes(e.currentTarget.value.toLowerCase()) ||
              league.league.name
                .toLocaleLowerCase()
                .includes(e.currentTarget.value.toLowerCase())
          )
          .reduce((x: any, y: any) => {
            (x[y.league.id] = x[y.league.id] || []).push(y);

            return x;
          }, {})
      )
    );
  };

  console.log(filteredLeagues);

  const leaguesByCountryElements = filteredLeagues.map((country) => {
    return <LeagueResults country={country} />;
  });

  console.log(filteredLeagues);

  return (
    <div className="search-container">
      <div className="options">
        <div
          className="options-toggle"
          style={{ left: options === "league" ? "-1px" : "77px" }}
        />
        <div className="options-item-container">
          <span
            style={{ color: options === "league" ? "black" : "#f4a340" }}
            className="options-item"
            onClick={() => {
              setOptions("league");
            }}
          >
            League
          </span>
        </div>
        <div className="options-item-container">
          <span
            style={{ color: options === "league" ? "#f4a340" : "black" }}
            className="options-item"
            onClick={() => {
              setOptions("cup");
            }}
          >
            Cup
          </span>
        </div>
      </div>
      <form>
        <input type="search" value={searchQuery} onChange={handleChange} />
      </form>
      {filteredLeagues}
    </div>
  );
}

export default LeagueSearch;
