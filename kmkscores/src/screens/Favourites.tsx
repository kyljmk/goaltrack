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
    favouriteTeams,
    setFavouriteTeams,
    favouriteLeagues,
    setFavouriteLeagues,
  } = useInfo() as InfoContextType;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("favouriteTeams", JSON.stringify(favouriteTeams));
  }, [favouriteTeams]);

  useEffect(() => {
    localStorage.setItem("favouriteLeagues", JSON.stringify(favouriteLeagues));
  }, [favouriteLeagues]);

  let favTeamsElements: JSX.Element[] | ReactElement = favouriteTeamsInfo.map(
    (team) => {
      const handleClick = () => {
        setFavouriteTeams(
          favouriteTeams.filter((item) => item !== team.team.id)
        );
      };
      return (
        <div key={team.team.id} className="team">
          <div className="teamInfo-container">
            <div className="team-logoContainer">
              <img
                src={team.team.logo}
                alt="Team's logo"
                className="team-logo"
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

  if (favouriteTeams.length === 0) {
    favTeamsElements = (
      <div className="team-empty">
        <span>You have to add your favourite leagues.</span>
        <div onClick={() => navigate("/teams")} className="addFavourite">
          <span>+</span>
        </div>
      </div>
    );
  }

  let favLeaguesElements: JSX.Element[] | ReactElement =
    favouriteLeaguesInfo.map((league) => {
      const handleClick = () => {
        if (favouriteLeagues.includes(league.league.id)) {
          setFavouriteLeagues(
            favouriteLeagues.filter((item) => item !== league.league.id)
          );
        } else {
          setFavouriteLeagues((prev) =>
            [...prev, league.league.id].sort((a, b) => a - b)
          );
        }
      };
      return (
        <div
          key={league.league.id}
          className={
            favouriteLeagues.includes(league.league.id)
              ? "favLeague"
              : "favLeague-unselected"
          }
        >
          <div className="leagueInfo-container">
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

  if (favouriteLeagues.length === 0) {
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
        <Menu menu={true} dropdown={false} />
        <div
          className="favourites-container"
          style={{ opacity: menu ? 0.1 : 1 }}
        >
          <div className="favourites">
            <h1 className="favourites-title">Favourites</h1>
            <div className="title-container">
              <h2 style={{ marginRight: "10px" }}>Teams</h2>
              {favouriteTeams.length !== 0 && (
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
              {favouriteLeagues.length !== 0 && (
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
