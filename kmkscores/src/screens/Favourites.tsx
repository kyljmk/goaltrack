import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "../styles/Favourites.css";

function Favourites() {
  const [menu, setMenu] = useState<boolean>(false);
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
          <div className="favourites"></div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
