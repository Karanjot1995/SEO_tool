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
		title: this.props.title,
		metaDescription: this.props.metaDescription,
		h1: this.props.h1tag,
		h2: this.props.h2tag,
		h3: this.props.h3tag,
		h4: this.props.h4tag,
	}


	
	pass = ()=>{
		this.props.dispatch(passed())
	}
	fail = () =>{
		this.props.dispatch(failed())
	}
	titlepass = (current,max) => {

		if(current && current < max){
			
	  	return (
	   		<Tick pass={this.pass}/>	
	   	)
	  }else{
		
	 	  return(
	 	 	  <Cross fail={this.fail}/>
	 	  )
	  }	
	}
	metapassed = (max) => {

		if(this.state.metaDescription && this.state.metaDescription < max){
			
	  	return (
	   		<Tick pass={this.pass}/>	
	   	)
	  }else{
		
	 	  return(
	 	 	  <Cross fail={this.fail}/>
	 	  )
	  }	
	}

	h1Tag = () =>{
		if (this.state.h1){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}
	h2Tag = () =>{
		if (this.state.h2){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	h3Tag = () =>{
		if (this.state.h3){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}
	h4Tag = () =>{
		if (this.state.h4){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	
	// componentDidMount() {
		
	// 	let path = this.context.router.route.location.search;
	// 	path=path.replace('?url=','');
	// 	fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
  //   .then((response) => response.text())
		
  //   .then((html) => {			
	// 		const doc = new DOMParser().parseFromString(html, "text/html");
	// 		const title = doc.getElementsByTagName('title')[0].innerText;
	// 		var metaDescription =doc.getElementsByTagName('meta')['twitter:description'].getAttribute("content");
	// 		this.setState({
	// 			title: title.length,
	// 			metaDescription: metaDescription.length,
	// 		})
  //   });
	// }
	
	
	// count=(flag,max)=>{
	
	// 		if(flag==='title'){
	// 			if(this.state.title<max){
	// 				// this.props.dispatch(passed());
	// 				return (
	// 					<Tick pass={this.pass}/>	
	// 				)
	// 			}
	// 			else{
	// 				// this.props.dispatch(failed())
	// 				return(
	// 					<Cross fail={this.fail}/>
	// 			 )
	// 			}
	// 		}

	// 		else if(flag==='metaDescription'){
	// 			if(this.state.metaDescription<max){
	// 				// this.props.dispatch(passed());
	// 				return (
	// 					<Tick pass={this.pass}/>	
	// 				)
	// 			}
	// 			else{
	// 				// this.props.dispatch(failed())
	// 				return(
	// 					<Cross fail={this.fail}/>
	// 			 )
	// 			}
	// 		}
	// 	// })

	// }
  
 


  render() {
  	
		const {passed,failed, warnings,total}= this.props;
		const{ title,metaDescription,h1,h2,h3,h4} = this.state;
		
		
    return (
			
    	<div>
	    	<CheckUp passed={passed} failed={failed} warnings={warnings} total={total} percentage={parseInt((passed)/(total)*100)} stroke={this.state.stroke}/>
	      <div className="results">
	        <table>

	        	<th colSpan="2">COMMON SEO ISSUES</th>
	        	<tr>
	        	  <th><Link to='/metaTitle'><p >{this.titlepass(title,70)}Meta Title</p></Link></th>
	        		<td>The meta title of your page has a length of {title} characters. Most search engines will truncate meta titles to 70 characters</td>
	        	</tr>

	        	<tr>
	        		<th><Link to='/metaDescription'><p>{this.metapassed(160)}Meta Descrpition</p></Link></th>
	        		<td>The meta description of your page has a length of {metaDescription} characters. Most search engines will truncate meta descriptions to 160 characters.</td>
	        	</tr>
						<tr>
	        	  <th><Link to='/h1tag'><p >{this.h1Tag(h1,0)}H1 Heading Tag</p></Link></th>
	        		<td>{h1 ? ('H1 is present') : ('H1 is not present')}</td>
	        	</tr>

	        	<tr>
	        		<th><Link to='/h2tag'><p>{this.h2Tag(h2,0)}H2 Heading Tag</p></Link></th>
	        		<td>{h2 ? ('H2 is present') : ('H2 is not present')}</td>
	        	</tr>
						<tr>
	        	  <th><Link to='/h3tag'><p >{this.h3Tag(h3,0)}H3 Heading Tag</p></Link></th>
	        		<td>{h3 ? ('H3 is present') : ('H3 is not present')}</td>
	        	</tr>
						<tr>
	        	  <th><Link to='/h3tag'><p >{this.h4Tag(h4,0)}H4 Heading Tag</p></Link></th>
	        		<td>{h4 ? ('H4 is present') : ('H4 is not present')}</td>
	        	</tr>
						{/* <tr>
	        	  <th><Link to='/h3tag'><p >{this.h3Tag(h3,0)}H3 Heading Tag</p></Link></th>
	        		<td>{h3 ? ('H3 is present') : ('H3 is not present')}</td>
	        	</tr>

	        	<tr>
	        		<th><Link to='/metaDescription'><p>{this.passed(metaDescription,70)}Meta Descrpition</p></Link></th>
	        		<td>The meta description of your page has a length of {metaDescription} characters. Most search engines will truncate meta descriptions to 50 characters.</td>
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
		total: state.total
	}
}

export default connect(mapStateToProps)(Results);
Results.contextTypes = {
  router: PropTypes.object.isRequired
};