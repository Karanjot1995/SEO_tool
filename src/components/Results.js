import React, { Component } from 'react';
import './Results.css'
import Tick from './Tick'
import Cross from './Cross'
import CheckUp from './CheckUp'
import {connect} from 'react-redux'
import {passed, failed} from '../actions'
import {Link} from 'react-router-dom'

class Results extends Component {
	state = {
		title: 25,
		metaDescription: 170,
	}
  pass = () => {
  	this.props.dispatch(passed())
  }
  fail = () => {
  	this.props.dispatch(failed())
  }
	passed = (current,max) => {

	  if(current < max){  	
	  	return (
	   		<Tick pass={this.pass}/>	
	   	)
	  }else{
	 	  return(
	 	 	  <Cross fail={this.fail}/>
	 	  )
	  }	
	}

  render() {
  	
  	const {title, metaDescription,failed, warnings } = this.state
  	const {passed}= this.props
    return (
    	<div>
	    	<CheckUp passed={passed} failed={failed} warnings={warnings}/>
	      <div className="results">
	        <table>
	        	<th colSpan="2">COMMON SEO ISSUES</th>
	        	<tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr><tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr><tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr><tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr>

	        	<tr>
	        		<th><Link to='/metaDescription'><p>{this.passed(metaDescription,160)}Meta Descrpition</p></Link></th>
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
		warnings: state.warnings,
	}
}

export default connect(mapStateToProps)(Results);