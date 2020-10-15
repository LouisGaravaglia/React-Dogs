import React from 'react';
import { Redirect } from 'react-router-dom'
import './App.css';

function DogDetails({dog}) {
     if (!dog) return <Redirect to="/dogs"/>
  return (
      <>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Facts:</p>
    <ul>
        {dog.facts.map(fact => (
            <li>{fact}</li>
        ))}
    </ul>
    <p>Image: </p>
    <img src={dog.src} alt={dog.name}/>
    </>
  );
}

export default DogDetails;