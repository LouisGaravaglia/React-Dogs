import React from 'react';
import './App.css';

function Dogs({info}) {
  return (
      <>
    <ul>
        {info.map(dog => (
            <li> <img src={dog.src} alt={dog.name}/></li>
        ))}
    </ul>
    </>
  );
}

export default Dogs;
