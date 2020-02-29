// import React, { Component } from 'react';
// import './Results.css'
// import Tick from './Tick'
// import Cross from './Cross'
// import CheckUp from './CheckUp'
// import {connect} from 'react-redux'
// import {passed, failed} from '../actions'
// import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types';
// import Iframe from 'react-iframe'
// import Compile from './Compile'
// class FinalResults extends Component {
// 	state={
// // // 		title: this.props.title,
// // // 		metaDescription: this.props.metaDescription,
// // // 		h1: this.props.h1tag,
// // // 		h2: this.props.h2tag,
// // // 		h3: this.props.h3tag,
// // // 		h4: this.props.h4tag,
// // // 		sitemap: this.props.sitemap,
// // // 		robots: this.props.robots,
// // // 		imgTitle: this.props.imgTitle,
// // // 		imgAlt: this.props.imgAlt,
// // // 		ogtitle: this.props.ogtitle,
// // // 		ogtype: this.props.ogtype,
// // // 		ogurl: this.props.ogurl,
// // // 		ogsite_name: this.props.ogsite_name,
// // // 		ogimage: this.props.ogimage,
// // // 		ogdescription: this.props.ogdescription,
// // // 		response: this.props.response,
// // // 		img: 'https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f',
// // // 		seconds: 0,
// // // 		beforeload:0,
// // // 		allimagedata: null,
// // // 		loaded: false,
// // // 		siteurl: this.props.siteurl,
// // // 		checkIframe: this.props.checkIframe,
// // // 		checkJs: this.props.checkJs,
// // // 		lang: this.props.lang,
// // // 		statuscodes: this.props.statuscodes,
// // // 		responseTime: this.props.responseTime,
// // //         loaded:false,
//         loaded: false
// 	}

	
// // //     // checksize(){
// // // 	// 	if(this.file.size > 200){
// // // 	// 		alert("File is too big!");
// // // 	// 		this.value = "";
// // // 	// 	 };
// // // 	// }

	

// // // 	pass = ()=>{
// // // 		this.props.dispatch(passed())
// // // 	}
// // // 	fail = () =>{
// // // 		this.props.dispatch(failed())
// // // 	}
// // // 	titlepass = (current,max) => {

// // // 		if(current && current < max){
			
// // // 	  	return (
// // // 	   		<Tick pass={this.pass}/>	
// // // 	   	)
// // // 	  }else{
		
// // // 	 	  return(
// // // 	 	 	  <Cross fail={this.fail}/>
// // // 	 	  )
// // // 	  }	
// // // 	}
// // // 	metapassed = (max) => {

// // // 		if(this.state.metaDescription && this.state.metaDescription < max){
			
// // // 	  	return (
// // // 	   		<Tick pass={this.pass}/>	
// // // 	   	)
// // // 	  }else{
		
// // // 	 	  return(
// // // 	 	 	  <Cross fail={this.fail}/>
// // // 	 	  )
// // // 	  }	
// // // 	}

