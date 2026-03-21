import { useEffect, useState } from "react";
import styles from './styles/Reviews.module.css';
import { useParams } from "react-router-dom";

function Reviews() {
  let { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6bd523e665e7f7e0cb0d9acc510c8844`
      );
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Помилка при отриманні відгуків:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.reviewsTitle}>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className={styles.reviewsList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewsItem}>
              <h3 className={styles.reviewsName}>{review.author}</h3>
              <p className={styles.reviewsText}>{review.content}</p>
              <p className={styles.reviewsAuthor}>
                {new Date(review.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;