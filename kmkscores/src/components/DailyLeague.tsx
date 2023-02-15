import React, { useState } from "react";
import { DailyFixture, IDailyLeagueProps, IFixtureProps } from "../Types";
import LiveScore from "./LiveScore";

function DailyLeague({ fixtures }: IDailyLeagueProps) {
  const [showFixtures, setShowFixtures] = useState<boolean>(false);
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
    <div style={{ border: "1px solid white", width: "100%" }}>
      <h2
        style={{ cursor: "pointer", width: "100%" }}
        onClick={() => {
          setShowFixtures((prev) => !prev);
        }}
      >
        {fixtures[0].league.name}
      </h2>
      {showFixtures && fixtureElements}
    </div>
  );
}

export default DailyLeague;
