import React, { Component } from 'react';
import './Results.css'
import Tick from './Tick'
import Cross from './Cross'
import CheckUp from './CheckUp'
import {connect} from 'react-redux'
import {increment, failed} from '../actions'

class Results extends Component {
	state = {
		title: 25,
		metaDescription: 170,
	}
  increment = () => {
  	this.props.dispatch(increment())
  }
  failed = () => {
  	this.props.dispatch(failed())
  }
	passed = (current,max) => {

	  if(current < max){  	
	  	return (
	   		<Tick inc={this.increment}/>	
	   	)
	  }else{
	 	  return(
	 	 	  <Cross fail={this.failed}/>
	 	  )
	  }	
	}

  render() {
  	
  	const {stroke, title, metaDescription,failed, warnings } = this.state
  	const {passed}= this.props
    return (
    	<div>
	    	<CheckUp passed={passed} failed={failed} warnings={warnings}/>
	      <div className="results">
	        <table>
	        	<th colSpan="2">COMMON SEO ISSUES</th>
	        	<tr>
	        	  <th><p>{this.passed(title,70)}Meta Title</p></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr>
	        	<tr>
	        		<th><p>{this.passed(metaDescription,160)}Meta Descrpition</p></th>
	        		<td>The meta description of your page has a length of {metaDescription} characters. Most search engines will truncate meta descriptions to 160 characters.</td>
	        	</tr>
	        </table>
	      </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
	return{
		passed: state.passed,
		failed: state.failed,
		warnings: state.warnings
	}
}

export default connect(mapStateToProps)(Results);