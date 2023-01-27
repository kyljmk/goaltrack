import { useEffect } from "react";
import useInfo from "../hooks/UseInfo";
import { ILiveResults, InfoContextType } from "../Types";

function Home() {
  const {liveResults, setLiveResults} = useInfo() as InfoContextType;

console.log(liveResults)
  const scoreElemants: any = liveResults.map((x: any) => {
    return (<>
     
    </>)
  })
  return (
    <div className="App">
      <h1>kmkScore</h1>
      {scoreElemants}
    </div>
  );
}

export default Home;
