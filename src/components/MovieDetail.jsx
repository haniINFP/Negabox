import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummy5 } from "../data/moviedummy.js";
import MovieReview from "../data/movieReview.js"; 
import "./MovieDetail.css"; // Import the CSS file

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function MovieDetail() {
  const { id } = useParams();
  const movie = dummy5.results.find((item) => item.id === parseInt(id));

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
    <div>
        <div className="movie-detail">
        <img src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
        <div className="movie-detail-content">
          <h1>{movie.title}</h1>
            <h6>{movie.original_title}</h6>
            <br></br>
            <br></br>
            <p>개봉일자: {movie.release_date}</p>
            <span className="rating">☆ {movie.vote_average} / 10</span><span className="vote-count">({movie.vote_count})</span>
            <p>언어: {movie.original_language}</p>
            <p>관심도: {movie.popularity}</p>        
        </div>
      </div>
      <div>
        <div className="scriptTitle">|시놉시스</div>
        <p className="movieScript">{movie.overview}</p>
      </div>
      <div>
        {loading ? (
            <p>Loading reviews...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="reviews">
              <h2>|리뷰</h2>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="review">
                    <h3 className="reviewss">{review.author}</h3>
                    <p className="reviewss">{review.content}</p>
                  </div>
                ))
              ) : (
                <p>No reviews available</p>
              )}
            </div>
          )}
      </div>  
    </div>
    
  );
};

export default MovieDetail;
// 리뷰 위치 변경
