import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import './components/Search.css'
import {Switch, Route} from 'react-router-dom'
import CheckUp from './components/CheckUp'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={() =>(<Search/>)} />
        <Route exact path='/checkup' render={() =>(<CheckUp/>)} />
      </Switch>
      </div>
    );
  }
}

export default App;
