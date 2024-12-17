import { useState, useEffect } from "react";
import Header from "./components/Header";
import StarshipCard from "./components/StarshipCard";
import { getAllStarships } from "./services/sw-api";
import "./App.css";

function App() {
  const [starships, setStarships] = useState({});
  const url = "https://swapi.py4e.com/api/starships/";

  // Fetch starships data using the service
  const fetchStarships = async (url) => {
    const data = await getAllStarships(url);
    if (data) {
      setStarships(data);
    }
  };

  useEffect(() => {
    fetchStarships(url);
  }, []);

  return (
    <>
      <Header />
      <h2>
        Here's is a list of starships from Star Wars. <br />
        Included are more information about each starship!
      </h2>
      <h3>Starships List</h3>
      <div className="starship-container">
        {starships.results &&
          starships.results.map((starship, index) => (
            <StarshipCard key={index} starship={starship} />
          ))}
      </div>

      <div>
        <button
          onClick={() => fetchStarships(starships.previous)}
          disabled={!starships.previous}
        >
          Previous
        </button>
        <button
          onClick={() => fetchStarships(starships.next)}
          disabled={!starships.next}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
