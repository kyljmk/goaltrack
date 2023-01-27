import LiveScore from "../components/LiveScore";
import useInfo from "../hooks/UseInfo";
import { InfoContextType } from "../Types";

function Home() {
  const { liveResults } = useInfo() as InfoContextType;

  console.log(liveResults);

  const scoreElements: any = liveResults.map((x: any) => {
    return (
      <LiveScore
        key={x.fixture.id}
        homeName={x.teams.home}
        awayName={x.teams.away}
        homeScore={x.goals.home}
        awayScore={x.goals.away}
        flagUrl={x.league.flag}
      />
    );
  });
  return (
    <div className="App">
      <h1>kmkScore</h1>
      {scoreElements}
    </div>
  );
}

export default Home;
