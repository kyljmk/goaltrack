import React, { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  const navigate = useNavigate();

  return (
    <div className="header">
      {openMenu && (
        <ul className="header-dropdown">
          <li onClick={handleClose} className="header-dropdown-container">
            <span className="header-dropdown-title">kmkScores</span>
            <span className="header-dropdown-escape">X</span>
          </li>
          <li
            onClick={() => {
              navigate("/settings");
            }}
            className="header-dropdown-item"
          >
            Settings
          </li>
          <li className="header-dropdown-item">Favourites</li>
          <li className="header-dropdown-item">Leagues</li>
          <li className="header-dropdown-item">Contact</li>
        </ul>
      )}
      <FontAwesomeIcon
        className="header-menuIcon"
        onClick={handleOpen}
        icon={faBars}
        size="2xl"
      />
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="header-title"
      >
        kmkScores
      </h1>
      <FontAwesomeIcon
        className="header-searchIcon"
        icon={faMagnifyingGlass}
        size="xl"
      />
    </div>
  );
}

export default Header;
