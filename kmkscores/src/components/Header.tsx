import React, { useState } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useScrollLock } from "../hooks/UseScrollLock";

function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const toggle = useScrollLock();
  // menu ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  const handleClick = () => {
    setMenu((prev) => !prev);
    toggle();
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
          }}
          className="header-title"
        />
        <FontAwesomeIcon
          className="header-searchIcon"
          icon={faMagnifyingGlass}
          size="xl"
        />
      </div>
    </div>
  );
}

export default Header;
