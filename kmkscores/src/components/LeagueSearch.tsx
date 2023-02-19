import React, { ChangeEvent, useState } from "react";
import { useApiGetLeagues } from "../hooks/UseApi";
import { ILeagueDetails } from "../Types";

function LeagueSearch() {
  const [options, setOptions] = useState<string>("league");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [leagues, setLeagues] = useState<ILeagueDetails[]>(
    useApiGetLeagues(options)
  );
  const [filteredLeagues, setFilteredLeagues] = useState<ILeagueDetails[]>([]);
  const [groupedFilteredLeagues, setGroupedFilteredLeagues] = useState<
    ILeagueDetails[][]
  >([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    setGroupedFilteredLeagues(
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
            (x[y.country.code] = x[y.country.code] || []).push(y);

            return x;
          }, {})
      )
    );
  };

  console.log(leagues);

  const leaguesByCountryElements = groupedFilteredLeagues.map((country) => {
    const leagueElements = country.map((league) => {
      return (
        <div key={league.league.id}>
          <span>{league.league.name}</span>
          <span>{league.league.id}</span>
        </div>
      );
    });
    return (
      <div key={country[0].country.code}>
        <span style={{ fontSize: "30px" }}>{country[0].country.name}</span>
        {leagueElements}
      </div>
    );
  });

  console.log(groupedFilteredLeagues);

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
      {leaguesByCountryElements}
    </div>
  );
}

export default LeagueSearch;
