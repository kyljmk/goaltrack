import { resolve } from "node:path/win32";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { League } from "../Types";

function Leagues() {
  return (
    <div>
      <Header />
      <p>Leagues</p>
    </div>
  );
}

export default Leagues;
