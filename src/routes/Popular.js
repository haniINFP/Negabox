import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dummy2 } from "../data/moviePopular.js";
import Movie from "../components/Movie.jsx";
import MovieDetail from "../components/MovieDetail.jsx"; // 상세 페이지 컴포넌트
import '../index.css';


function Popular() {
   return (
      <div className="app-container">
             { dummy2.results.map((item) => (
                <Movie
                  key={item.id}
                  id={item.id} // id 전달
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}
                />
              ))
            }
      </div>

  
  );

   


}

export default Popular;