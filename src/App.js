import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import './components/Search.css'
import {Switch, Route} from 'react-router-dom'
import CheckUp from './components/CheckUp'
import Results from './components/Results'
import Compile from './components/Compile'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={() =>(<Search/>)} />
        <Route exact path='/checkup' render={() =>(<Compile/>)} />
      </Switch>
      </div>
    );
  }
}

export default App;
