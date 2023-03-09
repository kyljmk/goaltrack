import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApiGetCountries } from "../hooks/UseApi";
import { ICountry, ILeagueDetails, ITeamInfo } from "../Types";

function TeamSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const countries = useApiGetCountries();
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<ITeamInfo[]>([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [country, setCountry] = useState<string | null>(
    searchParams.get("country")
  );

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

  const handleCountryClick = (country: string) => {
    setFilteredCountries([]);
    navigate(`/teams?country=${country}`);
    setCountry(country);
    setSearchQuery("");
  };

  const countryElements = filteredCountries.map((country: ICountry) => {
    return (
      <div
        className="teamSearch-country"
        onClick={() => handleCountryClick(country.name)}
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
        onClick={() => navigate(`/teams?id=${team.team.id}`)}
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
      <form>
        <input
          type="search"
          value={searchQuery}
          onChange={country ? handleTeamChange : handleCountryChange}
        />
      </form>
      {!country && countryElements}
      {searchQuery.length >= 2 && teamElements}
    </div>
  );
}

export default TeamSearch;
