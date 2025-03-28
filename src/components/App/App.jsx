import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
// import styles from './App.module.css';

const HomePage = lazy(() => import("../../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense
        fallback={
          <p>
            <b>Loading page...</b>
          </p>
        }
      >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
         <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
          </Route>
         <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </div>
  );
}
 
  


export default App