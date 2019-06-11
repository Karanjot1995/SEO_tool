import React, { Component } from 'react';
import './Results.css'
import Tick from './Tick'
import Cross from './Cross'
import CheckUp from './CheckUp'
import {connect} from 'react-redux'
import {passed, failed} from '../actions'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


class Results extends Component {
	state={
		title: '',
		metaDescription: '',
	}
	pass = () => {
  	this.props.dispatch(passed())
  }
  fail = () => {
  	this.props.dispatch(failed())
  }
	// passed = (current,max) => {

	//   if(current < max){
			
	//   	return (
	//    		<Tick pass={this.pass}/>	
	//    	)
	//   }else{
		
	//  	  return(
	//  	 	  <Cross fail={this.fail}/>
	//  	  )
	//   }	
	// }

	
	// componentDidMount() {
		
	// 	let path = this.context.router.route.location.search;
	// 	path=path.replace('?url=','');
	// 	fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
  //   .then((response) => response.text())
		
  //   .then((html) => {			
	// 		const doc = new DOMParser().parseFromString(html, "text/html");
	// 		const title = doc.getElementsByTagName('title')[0];
	// 		var metaDescription =doc.getElementsByTagName('meta')['twitter:description'].getAttribute("content");
	// 		this.setState({
	// 			title: title.innerText.length,
	// 			metaDescription: metaDescription.length
	// 		})
  //   });
	// }
	
	
	 count(flag,max){
		let path = this.context.router.route.location.search;
		path=path.replace('?url=','');
		fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
    .then((response) => response.text())
		
    .then((html) => {			
			const doc = new DOMParser().parseFromString(html, "text/html");
			const title = doc.getElementsByTagName('title')[0].innerText;
			var metaDescription =doc.getElementsByTagName('meta')['description'].getAttribute("content");
			this.setState({
				title: title.length,
				metaDescription: metaDescription.length,
			})
			if(flag==='title'){
				if(title.length<max){
					this.props.dispatch(passed());
					return (
						<Tick pass={this.pass}/>	
					)
				}
				else{
					this.props.dispatch(failed())
					return(
						<Cross fail={this.fail}/>
				 )
				}
			}

			else if(flag==='metaDescription'){
				if(metaDescription.length<max){
					this.props.dispatch(passed());
					return (
						<Tick pass={this.pass}/>	
					)
				}
				else{
					this.props.dispatch(failed())
					return(
						<Cross fail={this.fail}/>
				 )
				}
			}
    });

	}
  
 


  render() {
  	
  	// const {failed, warnings } = this.state;
		const {passed,failed, warnings}= this.props;
		const{ title,metaDescription} = this.state;
		
		
    return (
    	<div>
	    	<CheckUp passed={passed} failed={failed} warnings={warnings}/>
	      <div className="results">
	        <table>
	        	<th colSpan="2">COMMON SEO ISSUES</th>
	        	<tr>
	        	  <th onLoad={this.count('title',70)}><Link to='/metaTitle'><p >Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr>

	        	<tr>
	        		<th onLoad={this.count('metaDescription',70)}><Link to='/metaDescription'><p>Meta Descrpition</p></Link></th>
	        		<td>The meta description of your page has a length of {metaDescription} characters. Most search engines will truncate meta descriptions to 50 characters.</td>
	        	</tr>
						{/* <tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr>

	        	<tr>
	        		<th><Link to='/metaDescription'><p>{this.passed(metaDescription,50)}Meta Descrpition</p></Link></th>
	        		<td>The meta description of your page has a length of {metaDescription} characters. Most search engines will truncate meta descriptions to 160 characters.</td>
	        	</tr>
						<tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Heading: H1</p></Link></th>
	        		<td>The page has {1} H1 tag. HTML header tags are an important way of signaling to search engines the important content topics of your page, and subsequently the keywords it should rank for. </td>
	        	</tr><tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Heading: H2</p></Link></th>
	        		<td>The page has {2} H2 tags. HTML header tags are an important way of signaling to search engines the important content topics of your page, and subsequently the keywords it should rank for. </td>
	        	</tr><tr>
	        	  <th><Link to='/metaTitle'><p>{this.passed(title,70)}Heading: H3</p></Link></th>
	        		<td>The page has {4} H3 tags. HTML header tags are an important way of signaling to search engines the important content topics of your page, and subsequently the keywords it should rank for. </td>
	        	</tr> */}
					
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
Results.contextTypes = {
  router: PropTypes.object.isRequired
};