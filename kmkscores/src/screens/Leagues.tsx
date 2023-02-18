import { useState } from "react";
import Header from "../components/Header";

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
