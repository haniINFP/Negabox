import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/" >최신 작품</Link>
            <Link to="/popular">인기있는 작품</Link>
            <Link to="/toprated">평가가 좋은 작품</Link>
            <Link to="/upcoming">방영 예정 작품</Link>
        </div>
    );
}

export default Navigation;