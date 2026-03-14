import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import styles from "./App.module.css"

export const App = () => {
  return (
    <BrowserRouter>
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>
       <Link to="/movies">Movies</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};