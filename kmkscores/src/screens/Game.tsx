import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function Game() {
  const location = useLocation();
  const [fixtureDetails, setFixtureDetails] = useState<any>({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${location.state.id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFixtureDetails(response))
      .catch((err) => console.error(err));
  }, []);

  console.log(fixtureDetails);

  return (
    <div>
      <Header />
    </div>
  );
}

export default Game;
