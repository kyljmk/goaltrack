import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiGetLeagues } from "../hooks/UseApi";
import { ILeagueDetails } from "../Types";

function TeamSearch() {
  const [options, setOptions] = useState<string>("league");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { leagues, cups } = useApiGetLeagues();
  const [groupedFilteredLeagues, setGroupedFilteredLeagues] = useState<
    ILeagueDetails[][]
  >([]);
  const navigate = useNavigate();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    setGroupedFilteredLeagues(
      options === "league"
        ? Object.values(
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
        : Object.values(
            cups
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

  const handleClick = async (option: string) => {
    setOptions(option);
    setSearchQuery("");
    setGroupedFilteredLeagues([]);
  };

  const leaguesByCountryElements = groupedFilteredLeagues.map((country) => {
    country.sort((a, b) => a.league.id - b.league.id);
    const leagueElements = country.map((league) => {
      return (
        <div
          key={league.league.id}
          onClick={() => navigate(`/leagues?id=${league.league.id}`)}
        >
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
            onClick={() => handleClick("league")}
          >
            League
          </span>
        </div>
        <div className="options-item-container">
          <span
            style={{ color: options === "league" ? "#f4a340" : "black" }}
            className="options-item"
            onClick={() => handleClick("cup")}
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

export default TeamSearch;
