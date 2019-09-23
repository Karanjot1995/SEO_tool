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
		sitemap: this.props.sitemap,
		robots: this.props.robots,
		imgTitle: this.props.imgTitle,
		imgAlt: this.props.imgAlt,
		ogtitle: this.props.ogtitle,
		ogtype: this.props.ogtype,
		ogurl: this.props.ogurl,
		ogsite_name: this.props.ogsite_name,
		ogimage: this.props.ogimage,
		ogdescription: this.props.ogdescription,
		response: this.props.response,
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

	sitemapPresent = () =>{
		if (this.state.sitemap){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	robotspresent = () => {
		if (this.state.robots){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	imgTitle = () =>{
		if (this.state.imgTitle){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	imgAlt = () =>{
		if (this.state.imgAlt){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}
	
	ogtitle = () =>{
		if (this.state.ogtitle){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	ogsite_name = () =>{
		if (this.state.ogsite_name){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	ogtype = () =>{
		if (this.state.ogtype){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	ogurl = () =>{
		if (this.state.ogurl){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}
	
	ogimage = () =>{
		if (this.state.ogimage){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	ogdescription = () =>{
		if (this.state.ogdescription){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}
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
		const{ title,metaDescription,h1,h2,h3,h4, sitemap, robots, imgTitle, imgAlt, ogsite_name, ogtitle, ogtype, ogurl, ogimage, ogdescription} = this.state;
		
		
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
	        		<th><Link to='/metaDescription'><p>{this.metapassed(250)}Meta Descrpition</p></Link></th>
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

			    <tr>
	        	  <th><Link to='/robots'><p >{this.robotspresent(robots,0)}Robots.txt</p></Link></th>
	        		<td>{robots ? ('robots.txt is present') : ('robots.txt is not present')}</td>
	        	</tr>

	        	<tr>
	        		<th><Link to='/metaDescription'><p>{this.sitemapPresent(sitemap,0)}Sitemap</p></Link></th>
	        		<td>{sitemap ? ('sitemap is present') : ('sitemap is not present')}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.imgTitle(imgTitle,0)}Image Title Tags</p></Link></th>
	        		<td>{imgTitle ? ('image title tags are present') : ('some image title tags are missing')}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.imgAlt(imgAlt,0)}Image Alt Tags</p></Link></th>
	        		<td>{imgAlt ? ('image Alt tags are present') : ('some image Alt tags are missing')}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.ogtitle(ogtitle,0)}og:title</p></Link></th>
	        		<td>{ogtitle ? ('og:title present') : ('og:title missing')}<br/>{ogtitle}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.ogtype(ogtype,0)}og:type</p></Link></th>
	        		<td>{ogtype ? ('og:type present') : ('og:type missing')}<br/>{ogtype}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.ogurl(ogurl,0)}og:url</p></Link></th>
	        		<td>{ogurl ? ('og:url present') : ('og:url missing')}<br/>{ogurl}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.ogsite_name(ogsite_name,0)}og:site_name</p></Link></th>
	        		<td>{ogsite_name ? ('og:site_name present') : ('og:site_name missing')}<br/>{ogsite_name}</td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.ogimage(ogimage,0)}og:image</p></Link></th>
	        		<td>{ogimage ? ('og:image present') : ('og:image missing')}<br/><a href={ogimage} target="_blank">{ogimage}</a></td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.ogdescription(ogdescription,0)}og:description</p></Link></th>
	        		<td>{ogdescription ? ('og:description present') : ('og:description missing')}<br/>{ogdescription}</td>
	        	</tr>
					
	        </table>
				
	      </div>
		  {this.state.response}
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