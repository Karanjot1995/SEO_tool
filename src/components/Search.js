import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Compile from './Compile'
import Results from './Results';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import axios from 'axios'
import API from "./Api";
import {keywords,url} from '../actions'
import {Redirect} from 'react-router-dom';








class Search extends Component {
state = {
  pageLink: "",
  persons: [],

  // keyword1: ""
}


addURL(e) {
  this.props.dispatch(url(e.target.value))

  e.preventDefault()
  this.setState({
    pageLink: e.target.value,
  })
  

}

// sendurl(e){
//   this.router.history.push(`/checkup?url=${this.state.pageLink}`)

  
// }




keyword(e){
  this.props.dispatch(keywords(e.target.value))

}


  render() {
   

    return (
      <div className="Search">
      <div className="landing-page">
        <h1>Search Engine Optimization Made Easy</h1>
        <h3 className="checkup-analysis" >User-friendly analysis and monitoring of your site's SEO</h3>
        <form className="checkup-form" >
          <div className="url">
          <input className="checkup-input" type="text" placeholder='Website URL' onChange={(e)=> this.addURL(e)} value={ this.props.url } required/>
          <Link to={'/checkup?url='+this.state.pageLink}>
           
          <button className="checkup-button" onSubmit={(e)=> this.addURL(e)}>Checkup! </button></Link>
          </div>
          <div className="keyword">
          <h3>Keyword search</h3>
          <input  onChange={(e)=> this.keyword(e)} required/>
          </div>
         
          
        </form>
      </div>
      
      
      </div>
    )

  }
}

function mapStateToProps(state) {
	return{
		passed: state.passed,
		failed: state.failed,
    warnings: state.warnings,
    keyword: state.keyword,
    url: state.url
	}
}

export default connect(mapStateToProps)(Search);
Search.contextTypes = {
  router: PropTypes.object.isRequired
};

