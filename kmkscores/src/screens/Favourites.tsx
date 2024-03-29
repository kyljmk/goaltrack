import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import {
  useApiGetFavouriteLeagues,
  useApiGetFavouriteTeams,
} from "../hooks/UseApi";
import useInfo from "../hooks/UseInfo";
import "../styles/Favourites.css";
import { ILeagueInfo, InfoContextType } from "../Types";

function Favourites() {
  const [menu, setMenu] = useState<boolean>(false);
  const favouriteTeamsInfo = useApiGetFavouriteTeams();
  const favouriteLeaguesInfo = useApiGetFavouriteLeagues();

  const {
    newFavouriteTeams,
    setNewFavouriteTeams,
    newFavouriteLeagues,
    setNewFavouriteLeagues,
  } = useInfo() as InfoContextType;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "newFavouriteTeams",
      JSON.stringify(newFavouriteTeams)
    );
  }, [newFavouriteTeams]);

  useEffect(() => {
    localStorage.setItem(
      "newFavouriteLeagues",
      JSON.stringify(newFavouriteLeagues)
    );
  }, [newFavouriteLeagues]);

  let favTeamsElements: JSX.Element[] | ReactElement = favouriteTeamsInfo.map(
    (team) => {
      const handleClick = () => {
        if (newFavouriteTeams.includes(team.team.id)) {
          setNewFavouriteTeams(
            newFavouriteTeams.filter((item) => item !== team.team.id)
          );
        } else {
          setNewFavouriteTeams((prev) =>
            [...prev, team.team.id].sort((a, b) => a - b)
          );
        }
      };
      return (
        <div
          key={team.team.id}
          className={
            newFavouriteTeams.includes(team.team.id)
              ? "team"
              : "team-unselected"
          }
        >
          <div
            className="teamInfo-container"
            onClick={() => navigate(`/teams?id=${team.team.id}`)}
          >
            <div className="team-logoContainer">
              <img
                src={team.team.logo}
                alt="Team's logo"
                className="favTeam-logo"
              />
            </div>
            <span className="team-name">{team.team.name}</span>
            <span className="team-country">{`(${team.team.country})`}</span>
          </div>
          <div className="team-star-container" onClick={handleClick}>
            <FontAwesomeIcon className="team-star" icon={faStar} />
          </div>
        </div>
      );
    }
  );

  if (newFavouriteTeams.length === 0) {
    favTeamsElements = (
      <div className="team-empty">
        <span>You have to add your favourite teams.</span>
        <div onClick={() => navigate("/teams")} className="addFavourite">
          <span>+</span>
        </div>
      </div>
    );
  }

  let favLeaguesElements: JSX.Element[] | ReactElement = favouriteLeaguesInfo
    .filter((team) => team !== undefined)
    .map((league) => {
      const handleClick = () => {
        if (newFavouriteLeagues.includes(league.league.id)) {
          setNewFavouriteLeagues(
            newFavouriteLeagues.filter((item) => item !== league.league.id)
          );
        } else {
          setNewFavouriteLeagues((prev) =>
            [...prev, league.league.id].sort((a, b) => a - b)
          );
        }
      };
      const season = league.seasons[league.seasons.length - 1].year;
      return (
        <div
          key={league.league.id}
          className={
            newFavouriteLeagues.includes(league.league.id)
              ? "favLeague"
              : "favLeague-unselected"
          }
        >
          <div
            className="leagueInfo-container"
            onClick={() =>
              navigate(
                `/leagues?id=${league.league.id}&currentSeason=${season}`
              )
            }
          >
            <div className="league-logoContainer">
              <img
                src={league.league.logo}
                alt="League's logo"
                className="league-logo"
              />
            </div>
            <span className="league-name">{league.league.name}</span>
            <span className="league-country">{`(${league.country.name})`}</span>
          </div>
          <div className="league-star-container" onClick={handleClick}>
            <FontAwesomeIcon className="league-star" icon={faStar} />
          </div>
        </div>
      );
    });

  if (newFavouriteLeagues.length === 0) {
    favLeaguesElements = (
      <div className="favLeague-empty" style={{ fontSize: "16px" }}>
        <span>You have to add your favourite leagues.</span>
        <div onClick={() => navigate("/leagues")} className="addFavourite">
          <span>+</span>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
        <Menu menu={true} dropdown={false} setMenu={setMenu} />
        <div
          className="favourites-container"
          style={{ opacity: menu ? 0.1 : 1 }}
        >
          <div className="favourites">
            <h1 className="favourites-title">Favourites</h1>
            <div className="title-container">
              <h2 style={{ marginRight: "10px" }}>Teams</h2>
              {newFavouriteTeams.length !== 0 && (
                <div
                  onClick={() => navigate("/teams")}
                  className="addFavourite"
                >
                  <span>+</span>
                </div>
              )}
            </div>
            <div className="team-container">{favTeamsElements}</div>
            <div className="title-container">
              <h2 style={{ marginRight: "10px" }}>Leagues</h2>
              {newFavouriteLeagues.length !== 0 && (
                <div
                  onClick={() => navigate("/leagues")}
                  className="addFavourite"
                >
                  <span>+</span>
                </div>
              )}
            </div>
            <div className="league-container">{favLeaguesElements}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
