import DailyLeague from "../components/DailyLeague";
import Header from "../components/Header";
import LiveScore from "../components/LiveScore";
import { useApiGetDaily } from "../hooks/UseApi";
import useInfo from "../hooks/UseInfo";
import { DailyFixture, InfoContextType } from "../Types";

function Home() {
  const { favourites } = useInfo() as InfoContextType;
  const today: Date = new Date();
  const dateString: string = today.toISOString().split("T")[0];
  const leagues: DailyFixture[][] = useApiGetDaily(dateString, favourites);
  const leagueElements = leagues.map((league: DailyFixture[]) => {
    return <DailyLeague key={league[0].league.id} fixtures={league} />;
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
      <div className="livescoreContainer">{leagueElements}</div>
    </div>
  );
}

export default Home;
