import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Results from './Results';

class Search extends Component {
state = {
  pageLink: ""
}

addURL(e) {
  this.setState({
    pageLink: e.target.value
  })
}

checkStats(){
   
}

  render() {
    return (
      <div className="Search">
      <div className="landing-page">
        <h1>Search Engine Optimization Made Easy</h1>
        <h3 className="checkup-analysis">User-friendly analysis and monitoring of your site's SEO</h3>
        <form className="checkup-form">
          <input className="checkup-input" type="text" placeholder='Website URL' onChange={(e)=> this.addURL(e)} value={ this.state.pageLink }></input>
          {/* <Results value={this.state.pageLink}/> */}
          <Link to={'/checkup?url='+this.state.pageLink}>
          <button className="checkup-button" onSubmit={(e)=> this.addURL(e)}>Checkup!</button></Link>
        </form>
      </div>
      </div>
    )
  }
}

export default Search
