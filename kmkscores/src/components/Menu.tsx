import React from "react";
import { useNavigate } from "react-router-dom";
import { IMenuProps } from "../Types";
import "../styles/Menu.css";

function Menu({ closeMenu, dropdown }: IMenuProps) {
  const handleClose = () => {
    closeMenu(false);
  };
  const navigate = useNavigate();

  return (
    <ul className={dropdown ? "header-dropdown" : "menu"}>
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
      <li
        onClick={() => {
          navigate("/favourites");
        }}
        className="header-dropdown-item"
      >
        Favourites
      </li>
      <li
        onClick={() => {
          navigate("/leagues");
        }}
        className="header-dropdown-item"
      >
        Leagues
      </li>
      <li
        onClick={() => {
          navigate("/contact");
        }}
        className="header-dropdown-item"
      >
        Contact
      </li>
    </ul>
  );
}

export default Menu;
