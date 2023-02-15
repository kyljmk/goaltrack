import React, { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  const [menu, setMenu] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="header">
      {menu && <Menu closeMenu={setMenu} dropdown={true} />}
      <FontAwesomeIcon
        className="header-menuIcon"
        onClick={() => {
          setMenu((prev) => !prev);
        }}
        icon={faBars}
        size="2xl"
      />
      <img
        src="new_logo.png"
        alt="goaltrack logo"
        onClick={() => {
          navigate("/");
        }}
        className="header-title"
      />
      <FontAwesomeIcon
        className="header-searchIcon"
        icon={faMagnifyingGlass}
        size="xl"
      />
    </div>
  );
}

export default Header;
