import React, { Component } from 'react';
import CheckUp from './CheckUp'
import Results from './Results'

class Compile extends Component {
  state ={
    failed: 20,
    warnings:10
  }
  render() {
    const {passed , failed, warnings} = this.state
    return (
      <div>
      
      <Results/>
      </div>
    );
  }
}

export default Compile;