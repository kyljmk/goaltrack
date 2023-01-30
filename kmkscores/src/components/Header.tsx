import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon className="header-menuIcon" icon={faBars} size="2xl" />
      <h1 className="header-title">kmkScores</h1>
      <FontAwesomeIcon
        className="header-searchIcon"
        icon={faMagnifyingGlass}
        size="xl"
      />
    </div>
  );
}

export default Header;
