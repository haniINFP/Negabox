import React from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../data/movieNowPlaying.js";
import "./MovieDetail.css"; // CSS 파일을 import 합니다.

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function MovieDetail() {
  const { id } = useParams();
  const movie = dummy.results.find((item) => item.id === parseInt(id));

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
          <span>평점 </span><span className="rating">{movie.vote_average}</span><span className="vote-count">{movie.vote_count}</span>
          <p>언어: {movie.original_language}</p>
          <p>관심도: {movie.popularity}</p>
        </div>        
      </div>
      <div className="scriptTitle">|시놉시스</div>
      <p className="movieScript">{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
