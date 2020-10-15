import React from 'react';
import defaultProps from "./defaultProps"
import './App.css';

function Tubby({info}) {
  return (
      <>
      <p>{info.name}</p>
      <p>{info.age}</p>
    <ul>
        {info.facts.map(fact => (
            <li>{fact}</li>
        ))}
    </ul>
    </>
  );
}

export default Tubby;
