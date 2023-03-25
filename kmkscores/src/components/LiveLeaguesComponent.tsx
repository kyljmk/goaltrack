import { faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FixtureResponse, IDailyLeagueProps, IFixtureProps } from "../Types";
import LiveScore from "./LiveScore";

function LiveLeagues({ fixtures, menu }: IDailyLeagueProps) {
  const liveStatuses: string[] = ["1H", "HT", "2H", "ET", "BT", "P", "INT"];
  const liveMatchesCheck = (input: FixtureResponse[]) => {
    let count: number = 0;
    input.forEach((item: FixtureResponse) => {
      if (liveStatuses.includes(item.fixture.status.short)) {
        count++;
      }
    });
    return count > 0;
  };
  const [showFixtures, setShowFixtures] = useState<boolean>(
    liveMatchesCheck(fixtures)
  );
  const navigate = useNavigate();

  function compare(a: FixtureResponse, b: FixtureResponse) {
    if (a.fixture.date < b.fixture.date) {
      return -1;
    }
    if (a.fixture.date > b.fixture.date) {
      return 1;
    }
    return 0;
  }

  const fixtureElements = fixtures.sort(compare).map((fixture) => {
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
        status: fixture.fixture.status.short,
        kickoff: fixture.fixture.date,
        minutesPlayed: fixture.fixture.status.elapsed,
      },
      menu: menu,
    };

    return (
      <LiveScore
        key={fixture.fixture.id}
        details={fixtureDetails.details}
        menu={menu}
      />
    );
  });

  const handleClick = () => {
    if (!menu) setShowFixtures((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate(`/leagues?id=${fixtures[0].league.id}`);
  };

  return (
    <div className="league">
      <div className="league-header">
        <div className="league-header-imageContainer">
          <img
            className="league-header-image"
            src={fixtures[0].league.logo}
            alt="logo of selected league"
          />
        </div>
        <div className="league-header-title-container">
          <h2 className="league-header-title" onClick={handleClick}>
            {fixtures[0].league.name}
            {fixtures[0].league.id}
          </h2>
          <div className="league-header-title-icon" onClick={handleNavigate}>
            <FontAwesomeIcon icon={faTable} size="xl" />
          </div>
        </div>
      </div>
      {showFixtures && fixtureElements}
    </div>
  );
}

export default LiveLeagues;
