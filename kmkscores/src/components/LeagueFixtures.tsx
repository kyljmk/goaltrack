import {
  faAngleDown,
  faAngleUp,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FixtureResponse, IDailyLeagueProps, IFixtureProps } from "../Types";
import LiveScore from "./LiveScore";

function LeagueFixtures({ fixtures, menu }: IDailyLeagueProps) {
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
  const [showFixtures, setShowFixtures] = useState<boolean>(
    liveMatchesCheck(fixtures) > 0
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
  if (fixtures[0].league.country === "England") {
    fixtures[0].league.flag =
      "https://media-2.api-sports.io/football/teams/10.png";
  }
  if (fixtures[0].league.country === "Scotland") {
    fixtures[0].league.flag =
      "https://media-1.api-sports.io/football/teams/1775.png";
  }
  if (fixtures[0].league.country === "Wales") {
    fixtures[0].league.flag =
      "https://media-2.api-sports.io/football/teams/767.png";
  }
  if (fixtures[0].league.country === "Northern Ireland") {
    fixtures[0].league.flag =
      "https://media-2.api-sports.io/football/teams/8213.png";
  }

  return (
    <div className="league">
      <div className="league-header">
        <div className="league-header-imageContainer">
          <img
            className="league-header-image"
            src={fixtures[0].league.flag}
            alt="logo of selected league"
          />
        </div>
        <div className="league-header-title-container">
          <h2 className="league-header-title" onClick={handleClick}>
            {fixtures[0].league.name}
            {!showFixtures && (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ marginLeft: "5px" }}
              />
            )}
            {showFixtures && (
              <FontAwesomeIcon icon={faAngleUp} style={{ marginLeft: "5px" }} />
            )}
            <span className="league-header-liveGames">
              {liveMatchesCheck(fixtures)}
            </span>
            <span className="league-header-allGames">{fixtures.length}</span>
          </h2>
          {showFixtures && (
            <div className="league-header-title-icon" onClick={handleNavigate}>
              <FontAwesomeIcon icon={faTable} size="xl" />
            </div>
          )}
        </div>
      </div>
      {showFixtures && fixtureElements}
    </div>
  );
}

export default LeagueFixtures;
