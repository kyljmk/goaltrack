import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiGetLeagues } from "../hooks/UseApi";
import { ILeagueDetails, InfoContextType } from "../Types";
import useInfo from "../hooks/UseInfo";

function LeagueSearch() {
  const { newFavouriteLeagues, setNewFavouriteLeagues } =
    useInfo() as InfoContextType;
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

  const handleFavToggle = (id: number) => {
    if (newFavouriteLeagues.includes(id)) {
      setNewFavouriteLeagues(newFavouriteLeagues.filter((item) => item !== id));
    } else {
      setNewFavouriteLeagues((prev) => [...prev, id].sort((a, b) => a - b));
    }
  };

  function compare(a: ILeagueDetails[], b: ILeagueDetails[]) {
    if (a[0].country.name < b[0].country.name) {
      return -1;
    }
    if (a[0].country.name > b[0].country.name) {
      return 1;
    }
    return 0;
  }

  const leaguesByCountryElements = groupedFilteredLeagues
    .sort(compare)
    .map((country) => {
      country.sort((a, b) => a.league.id - b.league.id);
      const leagueElements = country.map((league) => {
        return (
          <div className="searchLeague" key={league.league.id}>
            <span
              onClick={() => navigate(`/leagues?id=${league.league.id}`)}
              className="searchLeague-name"
            >
              {league.league.name}
            </span>
            <div
              onClick={() => handleFavToggle(league.league.id)}
              className={
                newFavouriteLeagues.includes(league.league.id)
                  ? "searchLeague-star-container"
                  : "searchLeague-star-container-unselected"
              }
            >
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        );
      });
      return (
        <div className="searchLeague-country" key={country[0].country.code}>
          <span
            className="searchLeague-country-name"
            style={{ fontSize: "30px" }}
          >
            {country[0].country.name}
          </span>
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
      <form className="search-form">
        <FontAwesomeIcon
          className="search-form-icon"
          icon={faMagnifyingGlass}
          size="2xl"
        />
        <input
          className="search-form-input"
          type="search"
          value={searchQuery}
          onChange={handleChange}
          placeholder="League name or country.."
        />
      </form>
      <div className="searchLeague-container">{leaguesByCountryElements}</div>
    </div>
  );
}

export default LeagueSearch;
