import React, { useState } from "react";
import { FixtureResponse, ICountryLeagueProps } from "../Types";
import LeaguesFixtures from "./LeagueFixtures";

function CountryLeagues({ country, menu }: ICountryLeagueProps) {
  const liveStatuses: string[] = ["1H", "HT", "2H", "ET", "BT", "P", "INT"];
  const liveMatchesCheck = (input: FixtureResponse[]) => {
    let count: number = 0;
    input.forEach((item: FixtureResponse) => {
      if (liveStatuses.includes(item.fixture.status.short)) {
        count++;
      }
    });
    return count;
  };
  const [showLeagues, setShowLeagues] = useState<boolean>(false);
  const orderedCountryElements: FixtureResponse[][] = Object.values(
    country
      .sort((a, b) => a.league.id - b.league.id)
      .reduce((x: any, y: any) => {
        (x[y.league.name] = x[y.league.name] || []).push(y);

        return x;
      }, {})
  );

  let countryElements: JSX.Element[] = orderedCountryElements.map((leagues) => {
    return (
      <LeaguesFixtures
        key={leagues[0].league.id}
        fixtures={leagues}
        menu={menu}
      />
    );
  });

  return (
    <div>
      <div className="country-container">
        <h2
          className="country-title"
          onClick={() => setShowLeagues((prev) => !prev)}
        >
          {country[0].league.country}
        </h2>
      </div>
      {showLeagues && countryElements}
    </div>
  );
}

export default CountryLeagues;
