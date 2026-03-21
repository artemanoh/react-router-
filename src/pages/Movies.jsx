import { useState } from 'react';
import styles from './styles/Movies.module.css';
import { Link, useParams } from 'react-router-dom';

function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!query) return;

    try {
      const movies = await searchMovies(query);
      setResults(movies);
    } catch (error) {
      console.error(error);
    }
  };

  const searchMovies = async query => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6bd523e665e7f7e0cb0d9acc510c8844&query=${query}`
      );
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Помилка при пошуку фільмів:', error);
      return [];
    }
  };
  return (
    <div className={styles.moviesContainer}>
      <form className={styles.moviesForm} onSubmit={handleSubmit}>
        <input
          className={styles.moviesInput}
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className={styles.moviesButton} type="submit">
          Search
        </button>
      </form>
      <ul className={styles.movieList}>
        {results.map(movie => (
          <Link className={styles.redirect} to={`/movies/${movie.id}`}>
            <li className={styles.movieListItem} key={movie.id}>
              {movie.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
