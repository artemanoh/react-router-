import styles from "./styles/Movies.module.css"

const Movies = () => {
  return (
    <div className={styles.moviesContainer}>
      <form className={styles.moviesForm}>
        <input className={styles.moviesInput} type="text" placeholder="Search movies..." />
        <button className={styles.moviesButton} type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;