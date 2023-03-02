import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "../styles/Contact.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Contact() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <div className="menu-container">
        <Menu menu={true} dropdown={false} />
        <div className="contact-container" style={{ opacity: menu ? 0.1 : 1 }}>
          <div className="contact">
            <h1 className="contact-title">Contact</h1>
            <span className="contact-para">
              This is a new web page so there are some features that are yet to
              come, and there may be some bugs. If you notice any bugs please
              feel free to get in touch and let us know.
              <br />
              <br /> For any developers who would like contribute, see the link
              to the GitHub Repo below and again, please get in touch and let us
              know.
            </span>
            <ul className="contact-list">
              <a href="mailto:contact@goaltrack.live">
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon size="xl" icon={faEnvelope} />
                  <span> contact@goaltrack.live</span>
                </li>
              </a>
              <a href="https://github.com/kyljmk/goaltrack">
                <li>
                  <FontAwesomeIcon icon={faGithub as IconProp} size="xl" />
                  <span> github.com/kyljmk/goaltrack</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
