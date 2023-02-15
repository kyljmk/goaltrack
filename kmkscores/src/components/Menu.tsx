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
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/settings");
        }}
      >
        <div className="header-dropdown-item">Settings</div>
      </li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/favourites");
        }}
      >
        <div className="header-dropdown-item">Favourites</div>
      </li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/leagues");
        }}
      >
        <div className="header-dropdown-item">Leagues</div>
      </li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <div className="header-dropdown-item">Contact</div>
      </li>
    </ul>
  );
}

export default Menu;
