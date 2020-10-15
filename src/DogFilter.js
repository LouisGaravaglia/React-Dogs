import React from 'react';
import { useParams } from 'react-router-dom'
import DogDetails from "./DogDetails";
import './App.css';

function DogFilter({info}) {
    const { name } = useParams();

   if (name) {
       const currentDog = info.find(
           dog => dog.name.toLowerCase() === name.toLowerCase()
       );
         return <DogDetails dog={currentDog} />
   }
    return null;


}

export default DogFilter;