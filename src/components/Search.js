import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Compile from './Compile'
import Results from './Results';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class Search extends Component {
state = {
  pageLink: "",
}

addURL(e) {
  this.setState({
    pageLink: e.target.value
  })
  // return <Compile/>
}


  render() {
    return (
      <div className="Search">
      <div className="landing-page">
        <h1>Search Engine Optimization Made Easy</h1>
        <h3 className="checkup-analysis">User-friendly analysis and monitoring of your site's SEO</h3>
        <form className="checkup-form">
          <input className="checkup-input" type="text" placeholder='Website URL' onChange={(e)=> this.addURL(e)} value={ this.state.pageLink }></input>
          <Link to={'/checkup?url='+this.state.pageLink}>
          <button className="checkup-button" onSubmit={(e)=> this.addURL(e)}>Checkup!</button></Link>
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
	}
}

export default connect(mapStateToProps)(Search);

