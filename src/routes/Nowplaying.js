import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dummy } from "../data/movieNowPlaying.js";
import Movie from "../components/Movie.jsx";
import MovieDetail from "../components/MovieDetail.jsx"; // 상세 페이지 컴포넌트


import '../index.css';



function Nowplaying() {
  return (
      <div className="app-container">
             { dummy.results.map((item) => (
                <Movie
                  key={item.id}
                  id={item.id} // id 전달
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              ))
            }
      </div>

  
  );
}

export default Nowplaying;