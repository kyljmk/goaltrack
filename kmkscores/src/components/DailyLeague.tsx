import React, { useState } from "react";
import { DailyFixture, IDailyLeagueProps, IFixtureProps } from "../Types";
import LiveScore from "./LiveScore";

function DailyLeague({ fixtures }: IDailyLeagueProps) {
  const [showFixtures, setShowFixtures] = useState<boolean>(true);
  const fixtureElements = fixtures.map((fixture: DailyFixture) => {
    const fixtureDetails: IFixtureProps = {
      details: {
        id: fixture.fixture.id,
        homeName: fixture.teams.home.name,
        homeLogo: fixture.teams.home.logo,
        awayName: fixture.teams.away.name,
        awayLogo: fixture.teams.away.logo,
        homeScore: fixture.goals.home,
        awayScore: fixture.goals.away,
        flagUrl: fixture.league.flag,
      },
    };
    return (
      <LiveScore key={fixture.fixture.id} details={fixtureDetails.details} />
    );
  });

  return (
    <div className="league">
      <div className="league-header">
        <img
          className="league-header-image"
          src={fixtures[0].league.logo}
          alt="logo of selected league"
        />
        <h2
          className="league-header-title"
          onClick={() => {
            setShowFixtures((prev) => !prev);
          }}
        >
          {fixtures[0].league.name}
        </h2>
      </div>
      {showFixtures && fixtureElements}
    </div>
  );
}

export default DailyLeague;
