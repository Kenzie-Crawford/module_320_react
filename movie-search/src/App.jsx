import {useState, useEffect} from "react";

import "./App.css";

import MovieDisplay from "./Components/MovieDisplay.jsx";
import Form from "./Components/Form.jsx";

export default function App() {
  // Variable with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
		);
		const data = await response.json();
		setMovie(data);
	} catch(e) {
		console.error(e)
	}
};

  useEffect(() => {
    // Call getMovie function with "The Matrix" as the default search term
    getMovie("The Matrix");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}