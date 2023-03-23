import { useEffect, useState } from "react";
import {
  blankFixtureObject,
  blankFixtureResponse,
} from "../placeholderObjects/BlankStates";
import {
  tempCups,
  tempLeagues,
  tempLeagueTable,
} from "../placeholderObjects/TempDailys";
import {
  FixtureResponse,
  ICountry,
  IFixtureDetails,
  ILeagueDetails,
  ILeagueInfo,
  ILeagueTable,
  InfoContextType,
  ITeamInfo,
} from "../Types";
import { useCurrentSeason } from "./UseCurrentYear";
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

export const useApiGetFavouriteTeamsFixtures = (
  fromDate: string,
  toDate: string
) => {
  const [teamsDaysFixtures, setTeamsDaysFixtures] = useState<
    FixtureResponse[][]
  >([blankFixtureResponse]);
  const { favouriteTeams } = useInfo() as InfoContextType;
  const season = useCurrentSeason();

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
      const filteredValues = values.filter((element) => {
        return element !== undefined;
      });
      setTeamsDaysFixtures(filteredValues);
    });
  }, []);

  const fetchApi = () => {
    const data = favouriteTeams
      .sort(function (a, b) {
        return a - b;
      })
      .map(async (i) => {
        const response = await fetch(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?from=${fromDate}&to=${toDate}&team=${i}&season=${season}`,
          options
        );
        const data = await response.json();
        return data.response;
      });
    return data;
  };

  return teamsDaysFixtures;
};

export const useApiGetFavouriteLeaguesFixtures = (
  fromDate: string,
  toDate: string
) => {
  const [leaguesDaysFixtures, setLeaguesDaysFixtures] = useState<
    FixtureResponse[][]
  >([blankFixtureResponse]);
  const { favouriteLeagues } = useInfo() as InfoContextType;
  const season = useCurrentSeason();

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
      setLeaguesDaysFixtures(values);
    });
  }, []);

  const fetchApi = () => {
    const data = favouriteLeagues
      .sort(function (a, b) {
        return a - b;
      })
      .map(async (i) => {
        const response = await fetch(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?from=${fromDate}&to=${toDate}&league=${i}&season=${season}`,
          options
        );
        const data = await response.json();
        return data.response;
      });
    return data;
  };

  return leaguesDaysFixtures;
};

export const useApiGetLiveGames = () => {
  const [liveResults, setLiveResults] =
    useState<FixtureResponse[]>(blankFixtureResponse);

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
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      options
    );

    const data = await response.json();
    setLiveResults(data.response);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return liveResults;
};

export const useApiGetAllGames = () => {
  const [allResults, setAllResults] =
    useState<FixtureResponse[]>(blankFixtureResponse);
  const today: Date = new Date();
  const minusTwo = new Date(today);
  minusTwo.setDate(minusTwo.getDate() - 2);
  const dayMinusTwo = minusTwo.toISOString().split("T")[0];

  const minusOne = new Date(today);
  minusOne.setDate(minusOne.getDate() - 1);
  const dayMinusOne = minusOne.toISOString().split("T")[0];

  const currentDay = today.toISOString().split("T")[0];

  const plusOne = new Date(today);
  plusOne.setDate(plusOne.getDate() + 1);
  const dayPlusOne = plusOne.toISOString().split("T")[0];

  const plusTwo = new Date(today);
  plusTwo.setDate(plusTwo.getDate() + 2);
  const dayPlusTwo = plusTwo.toISOString().split("T")[0];

  const plusThree = new Date(today);
  plusThree.setDate(plusThree.getDate() + 3);
  const dayPlusThree = plusThree.toISOString().split("T")[0];

  const plusFour = new Date(today);
  plusFour.setDate(plusFour.getDate() + 4);
  const dayPlusFour = plusFour.toISOString().split("T")[0];

  const allDays: string[] = [
    dayMinusTwo,
    dayMinusOne,
    currentDay,
    dayPlusOne,
    dayPlusTwo,
    dayPlusThree,
    dayPlusFour,
  ];

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = () => {
    const data = allDays.map(async (i) => {
      const response = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${i}`,
        options
      );
      const data = await response.json();
      return data.response;
    });
    return data;
  };

  useEffect(() => {
    const promises = fetchApi();
    Promise.all(promises).then((values) => {
      setAllResults(values);
    });
  }, []);

  return allResults;
};

export const useApiGetLeagues = () => {
  const [leagues, setLeagues] = useState<ILeagueDetails[]>(tempLeagues);
  const [cups, setCups] = useState<ILeagueDetails[]>(tempCups);
  const season = useCurrentSeason();

  const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchApi = async (option: string) => {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/leagues?season=${season}&type=${option}`,
      options
    );
    const data = await response.json();
    option === "league" ? setLeagues(data.response) : setCups(data.response);
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
  const season = useCurrentSeason();

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
      `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${id}`,
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
  const season = useCurrentSeason();

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
        `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${i}&&season=${season}`,
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
  const [teamInfo, setTeamInfo] = useState<ITeamInfo>();
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
    setTeamInfo(data.response[0]);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return teamInfo;
};

export const useApiGetTeamFixturesResults = (id: number) => {
  const [teamFixturesResults, setTeamFixturesResults] = useState<
    FixtureResponse[]
  >([]);
  const season = useCurrentSeason();

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
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=${season}&team=${id}`,
      options
    );
    const data = await resposne.json();
    setTeamFixturesResults(data.response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return teamFixturesResults;
};

export const useApiGetLeagueId = (id: number) => {
  const [leagueId, setLeagueId] = useState<number>(0);

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
      `https://api-football-v1.p.rapidapi.com/v3/leagues?team=${id}&type=league&current=true`,
      options
    );
    const data = await response.json();
    setLeagueId(data.response[0].league.id);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return leagueId;
};
