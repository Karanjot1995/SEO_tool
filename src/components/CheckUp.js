import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import SemiCircleProgressBar from 'react-progressbar-semicircle'
import Graph from './Graph'
import Results from './Results'


class CheckUp extends Component {
  state= {
  	data: [{value: 100},
           {text: 'Passed Checks', value: 75}, 
           {text: 'Failed Checks', value: 15},
           {text: 'Warnings', value: 10},
        ],
    stroke: 'rgb(230, 126, 34)',
    passed : 0
  }
   componentDidMount() {
   	const {stroke, data} = this.state
   	if (data[1].value >= 75) {
   		this.setState({
   			stroke: 'rgb(10, 144, 27)'
   		})
   	}
   	else if(data[1].value <= 50) {
   		this.setState({
   			stroke: '#B9160D'
   		})
   	}
   }

  render() {
    return (
      <div className="checkup">
        <h1>SeoSiteCheckup Score:</h1>
        <div className="report">

          <div className="progress-bar">
            <SemiCircleProgressBar 
            strokeWidth={40} 
            stroke={this.state.stroke} 
            diameter={300} 
            percentage={this.state.data[1].value} 
            showPercentValue />
          </div>

          <div className="Graph">
           	<Graph data={this.state.data}/>
          </div>
        </div>
        <div>
          <Results passed={this.state.passed}/>
        </div>

      </div>
    );
  }
}

export default CheckUp