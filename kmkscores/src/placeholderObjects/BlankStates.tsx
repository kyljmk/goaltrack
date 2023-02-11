import { DailyFixture, IFixtureDetails } from "../Types";

export const blankFixtureObject: IFixtureDetails = {
  home: {
    name: "",
    logo: "",
    score: 0,
  },
  away: {
    name: "",
    logo: "",
    score: 0,
  },
  matchStatus: "",
  minutesPlayed: 0,
  league: "",
  leagueLogo: "",
  round: "",
  dateTime: "",
  referee: "",
  venue: "",
  events: [
    {
      time: {
        elapsed: 0,
        extra: 0,
      },
      team: {
        id: 0,
        name: "",
        logo: "",
      },
      player: {
        id: 0,
        name: "",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "",
      detail: "",
      comment: null,
    },
  ],
  lineups: {
    home: {
      team: {
        id: 0,
        name: "",
        logo: "",
        colors: "",
      },
      coach: {
        id: 0,
        name: "",
        photo: "",
      },
      formation: "",
      startXI: [
        {
          player: {
            id: 0,
            name: "",
            number: 0,
            pos: "",
            grid: "",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 0,
            name: "",
            number: 0,
            pos: "",
            grid: "",
          },
        },
      ],
    },
    away: {
      team: {
        id: 0,
        name: "",
        logo: "",
        colors: "",
      },
      coach: {
        id: 0,
        name: "",
        photo: "",
      },
      formation: "",
      startXI: [
        {
          player: {
            id: 0,
            name: "",
            number: 0,
            pos: "",
            grid: "",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 0,
            name: "",
            number: 0,
            pos: "",
            grid: "",
          },
        },
      ],
    },
  },
  statistics: {
    home: {
      team: {
        id: 0,
        name: "",
        logo: "",
      },
      statistics: [
        {
          type: "",
          value: 0,
        },
      ],
    },
    away: {
      team: {
        id: 0,
        name: "",
        logo: "",
      },
      statistics: [
        {
          type: "",
          value: 0,
        },
      ],
    },
  },
};

export const blankDailyFixtures: DailyFixture[] = [
  {
    fixture: {
      id: 0,
      referee: "",
      timezone: "",
      date: "",
      timestamp: 0,
      periods: {
        first: 0,
        second: 0,
      },
      venue: {
        id: 0,
        name: "",
        city: "",
      },
      status: {
        long: "",
        short: "",
        elapsed: 0,
      },
    },
    league: {
      id: 0,
      name: "",
      country: "",
      logo: "",
      flag: "",
      season: 0,
      round: "",
    },
    teams: {
      home: {
        id: 0,
        name: "",
        logo: "",
        winner: false,
      },
      away: {
        id: 0,
        name: "",
        logo: "",
        winner: false,
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
        home: 0,
        away: 0,
      },
      extratime: {
        home: 0,
        away: 0,
      },
      penalty: {
        home: 0,
        away: 0,
      },
    },
  },
];

export const blankDailyLeagues: DailyFixture[][] = [
  [
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
  ],
  [
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
  ],
];
