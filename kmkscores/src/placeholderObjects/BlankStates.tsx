import { DailyFixture, FixtureResponse, IFixtureDetails } from "../Types";

export const blankFixtureObject: IFixtureDetails = {
  fixture: {
    id: 0,
    referee: "",
    timezone: "",
    date: "",
    timestamp: 0,
    periods: {
      first: null,
      second: null,
    },
    venue: {
      id: 0,
      name: "",
      city: "",
    },
    status: {
      long: "",
      short: "",
      elapsed: null,
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
    home: { id: 0, name: "", logo: "", winner: null },
    away: { id: 0, name: "", logo: "", winner: null },
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
  lineups: [
    {
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
    {
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
  ],
  statistics: [
    {
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
    {
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
  ],
};

export const blankFixtureResponse: FixtureResponse[] = [
  {
    fixture: {
      id: null,
      referee: "",
      timezone: "",
      date: "",
      timestamp: null,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: null,
        name: "",
        city: "",
      },
      status: {
        long: "",
        short: "",
        elapsed: null,
      },
    },
    league: {
      id: null,
      name: "",
      country: "",
      logo: "logo-icon.png",
      flag: "",
      season: null,
      round: "",
    },
    teams: {
      home: {
        id: null,
        name: "LOADING..",
        logo: "logo-icon.png",
        winner: null,
      },
      away: {
        id: null,
        name: "LOADING.",
        logo: "logo-icon.png",
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

// export const blankDailyFixtures: DailyFixture[] = [
//   {
//     response: {
//       fixture: {
//         id: 0,
//         referee: "",
//         timezone: "",
//         date: "",
//         timestamp: 0,
//         periods: {
//           first: 0,
//           second: 0,
//         },
//         venue: {
//           id: 0,
//           name: "",
//           city: "",
//         },
//         status: {
//           long: "",
//           short: "",
//           elapsed: 0,
//         },
//       },
//       league: {
//         id: 0,
//         name: "",
//         country: "",
//         logo: "",
//         flag: "",
//         season: 0,
//         round: "",
//       },
//       teams: {
//         home: {
//           id: 0,
//           name: "",
//           logo: "",
//           winner: false,
//         },
//         away: {
//           id: 0,
//           name: "",
//           logo: "",
//           winner: false,
//         },
//       },
//       goals: {
//         home: 0,
//         away: 0,
//       },

//       score: {
//         halftime: {
//           home: 0,
//           away: 0,
//         },

//         fulltime: {
//           home: 0,
//           away: 0,
//         },
//         extratime: {
//           home: 0,
//           away: 0,
//         },
//         penalty: {
//           home: 0,
//           away: 0,
//         },
//       },
//     },
//   },
// ];
