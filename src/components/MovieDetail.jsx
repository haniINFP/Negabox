import React from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../data/movieDummy.js";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function MovieDetail() {
  const { id } = useParams();
  const movie = dummy.results.find((item) => item.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={IMG_BASE_URL + movie.poster_path} alt={movie.title} />
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
