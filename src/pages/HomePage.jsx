import { useEffect, useState } from "react";

const API_KEY = "ef6d329598f7cc3b012e8ec0f6829446"; // Замініть на свій ключ
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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
