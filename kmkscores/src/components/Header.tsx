import React, { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useScrollLock } from "../hooks/UseScrollLock";
import { IHeaderProps } from "../Types";

function Header({ menu, setMenu }: IHeaderProps) {
  const navigate = useNavigate();
  // menu ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  const handleClick = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className="header-container">
      <Menu menu={menu} dropdown={true} />
      <div className="header">
        <FontAwesomeIcon
          className="header-menuIcon"
          onClick={handleClick}
          icon={faBars}
          size="2xl"
        />
        <img
          src="new_logo.png"
          alt="goaltrack logo"
          onClick={() => {
            navigate("/");
            setMenu(false);
          }}
          className="header-title"
        />
        <a href="mailto:contact@goaltrack.live">
          <FontAwesomeIcon size="2xl" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Header;
