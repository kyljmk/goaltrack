import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "../styles/Contact.css";

function Contact() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div className="menu-container">
        <Menu menu={true} dropdown={false} />
        <div className="contact-container">
          <div className="contact">
            <h1 className="contact-title">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
