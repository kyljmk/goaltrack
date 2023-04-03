import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import LeagueSearch from "../components/LeagueSearch";
import LeagueTable from "../components/LeagueTable";
import Menu from "../components/Menu";
import { useCurrentSeason } from "../hooks/UseCurrentYear";
import useInfo from "../hooks/UseInfo";
import "../styles/Leagues.css";
import { InfoContextType } from "../Types";

function Leagues() {
  const [menu, setMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const { newFavouriteLeagues } = useInfo() as InfoContextType;

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const currentSeason = Number(searchParams.get("currentSeason"));

  useEffect(() => {
    localStorage.setItem(
      "newFavouriteLeagues",
      JSON.stringify(newFavouriteLeagues)
    );
  }, [newFavouriteLeagues]);

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
        <Menu menu={true} dropdown={false} setMenu={setMenu} />
        <div className="leagues-container" style={{ opacity: menu ? 0.1 : 1 }}>
          <div className="leagues">
            <div className="leagues-title-container">
              <h1 className="leagues-title">Leagues</h1>
              {id !== 0 && (
                <div
                  onClick={() => navigate("/leagues")}
                  className="leagues-title-return"
                >
                  <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                </div>
              )}
            </div>
            {id ? <LeagueTable id={id} teamPage={false} /> : <LeagueSearch />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leagues;
