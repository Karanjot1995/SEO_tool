import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SemiCircleProgressBar from 'react-progressbar-semicircle'
import Graph from './Graph'
import {passed} from '../actions'
import {connect} from 'react-redux'

class CheckUp extends Component {
 
  render() {

    const {data, passed, total}= this.props;
    const percentage = parseInt((passed)/(total)*100);

    let stroke= "";
    if (percentage> 75) {
     
        stroke='rgb(10, 144, 27)';
         
    }
    else if(percentage <=50) {
      
        stroke= '#B9160D';
     
    }
    else if(percentage <= 75 && percentage>50){
      stroke= 'rgb(230, 126, 34)';
      
    }
     
    
    return (
      <div className="checkup">
        <h1>Website SEO Score</h1>
        <div className="report">

          <div className="progress-bar">
            <SemiCircleProgressBar 
            strokeWidth={40} 
            stroke={stroke} 
            diameter={300} 
            percentage={percentage} 
            showPercentValue />
            <p>Score {passed} / {total}</p>
          </div>

          <div className="Graph">
           	<Graph data={data}/>
          </div>
        </div>
        <div>
          
        </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return{
  	data: state.data,
  	// total: state.total,
    // passed:state.passed,
    // // stroke: state.stroke,
   
  }
}
export default connect(mapStateToProps)(CheckUp);