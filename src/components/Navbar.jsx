import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/profile">Profile</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/CRUD-JSON-server">CRUD-JSON-server</NavLink>
        </nav>
    )
}

export default Navbar;