import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styles from './styles/Movie.module.css';

function Movie() {
  const [movie, setMovie] = useState();
  let { movieId } = useParams();

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=6bd523e665e7f7e0cb0d9acc510c8844`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Помилка при отриманні фільмy:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchMovie().then(setMovie);
  }, [movieId]);
  if (!movie) return <div>Loading...</div>;
  return (
    <>
      <div className={styles.movieContainer}>
        <div className={styles.movieBoxes}>
          <img
            className={styles.moviePoster}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : ''
            }
            alt={movie.title}
          />
        </div>
        <div className={styles.movieBox}>
          <h2 className={styles.movieTitle}>{movie.title}</h2>
          <p className={styles.movieRating}>Rating: {movie.vote_average}</p>
          <h3 className={styles.sectionTitle}>Overview</h3>
          <p className={styles.movieOverview}>{movie.overview}</p>
          <h3 className={styles.sectionTitle}>Genres</h3>
          <p className={styles.movieGenres}>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(', ')
              : ''}
          </p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3 className={styles.additionalTitle}>Additional Information</h3>
        <Link className={styles.redirect} to={`/movies/${movie.id}/cast`}>
          <p className={styles.additionalLink}>Cast</p>
        </Link>
        <Link className={styles.redirect} to={`/movies/${movie.id}/reviews`}>
          <p className={styles.additionalLink}>Reviews</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Movie;
