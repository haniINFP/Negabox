import React from "react";
import { Link } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ id, title, poster_path, vote_average }) {
  return (
      <Link to={`/detail/${id}`}>
        <div className="movie-container">
          <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
          <div className="movie-info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
          </div>
        </div>
      </Link>
  );
}
