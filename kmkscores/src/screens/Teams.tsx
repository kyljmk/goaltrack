import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "../styles/Teams.css";
import TeamInfo from "../components/TeamInfo";
import TeamSearch from "../components/TeamSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { InfoContextType, ITeamInfo } from "../Types";
import useInfo from "../hooks/UseInfo";

function Teams() {
  const [menu, setMenu] = useState<boolean>(false);
  const { newFavouriteTeams } = useInfo() as InfoContextType;

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const [country, setCountry] = useState<string | null>(
    searchParams.get("country")
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredTeams, setFilteredTeams] = useState<ITeamInfo[]>([]);

  useEffect(() => {
    localStorage.setItem(
      "newFavouriteTeams",
      JSON.stringify(newFavouriteTeams)
    );
  }, [newFavouriteTeams]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/teams");
    setCountry("");
    setSearchQuery("");
    setFilteredTeams([]);
  };

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
        <Menu menu={true} dropdown={false} setMenu={setMenu} />
        <div className="teams-container" style={{ opacity: menu ? 0.1 : 1 }}>
          <div className="teams">
            <div className="teams-title-container">
              <h1 className="teams-title">Teams</h1>
              <div onClick={handleReturn} className="teams-title-return">
                {(country || id === null) && (
                  <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                )}
              </div>
            </div>
            {id ? (
              <TeamInfo />
            ) : (
              <TeamSearch
                country={country}
                setCountry={setCountry}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filteredTeams={filteredTeams}
                setFilteredTeams={setFilteredTeams}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
