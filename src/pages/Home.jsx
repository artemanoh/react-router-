import styles from "./styles/Home.module.css"

const Home = () => {
  return (
  <div className={styles.homeContainer}>
    <h2 className={styles.homeTitle}>Trending Today</h2>
    <ul className={styles.homeList}>
        <li className={styles.homeListItem}>Lion</li>
        <li className={styles.homeListItem}>lion</li>
        <li className={styles.homeListItem}>lion</li>
    </ul>
  </div>
  );
};

export default Home;
