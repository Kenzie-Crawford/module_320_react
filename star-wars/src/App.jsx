import { getAllStarships } from './services/sw-api'
import {useState, useEffect} from 'react'
import StarshipCard from './components/StarshipCard'
import './App.css'

export default function App() {
  const [starships, setStarships] = useState([])

  useEffect(function() {
    async function fetchData() {
      const ships = await getAllStarships();
      setStarships(ships);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Starships</h1>
      {starships.map((ship,index) => (
        <StarshipCard key={index} starship={ship} />
      ))}
    </div>
      
    
  );
}


