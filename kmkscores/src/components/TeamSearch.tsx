import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiGetCountries, useApiGetLeagues } from "../hooks/UseApi";
import { ICountry, ILeagueDetails } from "../Types";

function TeamSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const countries = useApiGetCountries();
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [groupedFilteredLeagues, setGroupedFilteredLeagues] = useState<
    ILeagueDetails[][]
  >([]);
  const navigate = useNavigate();
  console.log(filteredCountries);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name
          .toLocaleLowerCase()
          .includes(e.currentTarget.value.toLowerCase())
      )
    );
  };
  // setGroupedFilteredLeagues(
  //   Object.values(
  //     leagues
  //       .filter(
  //         (league) =>
  //           league.country.name
  //             .toLocaleLowerCase()
  //             .includes(e.currentTarget.value.toLowerCase()) ||
  //           league.league.name
  //             .toLocaleLowerCase()
  //             .includes(e.currentTarget.value.toLowerCase())
  //       )
  //       .reduce((x: any, y: any) => {
  //         (x[y.country.code] = x[y.country.code] || []).push(y);

  //         return x;
  //       }, {})
  //   )
  // );

  // const leaguesByCountryElements = groupedFilteredLeagues.map((country) => {
  //   country.sort((a, b) => a.league.id - b.league.id);
  //   const leagueElements = country.map((league) => {
  //     return (
  //       <div
  //         key={league.league.id}
  //         onClick={() => navigate(`/leagues?id=${league.league.id}`)}
  //       >
  //         <span>{league.league.name}</span>
  //         <span>{league.league.id}</span>
  //       </div>
  //     );
  //   });
  //   return (
  //     <div key={country[0].country.code}>
  //       <span style={{ fontSize: "30px" }}>{country[0].country.name}</span>
  //       {leagueElements}
  //     </div>
  //   );
  // });

  const countryElements = filteredCountries.map((country: ICountry) => {
    return (
      <div className="teamSearch-country">
        <img
          className="teamSearch-country-flag"
          src={country.flag}
          alt="country flag"
        />
        <span className="teamSearch-country-name">{country.name}</span>
      </div>
    );
  });

  return (
    <div className="search-container">
      <form>
        <input type="search" value={searchQuery} onChange={handleChange} />
      </form>
      {countryElements}
    </div>
  );
}

export default TeamSearch;
