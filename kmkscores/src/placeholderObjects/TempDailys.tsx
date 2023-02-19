import { DailyFixture, DailyFixtureResponse, ILeagueDetails } from "../Types";

export const tempLiveFixtures: DailyFixtureResponse[] = [
  {
    fixture: {
      id: 868168,
      referee: "Michael Oliver, England",
      timezone: "UTC",
      date: "2023-02-11T15:00:00+00:00",
      timestamp: 1676127600,
      periods: {
        first: 1676127600,
        second: null,
      },
      venue: {
        id: 525,
        name: "Selhurst Park",
        city: "London",
      },
      status: {
        long: "First Half",
        short: "1H",
        elapsed: 10,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 23",
    },
    teams: {
      home: {
        id: 52,
        name: "Crystal Palace",
        logo: "https://media.api-sports.io/football/teams/52.png",
        winner: null,
      },
      away: {
        id: 51,
        name: "Brighton",
        logo: "https://media.api-sports.io/football/teams/51.png",
        winner: null,
      },
    },
    goals: {
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },

      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },

  {
    fixture: {
      id: 868169,
      referee: "Andy Madley, England",
      timezone: "UTC",
      date: "2023-02-11T15:00:00+00:00",
      timestamp: 1676127600,
      periods: {
        first: 1676127600,
        second: null,
      },
      venue: {
        id: 535,
        name: "Craven Cottage",
        city: "London",
      },
      status: {
        long: "First Half",
        short: "1H",
        elapsed: 9,
      },
    },
    league: {
      id: 38,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 23",
    },
    teams: {
      home: {
        id: 36,
        name: "Fulham",
        logo: "https://media.api-sports.io/football/teams/36.png",
        winner: null,
      },
      away: {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media-3.api-sports.io/football/teams/65.png",
        winner: null,
      },
    },
    goals: {
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];

export const spanishFixtures = [
  {
    fixture: {
      id: 878146,
      referee: "César Soto",
      timezone: "UTC",
      date: "2023-02-11T20:00:00+00:00",
      timestamp: 1676145600,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 1497,
        name: "Estadio de Mestalla",
        city: "Valencia",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      flag: "https://media.api-sports.io/flags/es.svg",
      season: 2022,
      round: "Regular Season - 21",
    },
    teams: {
      home: {
        id: 532,
        name: "Valencia",
        logo: "https://media-3.api-sports.io/football/teams/532.png",
        winner: null,
      },
      away: {
        id: 531,
        name: "Athletic Club",
        logo: "https://media.api-sports.io/football/teams/531.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 878150,
      referee: "Javier Iglesias Villanueva, Spain",
      timezone: "UTC",
      date: "2023-02-11T17:30:00+00:00",
      timestamp: 1676136600,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 1494,
        name: "Estadio Ramón Sánchez Pizjuán",
        city: "Sevilla",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      flag: "https://media.api-sports.io/flags/es.svg",
      season: 2022,
      round: "Regular Season - 21",
    },
    teams: {
      home: {
        id: 536,
        name: "Sevilla",
        logo: "https://media-3.api-sports.io/football/teams/536.png",
        winner: null,
      },
      away: {
        id: 798,
        name: "Mallorca",
        logo: "https://media-3.api-sports.io/football/teams/798.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];

export const tempDailyFixtures: DailyFixture[] = [
  { response: tempLiveFixtures },
  {
    response: spanishFixtures,
  },
  {
    response: [
      {
        fixture: {
          id: 871335,
          referee: "Matthias Jollenbeck, Germany",
          timezone: "UTC",
          date: "2023-02-11T14:30:00+00:00",
          timestamp: 1676125800,
          periods: {
            first: 1676125800,
            second: 1676129400,
          },
          venue: {
            id: 700,
            name: "Allianz Arena",
            city: "München",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 78,
          name: "Bundesliga",
          country: "Germany",
          logo: "https://media-3.api-sports.io/football/leagues/78.png",
          flag: "https://media-3.api-sports.io/flags/de.svg",
          season: 2022,
          round: "Regular Season - 20",
        },
        teams: {
          home: {
            id: 157,
            name: "Bayern Munich",
            logo: "https://media.api-sports.io/football/teams/157.png",
            winner: true,
          },
          away: {
            id: 176,
            name: "VfL BOCHUM",
            logo: "https://media.api-sports.io/football/teams/176.png",
            winner: false,
          },
        },
        goals: {
          home: 3,
          away: 0,
        },
        score: {
          halftime: {
            home: 1,
            away: 0,
          },
          fulltime: {
            home: 3,
            away: 0,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },

      {
        fixture: {
          id: 871337,
          referee: "Sascha Stegemann, Germany",
          timezone: "UTC",
          date: "2023-02-11T14:30:00+00:00",
          timestamp: 1676125800,
          periods: {
            first: 1676125800,
            second: 1676129400,
          },
          venue: {
            id: 12717,
            name: "Europa-Park Stadion",
            city: "Freiburg im Breisgau",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 78,
          name: "Bundesliga",
          country: "Germany",
          logo: "https://media-3.api-sports.io/football/leagues/78.png",
          flag: "https://media-3.api-sports.io/flags/de.svg",
          season: 2022,
          round: "Regular Season - 20",
        },
        teams: {
          home: {
            id: 160,
            name: "SC Freiburg",
            logo: "https://media.api-sports.io/football/teams/160.png",
            winner: true,
          },
          away: {
            id: 172,
            name: "VfB Stuttgart",
            logo: "https://media.api-sports.io/football/teams/172.png",
            winner: false,
          },
        },
        goals: {
          home: 2,
          away: 1,
        },
        score: {
          halftime: {
            home: 0,
            away: 1,
          },
          fulltime: {
            home: 2,
            away: 1,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
  },
];

export const tempLeagues: ILeagueDetails[] = [
  {
    league: {
      id: 424,
      name: "Ligue 1",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/424.png",
    },
    country: {
      name: "Congo-DR",
      code: "CG",
      flag: "https://media.api-sports.io/flags/cg.svg",
    },
    seasons: [
      {
        coverage: null,
        year: 2022,
        start: "2022-10-08",
        end: "2023-01-04",
        current: true,
      },
    ],
  },
  {
    league: {
      id: 39,
      name: "Premier League",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    },
    country: {
      name: "England",
      code: "GB",
      flag: "https://media.api-sports.io/flags/gb.svg",
    },
    seasons: [
      {
        coverage: null,
        year: 2022,
        start: "2022-08-05",
        end: "2023-05-28",
        current: true,
      },
    ],
  },
  {
    league: {
      id: 140,
      name: "La Liga",
      type: "League",
      logo: "https://media-3.api-sports.io/football/leagues/140.png",
    },
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-3.api-sports.io/flags/es.svg",
    },
    seasons: [
      {
        coverage: null,
        year: 2022,
        start: "2022-08-12",
        end: "2023-06-04",
        current: true,
      },
    ],
  },
  {
    league: {
      id: 78,
      name: "Bundesliga",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/78.png",
    },
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media.api-sports.io/flags/de.svg",
    },
    seasons: [
      {
        coverage: null,
        year: 2022,
        start: "2022-08-05",
        end: "2023-05-27",
        current: true,
      },
    ],
  },
];
