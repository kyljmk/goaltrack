import React from "react";
import { useNavigate } from "react-router-dom";
import { IMenuProps } from "../Types";
import "../styles/Menu.css";
import {
  faTable,
  faGear,
  faStar,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu({ menu, dropdown }: IMenuProps) {
  const navigate = useNavigate();

  return (
    <ul
      style={{ left: menu ? "30px" : "-180px", transition: "0.5s" }}
      className={dropdown ? "header-dropdown" : "menu"}
    >
      <li style={{ height: "90px" }}></li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/settings");
        }}
      >
        <div className="header-dropdown-item">
          <FontAwesomeIcon className="menu-icon" icon={faGear} />
          <span>Settings</span>
        </div>
      </li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/favourites");
        }}
      >
        <div className="header-dropdown-item">
          <FontAwesomeIcon className="menu-icon" icon={faStar} />
          <span>Favourites</span>
        </div>
      </li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/leagues");
        }}
      >
        <div className="header-dropdown-item">
          <FontAwesomeIcon className="menu-icon" icon={faTable} />
          <span>Leagues</span>
        </div>
      </li>
      <li
        className="header-dropdown-item-container"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <div className="header-dropdown-item">
          <FontAwesomeIcon className="menu-icon" icon={faMessage} />
          <span>Contact</span>
        </div>
      </li>
      <li className="header-dropdown-item-container">
        <img
          src="new_logo.png"
          alt="goaltrack logo"
          className="header-dropdown-image"
        />
      </li>
    </ul>
  );
}

export default Menu;
