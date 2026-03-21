import { useEffect, useState } from 'react';
import styles from './styles/Cast.module.css';
import { useParams } from 'react-router-dom';

function Cast() {
  let { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const fetchCast = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6bd523e665e7f7e0cb0d9acc510c8844`
      );
      const data = await response.json();
      return data.cast || [];
    } catch (error) {
      console.error('Помилка при отриманні акторів:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchCast().then(setCast);
  }, [movieId]);

  return (
    <>
     <div className={styles.castContainer}>
  <h2 className={styles.castTitle}>Cast</h2>
  <ul className={styles.castList}>
    {cast.map(actor => (
      <li key={actor.id} className={styles.castItem}>
        <img className={styles.castImg} src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
        <h3 className={styles.castName}>{actor.name}</h3>
        <p className={styles.castText}>{actor.character}</p>
      </li>
    ))}
  </ul>
</div>
    </>
  );
}

export default Cast;
