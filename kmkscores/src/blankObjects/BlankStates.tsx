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