// // // 	h1Tag = () =>{
// // // 		if (this.state.h1){
// // // 			return (
				
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	h2Tag = () =>{
// // // 		if (this.state.h2){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	h3Tag = () =>{
// // // 		if (this.state.h3){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}
// // // 	h4Tag = () =>{
// // // 		if (this.state.h4){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	sitemapPresent = () =>{
// // // 		if (this.state.sitemap){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	robotspresent = () => {
// // // 		if (this.state.robots){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	imgTitle = () =>{
// // // 		if (this.state.imgTitle){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	imgAlt = () =>{
// // // 		if (this.state.imgAlt){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}
	
// // // 	ogtitle = () =>{
// // // 		if (this.state.ogtitle){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	ogsite_name = () =>{
// // // 		if (this.state.ogsite_name){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	ogtype = () =>{
// // // 		if (this.state.ogtype){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	ogurl = () =>{
// // // 		if (this.state.ogurl){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}
	
// // // 	ogimage = () =>{
// // // 		if (this.state.ogimage){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	ogdescription = () =>{
// // // 		if (this.state.ogdescription){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	checkIframe = () =>{
// // // 		if (this.state.checkIframe){
// // // 			return (
				
// // // 				<Cross fail={this.fail}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				<Tick pass={this.pass}/>
// // // 			)
// // // 		}
// // // 	}
	
	
// // // 	checkJs = () =>{
// // // 		if (this.state.checkJs){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	language = () =>{
// // // 		if (this.state.lang){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}

// // // 	statuscodescheck =()=>{
// // // 		if(this.state.statuscodes==301){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}



// // // 	// count=(flag,max)=>{
	
// // // 	// 		if(flag==='title'){
// // // 	// 			if(this.state.title<max){
// // // 	// 				// this.props.dispatch(passed());
// // // 	// 				return (
// // // 	// 					<Tick pass={this.pass}/>	
// // // 	// 				)
// // // 	// 			}
// // // 	// 			else{
// // // 	// 				// this.props.dispatch(failed())
// // // 	// 				return(
// // // 	// 					<Cross fail={this.fail}/>
// // // 	// 			 )
// // // 	// 			}
// // // 	// 		}

// // // 	// 		else if(flag==='metaDescription'){
// // // 	// 			if(this.state.metaDescription<max){
// // // 	// 				// this.props.dispatch(passed());
// // // 	// 				return (
// // // 	// 					<Tick pass={this.pass}/>	
// // // 	// 				)
// // // 	// 			}
// // // 	// 			else{
// // // 	// 				// this.props.dispatch(failed())
// // // 	// 				return(
// // // 	// 					<Cross fail={this.fail}/>
// // // 	// 			 )
// // // 	// 			}
// // // 	// 		}
// // // 	// 	// })

// // // 	// }
// // // 	// componentWillMount(){
		
// // //     //   this.setState({
// // // 	// 	  beforeload: (new Date()).getTime()
// // // 	//   })
// // // 	// }
// // // 	// pageloadingtime(){
// // // 	//   var afterload = (new Date()).getTime();
// // // 	//   this.setState({seconds:(afterload-this.state.beforeload)/1000})
		
// // // 	// }


// // // 	// allImageData(){
// // // 	// 	var imgData = this.props.imageData;
// // // 	// 	var abc = Object.keys(imgData).map(i => (
				
// // // 	// 		<p key={i}>{JSON.parse(imgData[i].size/1000)}</p>
// // // 	// 	  ))
// // // 	// 	  console.log(abc)
// // // 	// 	  this.setState({
// // // 	// 		  allimagedata: abc
// // // 	// 	  })
// // //     // }
// // //     pageloadtime = () =>{
// // // 		if(this.props.responseTime<3){
// // // 			return (
// // // 				<Tick pass={this.pass}/>	
// // // 			)
// // // 		}else{
		
// // // 			return(
// // // 				 <Cross fail={this.fail}/>
// // // 			)
// // // 		}
// // // 	}
  

//   render() {
	

// // // 		const {passed,failed, warnings,total}= this.props;
// // 		const{ loaded} = this.state;
// // // 		console.log('test',this.props.imageData);
// // // 		// const imgData=this.props.imageData;
// // // 		const imgurl= this.props.imgurl

// // // 		const arr = [];
// // // 		// {
// // // 		// 	Object.keys(imgData).map(i => (
// // //         // 	arr.push(JSON.parse(imgData[i].size/1000)+' kb ' + 'url:' + imgurl[i])
        

// //         // ))}
//         if(!this.state.loaded){
//             return<div>....loading</div>
//         }else{

        
        
	
//     return (
// 			<Compile/>
// // //     	<Results title={title} metaDescription={metaDescription} h1tag={h1} h2tag={h2} h3tag={h3} 
// // //        titlepass={this.titlepass} metapassed={this.metapassed} h1Tag={this.h1Tag()} h2Tag={this.h2Tag()} h3Tag={this.h3Tag()} responseTime={this.props.responseTime} pageloadtime={this.pageloadtime}/>
//         )
//     }
		
//   }
// }
// export default FinalResults
// // function mapStateToProps(state) {
// // 	return{
// // 		passed: state.passed,
// // 		failed: state.failed,
// // 		warnings: state.warnings,
// // 		total: state.total
// // 	}
// // }

// // export default connect(mapStateToProps)(FinalResults);
// // FinalResults.contextTypes = {
// //   router: PropTypes.object.isRequired
// // };