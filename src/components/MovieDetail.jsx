import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../data/movieNowPlaying.js";
import MovieReview from "../data/movieReview.js"; 
import "./MovieDetail.css"; // Import the CSS file

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function MovieDetail() {
  const { id } = useParams();
  const movie = dummy.results.find((item) => item.id === parseInt(id));

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewsData = await MovieReview(id);
        setReviews(reviewsData.results);
      } catch (error) {
        setError("Failed to fetch reviews");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [id]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
    <div className="movie-detail">
      <img src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
      <div className="movie-detail-content">
        <h1>{movie.title}</h1>
        <p className="rating">☆ {movie.vote_average} / 10</p>
        <p>{movie.overview}</p>
      </div>
    </div>
    
    <div className="movie-review">
    {loading ? (
          <p>Loading reviews...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="reviews">
            <h2>리뷰</h2>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="review">
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        )}
    </div>
    </>
  );
}

export default MovieDetail;
