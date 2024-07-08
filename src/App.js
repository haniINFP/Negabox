import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

import Navigation from "./components/Navigation";

import './index.css';
import Nowplaying from "./routes/Nowplaying.js";
import Popular from "./routes/Popular.js";
import Toprated from "./routes/Toprated.js";
import Upcoming from "./routes/Upcoming.js";
import MovieDetail from "./components/MovieDetail.jsx";

function App() {
      return (
        <>
        <div class="headTitle head">
          NEGABOX
        </div>
        
      <HashRouter>
        <Navigation />
        <hr className="App-divider" />
        <Routes>
          <Route path="/" exact ={true} Component = {Nowplaying} />
          <Route path = "/popular" Component= {Popular} />
          <Route path="/toprated" Component= {Toprated} />
          <Route path="/upcoming" Component= {Upcoming} />
          <Route path="/detail/:id" element = {<MovieDetail />} />
            </Routes>
      </HashRouter>
      
      </>
    )}
export default App;
