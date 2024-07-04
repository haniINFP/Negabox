import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dummy3 } from "../data/movieTopRated.js";
import Movie from "../components/Movie.jsx";
import MovieDetail from "../components/MovieDetail.jsx"; // 상세 페이지 컴포넌트


import '../index.css';


function Toprated() {
  return (

      <div className="app-container">
        
          {    dummy3.results.map((item) => (
                <Movie
                  key={item.id}
                  id={item.id} // id 전달
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              ))}
        
      </div>
  )
}

export default Toprated;