import {
  DailyFixture,
  FixtureResponse,
  ILeagueDetails,
  ILeagueTable,
} from "../Types";

export const tempLiveFixtures: FixtureResponse[] = [
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

export const tempDailyFixtures: FixtureResponse[][] = [
  tempLiveFixtures,
  spanishFixtures,
  [
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
  {
    league: {
      id: 40,
      name: "Championship",
      type: "League",
      logo: "https://media.api-sports.io/football/leagues/78.png",
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
        end: "2023-05-27",
        current: true,
      },
    ],
  },
];
export const tempCups: ILeagueDetails[] = [
  {
    league: {
      id: 424,
      name: "Coupe de France",
      type: "Cup",
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
      name: "FA Cup",
      type: "Cup",
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
      name: "Copa del Rey",
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
      name: "DFB-Polka",
      type: "Cup",
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
  {
    league: {
      id: 40,
      name: "League Cup",
      type: "Cup",
      logo: "https://media.api-sports.io/football/leagues/78.png",
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
        end: "2023-05-27",
        current: true,
      },
    ],
  },
];

export const tempLeagueTable: ILeagueTable = {
  league: {
    id: 39,
    name: "Premier League",
    country: "England",
    logo: "https://media-3.api-sports.io/football/leagues/39.png",
    flag: "https://media-3.api-sports.io/flags/gb.svg",
    season: 2022,
    standings: [
      [
        {
          rank: 1,
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media.api-sports.io/football/teams/42.png",
          },
          points: 54,
          goalsDiff: 28,
          group: "Premier League",
          form: "WLDLW",
          status: "same",
          description: "Promotion - Champions League (Group Stage)",
          all: {
            played: 23,
            win: 17,
            draw: 3,
            lose: 3,
            goals: {
              for: 51,
              against: 23,
            },
          },
          home: {
            played: 11,
            win: 8,
            draw: 2,
            lose: 1,
            goals: { for: 27, against: 14 },
          },
          away: {
            played: 12,
            win: 9,
            draw: 1,
            lose: 2,
            goals: { for: 24, against: 9 },
          },
          update: "2023-02-19T00:00:00+00:00",
        },
        {
          rank: 2,
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-3.api-sports.io/football/teams/50.png",
          },
          points: 52,
          goalsDiff: 36,
          group: "Premier League",
          form: "DWWLW",
          status: "same",
          description: "Promotion - Champions League (Group Stage)",
          all: {
            played: 23,
            win: 17,
            draw: 3,
            lose: 3,
            goals: { for: 60, against: 24 },
          },
          home: {
            played: 11,
            win: 8,
            draw: 2,
            lose: 1,
            goals: { for: 41, against: 13 },
          },
          away: {
            played: 12,
            win: 9,
            draw: 1,
            lose: 2,
            goals: { for: 19, against: 11 },
          },
          update: "2023-02-19T00:00:00+00:00",
        },
      ],
    ],
  },
};

export const tempFavTeams = [
  {
    team: {
      id: 33,
      name: "Manchester United",
      code: "MUN",
      country: "England",
      founded: 1878,
      national: false,
      logo: "https://media-3.api-sports.io/football/teams/33.png",
    },
    venue: {
      id: 556,
      name: "Old Trafford",
      address: "Sir Matt Busby Way",
      city: "Manchester",
      capacity: 76212,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/556.png",
    },
  },
  {
    team: {
      id: 50,
      name: "Manchester City",
      code: "MAC",
      country: "England",
      founded: 1880,
      national: false,
      logo: "https://media-3.api-sports.io/football/teams/50.png",
    },
    venue: {
      id: 555,
      name: "Etihad Stadium",
      address: "Rowsley Street",
      city: "Manchester",
      capacity: 55097,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/555.png",
    },
  },
];

export const tempFavLeagues = [
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
      flag: "https://media-3.api-sports.io/flags/de.svg",
    },
  },
];
