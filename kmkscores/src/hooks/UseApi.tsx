import { useEffect, useState } from "react";
import { blankFixtureObject } from "../blankObjects/BlankStates";
import { IFixtureDetails } from "../Types";

export const useApiGetGame = (fixtureId: number) => {
  const [fixtureDetails, setFixtureDetails] =
    useState<IFixtureDetails>(blankFixtureObject);
  useEffect(() => {
    const apiKey: string = process.env.REACT_APP_API_KEY as string;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`,
      options
    )
      .then((response) => response.json())
      .then((data) =>
        setFixtureDetails({
          home: {
            name: data.response[0].teams.home.name,
            logo: data.response[0].teams.home.logo,
            score: data.response[0].goals.home,
          },
          away: {
            name: data.response[0].teams.away.name,
            logo: data.response[0].teams.away.logo,
            score: data.response[0].goals.away,
          },
          matchStatus: data.response[0].fixture.status.short,
          minutesPlayed: data.response[0].fixture.status.elapsed,
          league: data.response[0].league.name,
          leagueLogo: data.response[0].league.logo,
          round: data.response[0].league.round,
          dateTime: data.response[0].fixture.data,
          referee: data.response[0].fixture.referee,
          venue: data.response[0].fixture.venue.name,
          events: data.response[0].events,
          lineups: {
            home: data.response[0].lineups[0],
            away: data.response[0].lineups[1],
          },
          statistics: {
            home: data.response[0].statistics[0],
            away: data.response[0].statistics[1],
          },
        })
      )
      .catch((err) => console.error(err));
  }, []);

  return fixtureDetails;
};
