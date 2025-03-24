import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import clsx from "clsx";
import css from "./MovieList.module.css"; // Переконайтеся, що шлях правильний

const getLinkStyle = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function MovieList({ movies = [] }) { // Додаємо значення за замовчуванням
    const location = useLocation();

    if (!movies.length) {
        return <p>No movies found.</p>; // Випадок, якщо немає фільмів
    }

    return (
        <ul className={css.list}>
            {movies.map((movie) => (
                <li key={movie.id} className={css.item}>
                    <NavLink className={getLinkStyle} to={`/movies/${movie.id}`} state={{ from: location }}>
                        <p className={css.text}>{movie.title || movie.name || movie.original_title}</p>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
