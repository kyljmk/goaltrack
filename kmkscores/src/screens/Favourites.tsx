import React, { useState } from "react";
import Header from "../components/Header";

function Favourites() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <p>Favourites</p>
    </div>
  );
}

export default Favourites;
