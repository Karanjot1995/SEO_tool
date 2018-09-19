import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SemiCircleProgressBar from 'react-progressbar-semicircle'
import Graph from './Graph'
import {increment} from '../actions'
import {connect} from 'react-redux'


class CheckUp extends Component {
  state= {
    stroke: 'rgb(230, 126, 34)',
  }

   componentDidMount() {
   	const {passed} = this.props
   	const {stroke} = this.state
   	if (passed >= 75) {
   		this.setState({
   			stroke: 'rgb(10, 144, 27)'
   		})
   	}
   	else if(passed <= 50) {
   		this.setState({
   			stroke: '#B9160D'
   		})
   	}
   }

  render() {
    const {data,passed}= this.props
    return (
      <div className="checkup">
        <h1>SeoSiteCheckup Score:</h1>
        <div className="report">

          <div className="progress-bar">
            <SemiCircleProgressBar 
            strokeWidth={40} 
            stroke={this.state.stroke} 
            diameter={300} 
            percentage={passed} 
            showPercentValue />
            <p>Score {passed} / 100</p>
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
  	data: state.data
  }
}
export default connect(mapStateToProps)(CheckUp);