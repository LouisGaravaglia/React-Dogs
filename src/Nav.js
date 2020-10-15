import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function Nav({dogs}) {
    const baseURL = "/dogs/"
  return (
      <nav>
        <NavLink to="/dogs">All Dogs</NavLink>
        {dogs.map(dog => (
            <NavLink to={baseURL + dog.name}>{dog.name}</NavLink>
        ))}
      </nav>
  );
}

export default Nav;
