import { useEffect, useState } from "react";
import MovieList from "../components/MovieList"; // Імпортуємо компонент MovieList

const API_KEY = "ef6d329598f7cc3b012e8ec0f6829446"; 
const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Помилка при завантаженні фільмів:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} /> {/* Використовуємо MovieList */}
    </div>
  );
}
