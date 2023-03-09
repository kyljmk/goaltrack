import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "../styles/Teams.css";
import TeamInfo from "../components/TeamInfo";
import TeamSearch from "../components/TeamSearch";

function Teams() {
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
        <div className="teams-container" style={{ opacity: menu ? 0.1 : 1 }}>
          <div className="teams">
            <h1 className="teams-title">Teams</h1>
            {id ? <TeamInfo /> : <TeamSearch />}
            {/* <span>
              This feature is currently under construction and coming soon.
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
