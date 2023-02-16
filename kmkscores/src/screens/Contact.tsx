import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <p>Contact</p>
    </div>
  );
}

export default Contact;
