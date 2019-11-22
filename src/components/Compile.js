import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import CheckUp from './CheckUp'
import Results from './Results'
import PropTypes from 'prop-types';
import $ from 'jquery';




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
    response: '',
    imageData: [],
    imgurl:[],
    siteurl: "",
    checkIframe: false,
    checkJs: false

  }



  componentDidMount() {

    // var imageUrl = 'https://cors-anywhere.herokuapp.com/https://d1q6kvh8ntrf2h.cloudfront.net/s3fs-public/styles/spotlight_image/public/blog_woodenfurniture_rectangle.jpg?itok=P5wE4UKa';
    // var blob = null;
    // var xhr = new XMLHttpRequest(); 
    // xhr.open('GET', imageUrl, true); 
    // xhr.responseType = 'blob';
    // xhr.onload = function() 
    // {
    //     blob = xhr.response;
    //     console.log(blob, blob.size);
    // }
    // xhr.send();

    // let fileInfo = getFileInfo('https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f');
    // console.log('file size: ' + fileInfo.size);


    //let path = this.context.router.route.location.search;
    const searchParams = new URLSearchParams(this.context.router.history.location.search);
     const url=searchParams.get('url');
     this.setState({
       siteurl:url
     })
     if(url!==""&&url!==null && url!==undefined){
       
     }
    console.log('path',url);
    this.callApi(url)
      .then((res) => 
        res.test)
        // this.setState({ response: res.test }))
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        console.log(doc)
        const title = doc.getElementsByTagName('title')[0].innerHTML;
        console.log(title)
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

      





      if(html.indexOf('analytics.js') > -1 || html.indexOf('ga.js') > -1 || html.indexOf('gtag.js') > -1 ){
        console.log('Google analytics code is present')
      }else{
        console.log('Google analytics code is not present')
      }





       
      //------iFrame------

      var checkIframe = doc.querySelector('iframe') || doc.querySelector('iFrame')
      checkIframe  = checkIframe? true: false

      if(checkIframe===true){
        this.setState({
          checkIframe: true
        })
      }
      console.log(checkIframe)


      //-----iFrame-end-------



      var checkJs = doc.querySelector('script');
      checkJs  = checkJs? true: false

      if(checkJs===true){
        this.setState({
          checkJs: true
        })
      }

      console.log(checkJs)




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
      console.log(h4)

      //-------------



    //----------------images---------------------

      var imgElems = doc.getElementsByTagName('img');
     
      var imgs =[];
      var blobdata =[];
      let imgurl=[]
      for ( var i=0, len = imgElems.length; i < len; i++ ) {
       

        if((imgElems[i].src || imgElems[i].href).indexOf('localhost')>-1){
         imgs[i] = (imgElems[i].src || imgElems[i].href);
          imgs[i]= imgs[i].split('//localhost:');
          console.log(imgs[i][0])
          imgs[i] = imgs[i][1].slice(4)
          imgs[i] = (`https://cors-anywhere.herokuapp.com/`+`${url}`+`${imgs[i]}`)
          console.log(imgs[i])
          imgurl.push(imgs[i])
        //  console.log(imgs)
        }else{
          //imgs[i] = "https://cors-anywhere.herokuapp.com/https://www.discernliving.com/assets/b282de6d07c6a475cc5d45832e78b327.png"
        }
        // if(imgs[i].indexOf('http')>-1){
        //   imgs[i] = (`https://cors-anywhere.herokuapp.com/`+`${imgs[i]}`)

        // }
        var imageUrl = [];
        imageUrl[i] = (`${imgs[i]}`);
     
      

        if (imgs && imgs.length > 0){
          var iTime = performance.getEntriesByName(imgs)[0];
   

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
          // console.log(imgElems[i])
          this.setState({
            imgAlt: false
          })
        }else{
          this.setState({
            imgAlt: true
          })
        }
      }
      let blob = null;

      var imageUrl = [];
      var blobdata = [];

      let blobsize=[];


      Promise.all(imgurl.map(u=>fetch(u))).then(responses =>
        Promise.all(responses.map(res => 
          blob = res.blob()
        ))
    ).then(iData => {
      
      this.setState({imageData:iData,loaded: true, imgurl:imgurl});
      console.log('test',this.state.imageData, imgurl );
      
    })
    //----------------images-end---------------------





        
 

           
      console.log(title);
     
			this.setState({
				title: title.length,
        metaDescription: metaDescription,
       
        h1tag: h1,
        h2tag: h2,
        h3tag: h3,
        h4tag: h4,
        ogtitle: ogtitle,
        ogtype: ogtype,
        ogurl: ogurl,
        ogsite_name: ogsite_name,
        ogimage: ogimage,
        ogdescription: ogdescription
			})
        
      })   
    

      var robots= (url+"/robots.txt");

      this.callApi(robots) 
      .then((res) => {
        if(res.status != 404){
          this.setState({
            robots: true
          })
        }else{
            this.setState({
              robots: false
            })     
          }
      })

      var sitemap= (url+"/sitemap.xml" || url+"/sitemap.html");

      this.callApi(sitemap) 
      .then((res) => {
        if(res.status != 404){
          this.setState({
            sitemap: true
          })
        }else{
            this.setState({
              sitemap: false
            })     
          }
      })

      

  }

 

  
     

    

  
  
  callApi = async (param) => {
    const response = await fetch('/api/hello?url='+param);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    // console.log(body)
  
    return body;


  };





  // componentDidMount() {



  //   let path = this.context.router.route.location.search;
  //   // var url = "https://cors-anywhere.herokuapp.com/" +`${path}`;
  //   path=path.replace('?url=','');
	// 	fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
  //   .then((response) => response.text())
		
  //   .then((html) => {		
  //     const doc = new DOMParser().parseFromString(html, "text/html");
  //     // console.log(doc.transferSize);
  //     const title = doc.getElementsByTagName('title')[0].innerHTML;
  //     var metaDescription = doc.getElementsByTagName('meta')['description'];
  //     metaDescription= metaDescription?metaDescription.getAttribute("content").length: 0 ;


  //     //OG metas----------------






  
  


  render() {

    const { loaded, title, metaDescription, h1tag, h2tag,h3tag,h4tag , sitemap, robots, imgTitle, imgAlt, ogtitle, ogtype, ogurl, ogsite_name, ogimage, ogdescription, imageData, imgurl ,siteurl, checkIframe, checkJs} = this.state
    if (!loaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>
      
        <Results title={title} metaDescription={metaDescription} h1tag={h1tag} h2tag={h2tag} h3tag={h3tag} 
                 h4tag={h4tag} sitemap={sitemap} robots={robots} imgTitle={imgTitle} imgAlt={imgAlt}
                 ogtitle={ogtitle} ogtype={ogtype} ogurl={ogurl} ogsite_name={ogsite_name}
                 ogimage= {ogimage} ogdescription= {ogdescription} imageData= {imageData} imgurl={imgurl} siteurl={siteurl} checkIframe={checkIframe}
                 checkJs={checkJs}
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