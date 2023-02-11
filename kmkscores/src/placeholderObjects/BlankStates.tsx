import { IFixtureDetails } from "../Types";

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

export const blankDailyFixtures = {
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
};
