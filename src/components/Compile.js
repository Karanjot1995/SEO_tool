import React, { Component } from 'react';
import {connect} from 'react-redux'

import CheckUp from './CheckUp'
import Results from './Results'
import PropTypes from 'prop-types';



class Compile extends Component {
  state ={
    title: '',
    loaded: false,
    metaDescription: false,
    h1tag: false,
    h2tag: false,
    h3tag: false,
    h4tag: false,
    sitemap: false,
    robots: false,
    imgTitle: false,
    imgAlt: false,
    ogtitle: false,
    ogtype: false,
    ogurl: false,
    ogsite_name: false,
    ogimage: false,
    ogdescription: false,
  }


  componentDidMount() {

    // var headers = new Headers();

    // var requestOptions = { method: 'GET',
    //          headers: headers,
    //          mode: 'cors',
    //          cache: 'default' };

    // fetch('https://www.discernliving.com/',requestOptions)
    // .then((res) =>console.log(res.text()))
  
    
    let path = this.context.router.route.location.search;
    // var url = "https://cors-anywhere.herokuapp.com/" +`${path}`;
    path=path.replace('?url=','');
		fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
    .then((response) => response.text())
		
    .then((html) => {		
      const doc = new DOMParser().parseFromString(html, "text/html");
      // console.log(doc.transferSize);
      const title = doc.getElementsByTagName('title')[0].innerHTML;
      var metaDescription = doc.getElementsByTagName('meta')['description'];
      metaDescription= metaDescription?metaDescription.getAttribute("content").length: 0 ;


      //OG metas----------------

      
      var ogtitle = doc.querySelector("meta[property='og:title']");
      ogtitle = ogtitle? ogtitle.getAttribute("content") : false;

      var ogtype = doc.querySelector("meta[property='og:type']");
      ogtype = ogtype? ogtype.getAttribute("content") : false;

      var ogsite_name = doc.querySelector("meta[property='og:site_name']");
      ogsite_name = ogsite_name? ogsite_name.getAttribute("content") : false;

      var ogurl = doc.querySelector("meta[property='og:url']");
      ogurl = ogurl? ogurl.getAttribute("content") : false;

      var ogimage = doc.querySelector("meta[property='og:image']");
      ogimage = ogimage? ogimage.getAttribute("content") : false;

      var ogdescription = doc.querySelector("meta[property='og:description']");
      ogdescription = ogdescription? ogdescription.getAttribute("content") : false;



      console.log(ogtitle)
      console.log(ogsite_name)
      console.log(ogimage)
      console.log(ogdescription)



      //--------------------------

      //h tags------

      var h1 = doc.getElementsByTagName('h1')[0];
      var h2 = doc.getElementsByTagName('h2')[0];
      var h3 = doc.getElementsByTagName('h3')[0];
      var h4 = doc.getElementsByTagName('h4')[0];

      //-------------





      var imgElems = doc.getElementsByTagName('img');
      // var svgImgs =doc.getElementsByTagName('svg');
      var imgs= doc.images.length;

      console.log(imgs)
      // console.log(svgImgs.length)
      for ( var i=0, len = imgElems.length; i < len; i++ ) {
        var imgs = imgElems[i].src || imgElems[i].href;
        fetch(`${imgElems[i].src}`)
        .then()
        if (imgs && imgs.length > 0){
          var iTime = performance.getEntriesByName(imgs)[0];
          // console.log(iTime); //or encodedBodySize, decodedBodySize
          console.log(imgElems[i].title);
          console.log(imgElems[1].src)

        }
        if(imgElems[i].title==""){
          // console.log(imgElems[i])
          this.setState({
            imgTitle: false
          })
        }else{
          this.setState({
            imgTitle: true
          })
        }
        if(imgElems[i].alt==""){
          console.log(imgElems[i])
          this.setState({
            imgAlt: false
          })
        }else{
          this.setState({
            imgAlt: true
          })
        }
      }
      console.log(title);
      // console.log(h1.innerHTML);
      // console.log(sitemap.innerText)
			this.setState({
				title: title.length,
        metaDescription: metaDescription,
        loaded: true,
        h1tag: h1,
        h2tag: h2,
        h3tag: h3,
        h3tag: h4,
        ogtitle: ogtitle,
        ogtype: ogtype,
        ogurl: ogurl,
        ogsite_name: ogsite_name,
        ogimage: ogimage,
        ogdescription: ogdescription
			})
    });

    var sitemap= ("https://cors-anywhere.herokuapp.com/" +`${path}`+"/sitemap.xml") || ("https://cors-anywhere.herokuapp.com/" +`${path}`+"/sitemap.html");
    var http = new XMLHttpRequest();
    http.open('HEAD', sitemap, false);
    http.send();
    if (http.status != 404){
      console.log(true)

      this.setState({
        sitemap: true
      })
    } else{
      this.setState({
        sitemap: false
      })    
    }  

    var robots = ("https://cors-anywhere.herokuapp.com/" +`${path}`+"/robots.txt")
    var https = new XMLHttpRequest();
    https.open('HEAD', robots, false);
    https.send();
    if (https.status != 404){
      console.log(true)

      this.setState({
        robots: true
      })
    } else{
      this.setState({
        robots: false
      })    
    }  

  }
  

    // window.onload = function(){
    //   setTimeout(function(){
    //     var s = performance.timing;
    //     console.log(t.loadEventEnd - t.responseEnd + "miliseconds");
    //   }, 0);
    // }
  
    showdata(){
      
      
    }


  render() {
    const { loaded, title, metaDescription, h1tag, h2tag,h3tag,h4tag , sitemap, robots, imgTitle, imgAlt, ogtitle, ogtype, ogurl, ogsite_name, ogimage, ogdescription} = this.state
    if (!loaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>
      
        <Results title={title} metaDescription={metaDescription} h1tag={h1tag} h2tag={h2tag} h3tag={h3tag} 
                 h4tag={h4tag} sitemap={sitemap} robots={robots} imgTitle={imgTitle} imgAlt={imgAlt}
                 ogtitle={ogtitle} ogtype={ogtype} ogurl={ogurl} ogsite_name={ogsite_name}
                 ogimage= {ogimage} ogdescription= {ogdescription}
        />

      </div>
      );}
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

export default connect(mapStateToProps)(Compile);
Compile.contextTypes = {
  router: PropTypes.object.isRequired
};