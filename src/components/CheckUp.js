import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SemiCircleProgressBar from 'react-progressbar-semicircle'
import Graph from './Graph'
import {passed} from '../actions'
import {connect} from 'react-redux'

class CheckUp extends Component {

  componentDidMount() {
   	const {passed, total, stroke} = this.props
   	var score = passed/total
   	if (passed> 75) {
   		this.setState({
   			stroke: 'rgb(10, 144, 27)'
   		})

   	}
   	else if(passed <50) {
   		this.setState({
   			stroke: '#B9160D'
   		})
   	}
   	else if(passed < 75 && passed>50){
   		this.setState({
   			stroke: 'rgb(230, 126, 34)'
   		})
   	}
  }
  
  render() {
    const {data, passed, failed, total, stroke}= this.props
    return (
      <div className="checkup">
        <h1>SeoSiteCheckup Score:</h1>
        <div className="report">

          <div className="progress-bar">
            <SemiCircleProgressBar 
            strokeWidth={40} 
            stroke={stroke} 
            diameter={300} 
            percentage={parseInt(passed/total*100)} 
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
  	total: state.total,
  	stroke: state.stroke
  }
}
export default connect(mapStateToProps)(CheckUp);