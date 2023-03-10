import { faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDailyLeagueProps, IFixtureProps } from "../Types";
import LiveScore from "./LiveScore";

function LiveLeagues({ fixtures, menu }: IDailyLeagueProps) {
  const [showFixtures, setShowFixtures] = useState<boolean>(true);
  const navigate = useNavigate();

  const fixtureElements = fixtures.map((fixture) => {
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
