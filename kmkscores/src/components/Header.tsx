import React, { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
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
      <Menu menu={menu} dropdown={true} setMenu={setMenu} />
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
        <div className="header-info" onClick={() => navigate("/contact")}>
          <FontAwesomeIcon size="2xl" icon={faCircleInfo} />
        </div>
      </div>
    </div>
  );
}

export default Header;
