import React, { Component } from 'react';
import {FaCheck} from 'react-icons/fa'

class Tick extends Component {
 componentWillMount(){
    this.props.inc();
  }
  render() {
    return (
      <div>
       <FaCheck className="check"/>
      </div>
    )
  }
}

export default Tick