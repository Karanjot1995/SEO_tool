import React, { Component } from 'react';
import './Results.css'
import Tick from './Tick'
import Cross from './Cross'
import CheckUp from './CheckUp'
import {connect} from 'react-redux'
import {passed, failed} from '../actions'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Iframe from 'react-iframe'
// import {WebView} from 'react';

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
		img: 'https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f',
		seconds: 0,
		beforeload:0,
		allimagedata: null,
		loaded: false,
		siteurl: this.props.siteurl,
		checkIframe: this.props.checkIframe,
		checkJs: this.props.checkJs,
		lang: this.props.lang,
		statuscodes: this.props.statuscodes,
		responseTime: (this.props.responseTime),
		responseTimenum:this.props.responseTimenum,
		responseTimeMobile: (this.props.responseTimeMobile),
		pageWeight: this.props.pageWeight,
		pageWeightnum: this.props.pageWeightnum,

		keywordpresent: this.props.keywordpresent,
		loaded:false,
		canonical: this.props.canonical,
		noindextag: this.props.noindextag,
		cached: this.props.cached,
		indexing: this.props.indexing,
		goodurl: this.props.goodurl
	}

	
    // checksize(){
	// 	if(this.file.size > 200){
	// 		alert("File is too big!");
	// 		this.value = "";
	// 	 };
	// }

	

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

		if(this.state.metaDescription.length && this.state.metaDescription.length < max && this.state.metaDescription!=0){
			
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

	checkIframe = () =>{
		if (this.state.checkIframe){
			return (
				
				<Cross fail={this.fail}/>	
			)
		}else{
		
			return(
				<Tick pass={this.pass}/>
			)
		}
	}
	
	
	checkJs = () =>{
		if (this.state.checkJs){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	language = () =>{
		if (this.state.lang){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	statuscodescheck =()=>{
		if(this.state.statuscodes!==404){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	pageloadtime = () =>{
		if(this.state.responseTimenum<4){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	pageweight = () =>{
		if(this.state.pageWeightnum<1000){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	keywordpresent = () =>{
		
		if(this.state.keywordpresent !== false ){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	canonicalpresent= () =>{
		if(this.state.canonical){
			return (
				<Tick pass={this.pass}/>	
			)
		}else{
		
			return(
				 <Cross fail={this.fail}/>
			)
		}
	}

	pageindexed = () =>{
		if(this.state.noindextag){
			return (
				<Cross fail={this.fail}/>
				
			)
		}else{
		
			return(
				<Tick pass={this.pass}/>	
			)
		}
	}

	googleindexing = () => {
		var indexing = this.state.indexing
			// var matches = indexing.match(/\d+/g);
		if(indexing!=null){
			indexing = indexing.replace(/,/g, "")
			console.log(typeof(indexing),indexing)

			var matches = indexing.match(/(\d+)/); 
		var number= matches[0];
		// if (matches) {
		// number = Number(matches[0].replace(',', ''));
		console.log(number);
		if(number>1000){
			return <Tick pass={this.pass}/>
		}else{
		
			return(
				<Cross fail={this.fail}/>
			)
		}
		}else{
			return(
				<Cross fail={this.fail}/>
			)
		}
		// } else console.log("didnt find anything.");
	}


	goodurlstructure  = () =>{
		console.log(this.state.goodurl)
	 
		if(this.state.goodurl){
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
	// componentWillMount(){
		
    //   this.setState({
	// 	  beforeload: (new Date()).getTime()
	//   })
	// }
	// pageloadingtime(){
	//   var afterload = (new Date()).getTime();
	//   this.setState({responseTime: this.state.responseTime})
		
	// }


	// allImageData(){
	// 	var imgData = this.props.imageData;
	// 	var abc = Object.keys(imgData).map(i => (
				
	// 		<p key={i}>{JSON.parse(imgData[i].size/1000)}</p>
	// 	  ))
	// 	  console.log(abc)
	// 	  this.setState({
	// 		  allimagedata: abc
	// 	  })
	// }
  

  render() {
	

		const {passed,failed, warnings,total}= this.props;
		const{ title,metaDescription,h1,h2,h3,h4, sitemap, robots, imgTitle, imgAlt, ogsite_name, ogtitle, ogtype, ogurl, ogimage, ogdescription ,
			loaded, siteurl, checkIframe, checkJs ,lang, statuscodes,noindextag,canonical, cached, indexing,goodurl} = this.state;
		console.log('test',this.props.imageData);
		const imgData=this.props.imageData;
		const imgurl= this.props.imgurl

		const arr = [];
		{
			Object.keys(imgData).map(i => (
			arr.push(JSON.parse(imgData[i].size/1000)+' kb ' + 'url:' + imgurl[i])
		))}
		// if (!loaded) {
		// 	return <div>Loading...</div>;
		//   } else {

		
		
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
	        		<td>The meta description of your page has a length of {metaDescription.length} characters. Most search engines will truncate meta descriptions to 250 characters.</td>
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
				{/* <tr>
	        		<th><Link to='/metaDescription'><p>Image Size</p></Link></th>
	        		<td>{arr.join(', ')}</td>
	        	</tr> */}
                {/* {console.log((imgData[i].size/1000))} */}
				
				<tr>
	        		<th><Link to='/metaDescription'><p>{this.checkIframe()}Iframe</p></Link></th>
	        		<td>{checkIframe ? ('Iframe detected (This reduces SEO performance)') : ('No Iframe')}<br/></td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.checkJs()}JavaScript Usage</p></Link></th>
	        		<td>{checkJs ? ('JavaScript is being used') : ('JavaScript is not being used')}<br/></td>
	        	</tr>

				<tr>
	        		<th><Link to='/metaDescription'><p>{this.language()}Language Tag</p></Link></th>
	        		<td>{lang ? ('Language Tag is present') : ('Language Tag is not present')}<br/></td>
	        	</tr>
				<tr>
	               <th><Link to='/metaDescription'><p>{this.statuscodescheck()}Page status code</p></Link></th>
	        		<td>{statuscodes !== 404? ( 'status code is ' + statuscodes): 'this is an error page'}<br/></td>
	        	</tr>
				<tr>
	                <th><Link to='/metaDescription'><p>{this.pageloadtime()}Page Load Time</p></Link></th>
	        		<td>Desktop: {this.props.responseTime}<br/><br/>Mobile: {this.props.responseTimeMobile}</td>
	        	</tr>


				<tr>
                  	<th><Link to='/metaDescription'><p>{this.pageweight()}Page Weight</p></Link></th>
	        		<td>{this.props.pageWeight}. Page weight should be under 1000 Kb<br/></td>
	        	</tr>


				{this.props.keyword!=="" && this.props.keyword!==" "? <tr>
	                <th><Link to='/metaDescription'><p>{this.keywordpresent()}keyword</p></Link></th>
	        		<td>{this.state.keywordpresent}<br/></td>
	        	</tr> : ""}

				<tr>
	                <th><Link to='/metaDescription'><p>{this.canonicalpresent()}Canonical</p></Link></th>
	        		<td>{canonical? canonical.href: 'canonical is missing'}<br/></td>
	        	</tr>
				<tr>
	                <th><Link to='/metaDescription'><p>{this.pageindexed()}index</p></Link></th>
	        		<td>{noindextag ? "This page is not indexed": "This page is indexed"}<br/></td>
	        	</tr>
				<tr>
	                <th><Link to='/metaDescription'><p>Caching</p></Link></th>
	        		<td>{cached}<br/></td>
	        	</tr>

				<tr>
			        <th><Link to='/metaDescription'><p>{this.googleindexing()}Indexing</p></Link></th>
	        		<td>{indexing}<br/></td>
	        	</tr>

				<tr>
			        <th><Link to='/metaDescription'><p>{this.goodurlstructure()}URL Structure</p></Link></th>
	        		<td>{goodurl? "URL Structure is SEO friendly": "URL structure is not SEO friendly"}<br/></td>
	        	</tr>



{/* <Iframe src="https://search.google.com/test/mobile-friendly?url=www.bmw.in" height-="200px" width="300px"></Iframe> */}

				{/* <tr>
	<th><Link to='/metaDescription'><p>keyword</p></Link></th>
	        		<td>{this.state.keyword1}<br/></td>
	        	</tr> */}
				{/* <iframe src="site:https://www.discernliving.com" height="200px" width="500px"></iframe> */}


					
	        </table>

	
				
	      </div>
		  
			</div>
		);
			// }
		
  }
}
function mapStateToProps(state) {
	return{
		passed: state.passed,
		failed: state.failed,
		warnings: state.warnings,
		total: state.total,
		keyword: state.keyword
	}
}

export default connect(mapStateToProps)(Results);
Results.contextTypes = {
  router: PropTypes.object.isRequired
};