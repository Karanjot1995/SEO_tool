import React, { Component } from 'react';
import './Results.css'
import Tick from './Tick'
import Cross from './Cross'

class Results extends Component {
	state = {
		title: 25,
		metaDescription: 100,
		passed: this.props.passed,
		failed: 0
	}
	passed = (current,max) => {
		var {passed , failed} = this.state;
	  if(current < max){
	   	return (
	   		this.setState(prevState => {
	   			passed: prevState.passed + 1
	   		}),
	   		<Tick/>
	   	)
	  }else{
	 	  return(
	 	 	  <Cross/>
	 	  )
	  }	
	}
  render() {
  	const { title, metaDescription } = this.state
    return (
      <div className="results">
        <table>
        	<th colspan="2">COMMON SEO ISSUES</th>
        	<tr>
        	  <th><p>{this.passed(title,70)}Meta Title</p></th>
        		<td>{this.state.passed}The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
        	</tr>
        	<tr>
        		<th><p>{this.passed(metaDescription,160)}Meta Descrpition</p></th>
        		<td>The meta description of your page has a length of {metaDescription} characters. Most search engines will truncate meta descriptions to 160 characters.</td>
        	</tr>
        </table>
      </div>
    );
  }
}

export default Results;