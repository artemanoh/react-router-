import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation()
  const [movies, setMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=6bd523e665e7f7e0cb0d9acc510c8844`
      );
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Помилка при отриманні трендових фільмів:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.homeTitle}>Trending Today</h2>
      <ul className={styles.homeList}>
        {movies.map(movie => (
          <Link className={styles.redirect} to={`/movies/${movie.id}`} state={{from: location}}>
            <li key={movie.id} className={styles.homeListItem}>
              {movie.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
