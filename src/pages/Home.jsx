import { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";

const Home = () => {
  // Initialize state for starships and error message
  const [starships, setStarships] = useState([]); // Default to an empty array
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    // Fetch starships data when the component is mounted
    const fetchStarships = async () => {
      await getAllStarships(setStarships, setError); // Call the function to fetch starships
    };

    fetchStarships(); // Call the async function inside useEffect
  }, []);

  return (
    <div className="starshipcardcontainer">
      {error && <p>{error}</p>}

      {starships.length === 0 ? (
        <p>Loading...</p>
      ) : (
        // Map through starships array and display cards
        starships.map((starship) => (
          <StarShipCard key={starship.name} starshipName={starship.name} />
        ))
      )}
    </div>
  );
};

export default Home;
