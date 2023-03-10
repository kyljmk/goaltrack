import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApiGetCountries } from "../hooks/UseApi";
import {
  ICountry,
  ILeagueDetails,
  ITeamInfo,
  ITeamSearchProps,
} from "../Types";

function TeamSearch({ country, setCountry }: ITeamSearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const countries = useApiGetCountries();
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<ITeamInfo[]>([]);
  const [flag, setFlag] = useState<string>("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [teams, setTeams] = useState<ITeamInfo[]>([]);
  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async () => {
    const resposne = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/teams?country=${country}`,
      options
    );
    const data = await resposne.json();
    setTeams(data.response);
  };

  useEffect(() => {
    fetchApi();
  }, [country]);

  const handleCountryChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name
          .toLowerCase()
          .startsWith(e.currentTarget.value.toLowerCase())
      )
    );
  };

  const handleTeamChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    if (teams) {
      setFilteredTeams(
        teams.filter((team) =>
          team.team.name
            .toLocaleLowerCase()
            .startsWith(e.currentTarget.value.toLocaleLowerCase())
        )
      );
    }
  };

  const handleCountryClick = (country: ICountry) => {
    setFilteredCountries([]);
    navigate(`/teams?country=${country.name}`);
    setCountry(country.name);
    setFlag(country.flag);
    setSearchQuery("");
  };

  const countryElements = filteredCountries.map((country: ICountry) => {
    if (country.name === "England") {
      country.flag =
        "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg";
    }
    if (country.name === "Scotland") {
      country.flag =
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg";
    }
    if (country.name === "Wales") {
      country.flag =
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg";
    }
    if (country.name === "Northern-Ireland") {
      country.flag =
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg";
    }
    if (country.name === "World") {
      country.flag = "world.png";
    }
    return (
      <div
        className="teamSearch-country"
        onClick={() => handleCountryClick(country)}
        key={country.name}
      >
        <img
          className="teamSearch-country-flag"
          src={country.flag}
          alt="country flag"
        />
        <span className="teamSearch-country-name">{country.name}</span>
      </div>
    );
  });

  const teamElements = filteredTeams.map((team: ITeamInfo) => {
    return (
      <div
        className="teamSearch-team"
        onClick={() => {
          navigate(`/teams?id=${team.team.id}`);
        }}
        key={team.team.id}
      >
        <img
          className="teamSearch-team-logo"
          src={team.team.logo}
          alt="team logo"
        />
        <span className="teamSearch-team-name">{team.team.name}</span>
      </div>
    );
  });

  return (
    <div className="search-container">
      <form className="teamSearch-form">
        {country && (
          <img className="search-countryFlag" src={flag} alt="country's flag" />
        )}
        {!country && (
          <FontAwesomeIcon
            className="search-form-icon"
            icon={faMagnifyingGlass}
            size="2xl"
          />
        )}
        <input
          className="search-input"
          type="search"
          value={searchQuery}
          placeholder={country ? "Enter team name.." : "Search by country.."}
          onChange={country ? handleTeamChange : handleCountryChange}
        />
      </form>
      {!country && countryElements}
      {searchQuery.length >= 2 && teamElements}
    </div>
  );
}

export default TeamSearch;
