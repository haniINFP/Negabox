import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dummy } from "./data/movieNowPlaying.js";
import Movie from "./components/Movie.jsx";
import MovieDetail from "./components/MovieDetail.jsx"; // 상세 페이지 컴포넌트
// 테스트 집갈래 ㅎ히히호호 집가고싶다ㅏㅏㅏㅏ

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              dummy.results.map((item) => (
                <Movie
                  key={item.id}
                  id={item.id} // id 전달
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              ))
            }
          />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
