import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa'

class Cross extends Component {
  componentWillMount(){
    this.props.fail();
  }
  render() {
    return (
      <div>
       <FaTimes className="cross"/>
      </div>
    )
  }
}

export default Cross