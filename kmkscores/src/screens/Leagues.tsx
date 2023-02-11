import { resolve } from "node:path/win32";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { League } from "../Types";

function Leagues() {
  const [daysFixtures, setDaysFixtures] = useState<any>([]);
  const [leagues, setLeagues] = useState<any>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2023-02-11",
        options
      );
      const data = await response.json();
      setDaysFixtures(data.response);
      setLeagues(
        daysFixtures.reduce((x: any, y: any) => {
          (x[y.league.id] = x[y.league.id] || []).push(y);

          return x;
        }, {})
      );
    };

    // fetchApi();
  }, []);

  return (
    <div>
      <Header />
      <p>Leagues</p>
    </div>
  );
}

export default Leagues;
