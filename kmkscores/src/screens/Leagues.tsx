import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import LeagueSearch from "../components/LeagueSearch";
import LeagueTable from "../components/LeagueTable";
import Menu from "../components/Menu";
import "../styles/Leagues.css";

function Leagues() {
  const [menu, setMenu] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div
        className="menu-container"
        style={{ pointerEvents: menu ? "none" : "auto" }}
      >
        <Menu menu={true} dropdown={false} />
        <div className="leagues-container" style={{ opacity: menu ? 0.1 : 1 }}>
          <div className="leagues">
            <h1 className="leagues-title">Leagues</h1>
            {id ? <LeagueTable /> : <LeagueSearch />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leagues;
