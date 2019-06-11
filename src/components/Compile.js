import React, { Component } from 'react';
import CheckUp from './CheckUp'
import Results from './Results'
import PropTypes from 'prop-types';


class Compile extends Component {
  state ={
    failed: 20,
    warnings:10,
    title:'',
    metaDescription: ''
  }

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
	// 		// return (title.innerText);
  //   });
	// }
  render() {
    const {passed , failed, warnings} = this.state
    return (
      <div>
      
      <Results />
      </div>
    );
  }
}

export default Compile;
Compile.contextTypes = {
  router: PropTypes.object.isRequired
};