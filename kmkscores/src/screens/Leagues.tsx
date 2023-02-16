import { resolve } from "node:path/win32";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { League } from "../Types";

function Leagues() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <p>Leagues</p>
    </div>
  );
}

export default Leagues;
