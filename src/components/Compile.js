import React, { Component } from 'react';
import {connect} from 'react-redux'

import CheckUp from './CheckUp'
import Results from './Results'
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom'



class Compile extends Component {
  state ={
    title: '',
    metaDescription: false,
    loaded: false,
    h1tag: false,
    h2tag: false,
    h3tag: false,
    h4tag: false
  }

  componentDidMount() {
		
		let path = this.context.router.route.location.search;
		path=path.replace('?url=','');
		fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
    .then((response) => response.text())
		
    .then((html) => {			
			const doc = new DOMParser().parseFromString(html, "text/html");
      const title = doc.getElementsByTagName('title')[0].innerHTML;
      // var metaDescription = doc.getElementsByTagName('meta')['description']
      var metaDescription = doc.getElementsByTagName('meta')['description'].getAttribute("content").length;
      var h1 = doc.getElementsByTagName('h1')[0];
      var h2 = doc.getElementsByTagName('h2')[0];
      var h3 = doc.getElementsByTagName('h3')[0];
      var h4 = doc.getElementsByTagName('h4')[0];

      console.log(h3);
			this.setState({
				title: title.length,
        metaDescription: metaDescription,
        loaded: true,
        h1tag: h1,
        h2tag: h2,
        h3tag: h3,
        h3tag: h4
			})
    });
	}
  

  render() {
    const {loaded, title, metaDescription, h1tag, h2tag,h3tag,h4tag} = this.state
    if (!loaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>
      
        <Results title={title} metaDescription={metaDescription} h1tag={h1tag} h2tag={h2tag} h3tag={h3tag} h4tag={h4tag}/>

      </div>
      );}
  }
}


function mapStateToProps(state) {
	return{
		passed: state.passed,
		failed: state.failed,
		warnings: state.warnings,
	}
}

export default connect(mapStateToProps)(Compile);
Compile.contextTypes = {
  router: PropTypes.object.isRequired
};