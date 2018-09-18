import React, {Component} from 'react';
import BarChart from 'react-bar-chart';
import './Graph.css' 
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
class Graph extends Component{

  state = {
    width: 400
  }
 
  render() {
    return (
      <div>
	      <ul className="status">
	        <li className="passed">Passed Checks</li>
	        <li className="failed">Failed Checks</li>
	        <li className="warnings">Warnings</li>
	      </ul>
	      <div ref='root'>
	        <div style={{width: '50%'}}> 
	          <BarChart ylabel='Quantity'
	            width={this.state.width}
	            height={300}
	            margin={margin}
	            data={this.props.data}
            />
	        </div>
	      </div>
      </div>
    );
  }
};
 
export default Graph