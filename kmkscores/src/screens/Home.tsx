import Header from "../components/Header";
import LiveScore from "../components/LiveScore";
import useInfo from "../hooks/UseInfo";
import { InfoContextType } from "../Types";

function Home() {
  const { liveResults } = useInfo() as InfoContextType;

  const scoreElements: any = liveResults.map((x: any) => {
    return (
      <LiveScore
        key={x.fixture.id}
        homeName={x.teams.home.name}
        awayName={x.teams.away.name}
        homeScore={x.goals.home}
        awayScore={x.goals.away}
        flagUrl={x.league.flag}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <div className="livescoreContainer">{scoreElements}</div>
    </div>
  );
}

export default Home;
