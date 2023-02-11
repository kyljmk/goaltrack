import DailyLeague from "../components/DailyLeague";
import Header from "../components/Header";
import LiveScore from "../components/LiveScore";
import { useApiGetDaily } from "../hooks/UseApi";
import { DailyFixture } from "../Types";

function Home() {
  const leagues: DailyFixture[][] = useApiGetDaily("today");

  const leagueElements = leagues.map((league: DailyFixture[]) => {
    return <DailyLeague key={league[0].league.id} league={league} />;
  });

  // const scoreElements = liveResults.map((x: any) => {
  //   return (
  //     <LiveScore
  //       key={x.fixture.id}
  //       id={x.fixture.id}
  //       homeName={x.teams.home.name}
  //       awayName={x.teams.away.name}
  //       homeScore={x.goals.home}
  //       awayScore={x.goals.away}
  //       flagUrl={x.league.flag}
  //     />
  //   );
  // });
  return (
    <div className="App">
      <Header />
      {/* <div className="livescoreContainer">{scoreElements}</div> */}
    </div>
  );
}

export default Home;
