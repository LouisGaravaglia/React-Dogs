import React from 'react';
import defaultProps from "./defaultProps"
import './App.css';

function Whiskey({info}) {
  return (
      <>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>Facts:</p>
    <ul>
        {info.facts.map(fact => (
            <li>{fact}</li>
        ))}
    </ul>
    <p>Image: </p>
    <img src={info.src} alt={info.name}/>
    </>
  );
}

export default Whiskey;
