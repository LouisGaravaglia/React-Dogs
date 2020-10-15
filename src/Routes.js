import React from 'react';
import defaultProps from "./defaultProps"
import Dogs from "./Dogs";
import Tubby from "./Tubby";
import Whiskey from "./Whiskey";
import Duke from "./Duke";
import Perry from "./Perry";
import { Route, Switch } from 'react-router-dom'
import './App.css';

function Routes() {
  return (
    <Switch>
        <Route exact path="/dogs"><Dogs info={defaultProps.dogs}/></Route>
        <Route exact path="/dogs/tubby"><Tubby info={defaultProps.dogs[3]} /></Route>
        <Route exact path="/dogs/perry"><Perry info={defaultProps.dogs[2]} /></Route>
        <Route exact path="/dogs/duke"><Duke info={defaultProps.dogs[1]} /></Route>
        <Route exact path="/dogs/whiskey"><Whiskey info={defaultProps.dogs[0]} /></Route>
    </Switch>
  );
}

export default Routes;
