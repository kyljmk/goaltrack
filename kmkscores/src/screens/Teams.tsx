import React, { useState } from "react";
import Header from "../components/Header";

function Settings() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <p>Settings</p>
    </div>
  );
}

export default Settings;
