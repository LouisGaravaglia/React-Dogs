import React from 'react';
import defaultProps from "./defaultProps"
import Dogs from "./Dogs";
import DogFilter from "./DogFilter"
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

function Routes() {
  return (
    <Switch>
        <Route exact path="/dogs"><Dogs info={defaultProps.dogs}/></Route>
        <Route exact path="/dogs/:name"><DogFilter info={defaultProps.dogs} /></Route>
        <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
