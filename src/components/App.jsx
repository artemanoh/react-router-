import { BrowserRouter, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';
import styles from "./App.module.css"
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
    <nav className={styles.navigation}>
      <NavLink className={({ isActive }) => isActive ? `${styles.menuActive}` : `${styles.menu}`} to="/">Home</NavLink>
       <NavLink className={({ isActive }) => isActive ? `${styles.menuActive}` : `${styles.menu}`} to="/movies">Movies</NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<Movie />}>
        <Route path="cast" element={<Cast />}/>
         <Route path="reviews" element={<Reviews />}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};