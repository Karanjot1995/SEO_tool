import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <div className="Search">
      <div className="landing-page">
        <h1>Search Engine Optimization Made Easy</h1>
        <h3 className="checkup-analysis">User-friendly analysis and monitoring of your site's SEO</h3>
        <form className="checkup-form">
          <input className="checkup-input" type="text" placeholder='Website URL'></input>
          <Link to='/checkup'><button className="checkup-button">Checkup!</button></Link>
        </form>
      </div>
      </div>
    )
  }
}

export default Search
