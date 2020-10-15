import React from 'react';
import Routes from "./Routes";
import Nav from "./Nav"
import defaultProps from "./defaultProps";
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav dogs={defaultProps.dogs}/>
    <Routes />
    </BrowserRouter>
  );
}

export default App;
