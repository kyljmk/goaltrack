import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ed335cb230mshe5db575b6e1b922p105ee4jsn4ff974b1ea03',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [])
  return (
    <div className="App">
      <h1>kmkScore</h1>
    </div>
  );
}

export default Home;
