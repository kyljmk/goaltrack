import { faL, faV } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  blankFixtureObject,
  blankFixtureResponse,
} from "../placeholderObjects/BlankStates";
import {
  tempCups,
  tempDailyFixtures,
  tempFavLeagues,
  tempFavTeams,
  tempLeagues,
  tempLeagueTable,
  tempLiveFixtures,
} from "../placeholderObjects/TempDailys";
import {
  DailyFixture,
  FixtureResponse,
  ICountry,
  IFixtureDetails,
  ILeagueDetails,
  ILeagueInfo,
  ILeagueTable,
  InfoContextType,
  ITeamInfo,
} from "../Types";
import useInfo from "./UseInfo";

export const useApiGetGame = (fixtureId: number) => {
  const [loadingGame, setLoadingGame] = useState<boolean>();
  const [fixtureDetails, setFixtureDetails] =
    useState<IFixtureDetails>(blankFixtureObject);
  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  const fetchApi = async () => {
    setLoadingGame(true);
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${fixtureId}`,
      options
    );
    const data = await response.json();

    setFixtureDetails(data.response[0]);
    setLoadingGame(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return { fixtureDetails, loadingGame };
};

export const useApiGetFavouriteTeamsFixtures = (todaysDate: string) => {
  const [teamsDaysFixtures, setTeamsDaysFixtures] =
    useState<FixtureResponse[]>(blankFixtureResponse);
  const [loadingTeams, setLoadingTeams] = useState<boolean>(false);
  const { favouriteTeams } = useInfo() as InfoContextType;

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoadingTeams(true);
    const promises = fetchApi();
    Promise.all(promises).then((values) => {
      const filteredValues = values.filter((element) => {
        return element !== undefined;
      });
      setTeamsDaysFixtures(filteredValues);
    });
    setLoadingTeams(false);
  }, []);

  const fetchApi = () => {
    const data = favouriteTeams
      .sort(function (a, b) {
        return a - b;
      })
      .map(async (i) => {
        const response = await fetch(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${todaysDate}&team=${i}&season=2022`,
          options
        );
        const data = await response.json();
        if (data.response.length !== 0) {
          return data.response[0];
        }
      });
    return data;
  };

  return { teamsDaysFixtures, loadingTeams };
};

export const useApiGetFavouriteLeaguesFixtures = (todaysDate: string) => {
  const [leaguesDaysFixtures, setLeaguesDaysFixtures] = useState<
    FixtureResponse[][]
  >([blankFixtureResponse]);
  const [loadingLeagues, setLoadingLeagues] = useState<boolean>(false);
  const { favouriteLeagues } = useInfo() as InfoContextType;

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoadingLeagues(true);
    const promises = fetchApi();
    Promise.all(promises).then((values) => {
      setLeaguesDaysFixtures(values);
    });
    setLoadingLeagues(false);
  }, []);

  const fetchApi = () => {
    const data = favouriteLeagues
      .sort(function (a, b) {
        return a - b;
      })
      .map(async (i) => {
        const response = await fetch(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${todaysDate}&league=${i}&season=2022`,
          options
        );
        const data = await response.json();
        return data.response;
      });
    return data;
  };

  return { leaguesDaysFixtures, loadingLeagues };
};

export const useApiGetLiveGames = () => {
  const [liveResults, setLiveResults] =
    useState<FixtureResponse[]>(blankFixtureResponse);
  const [loadingLive, setLoadingLive] = useState<boolean>(false);

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async () => {
    setLoadingLive(true);
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      options
    );
    const data = await response.json();
    setLiveResults(data.response);
    setLoadingLive(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return { liveResults, loadingLive };
};

export const useApiGetLeagues = () => {
  const [leaguesLoading, setLeaguesLoading] = useState<boolean>(false);
  const [leagues, setLeagues] = useState<ILeagueDetails[]>(tempLeagues);
  const [cups, setCups] = useState<ILeagueDetails[]>(tempCups);

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async (option: string) => {
    setLeaguesLoading(true);
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/leagues?season=2022&type=${option}`,
      options
    );
    const data = await response.json();
    option === "league" ? setLeagues(data.response) : setCups(data.response);
    setLeaguesLoading(false);
  };

  useEffect(() => {
    fetchApi("league");
    fetchApi("cup");
  }, []);

  return { leagues, cups };
};

export const useApiGetLeagueTable = (id: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [leagueTable, setLeagueTable] = useState<ILeagueTable[]>([
    tempLeagueTable,
  ]);

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${id}`,
      options
    );
    const data = await response.json();
    setLeagueTable(data.response);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { leagueTable, loading };
};

export const useApiGetFavouriteTeams = () => {
  const { favouriteTeams } = useInfo() as InfoContextType;
  const [favouriteTeamsInfo, setFavouriteTeamsInfo] = useState<ITeamInfo[]>([]);
  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const promises = fetchApi();
    Promise.all(promises).then((values) => {
      setFavouriteTeamsInfo(values);
    });
  }, []);
  const fetchApi = () => {
    const data = favouriteTeams.map(async (i) => {
      const response = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/teams?id=${i}`,
        options
      );
      const data = await response.json();
      return data.response[0];
    });
    return data;
  };

  return favouriteTeamsInfo;
};

export const useApiGetFavouriteLeagues = () => {
  const { favouriteLeagues } = useInfo() as InfoContextType;
  const [favouriteLeaguesInfo, setFavouriteLeaguesInfo] = useState<
    ILeagueInfo[]
  >([]);
  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const promises = fetchApi();
    Promise.all(promises).then((values) => {
      setFavouriteLeaguesInfo(values);
    });
  }, []);
  const fetchApi = () => {
    const data = favouriteLeagues.map(async (i) => {
      const response = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${i}&&season=2022`,
        options
      );
      const data = await response.json();
      return data.response[0];
    });
    return data;
  };

  return favouriteLeaguesInfo;
};

export const useApiGetCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async () => {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/countries",
      options
    );
    const data = await response.json();
    setCountries(data.response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return countries;
};

export const useApiGetTeamInfo = (id: number) => {
  const [teamInfo, setTeamInfo] = useState<ITeamInfo[]>([]);
  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async () => {
    const resposne = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`,
      options
    );
    const data = await resposne.json();
    setTeamInfo(data.response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return;
};
