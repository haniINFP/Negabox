import React from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>최신 작품</NavLink>
            <NavLink to="/popular" className={({ isActive }) => (isActive ? 'active-link' : '')}>인기있는 작품</NavLink>
            <NavLink to="/toprated" className={({ isActive }) => (isActive ? 'active-link' : '')}>평가가 좋은 작품</NavLink>
            <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active-link' : '')}>방영 예정 작품</NavLink>
        </div>
    );
}

export default Navigation;