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
      // var imgs= doc.images.length;

      // console.log(imgs)
      // console.log(svgImgs.length)
      var imgs =[];
      var blobdata =[];
      for ( var i=0, len = imgElems.length; i < len; i++ ) {
        imgs[i] = (imgElems[i].src || imgElems[i].href);

        if(imgs[i].indexOf('localhost')>-1){
          imgs[i]= imgs[i].split('//localhost:');
          console.log(imgs[i][0])
          imgs[i] = imgs[i][1].slice(4)
          imgs[i] = (`https://cors-anywhere.herokuapp.com/`+`${url}`+`${imgs[i]}`)
          console.log(imgs[i])
        //  console.log(imgs)
        }else{
          imgs[i] = "https://cors-anywhere.herokuapp.com/https://www.discernliving.com/assets/b282de6d07c6a475cc5d45832e78b327.png"
        }
        // if(imgs[i].indexOf('http')>-1){
        //   imgs[i] = (`https://cors-anywhere.herokuapp.com/`+`${imgs[i]}`)

        // }
        var imageUrl = [];
        imageUrl[i] = (`${imgs[i]}`);
        // console.log(imageUrl)
        // let blob = null;
       
         
        // var imageUrl = (`${imgs[i]}`);
        // console.log(imageUrl)
        // let blob = null;
        // var xhr = new XMLHttpRequest(); 
        // xhr.open('GET', imageUrl[i], true); 
        // xhr.responseType = 'blob';
        // xhr.onload = function() 
        // {
        //     blob = xhr.response;
        //     if(blob!==null){
        //     console.log(blob, blob.size);
        //     // blobdata.push(blob.size)
        //     }
          
        // }
        // xhr.send();
        // console.log(blobdata)
      

    

      

        if (imgs && imgs.length > 0){
          var iTime = performance.getEntriesByName(imgs)[0];
          // console.log(iTime); //or encodedBodySize, decodedBodySize
          // console.log(imgElems[i].title);
          // console.log(imgElems[1].src)

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
      let blob = [];

      var imageUrl = [];
      var blobdata = [];

      let blobsize=[];

// let promiseArray = [];
// let z = 0;
// for (z; z <= imgs.length;z) {
  
//   fetch(imgs[z]).then(function(response){
//     promiseArray.push(response.blob());
//      z=z+1;
//   })
//   //Promise.resolve(promiseArray);
//  }
  
 
// let j=0
      for ( var i=0; i< imgs.length; i++ ) {
        
        $.when(
          // Get the HTML
          $.get(imgs[i], function(response) {
            // blob = response.blob();
            blob[i] = new Blob([response])
            console.log(blob[i].size)
            // blobsize.push(blob.size)
  
          }),
        
        ).then(function() {
           blobsize.push(blob[i].size)
  
        })
          // this.callImage(imgs[i],blob,blobsize)
        //  blobsize.push(blobsize)
        
      }
        
   
      
      


      console.log(blobsize)

      console.log(imgs, imgs[1], imgs[2], imgs[3]);
           
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

  // async componentWillMount() {
  //   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
  //   const json = await response.json();
  //   this.setState({ data: json });
  // }

  
     callImage( imgs, blob,blobsize) {
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", imgs, true);
      // xhr.responseType = 'blob';

      // xhr.onload = function () {
      //   blob= xhr.response
      //   console.log(blob.size)
      // };
     
      // xhr.send();




      // $.when(
      //   // Get the HTML
      //   $.get(imgs,{dataType: 'blob'}, function(response) {
      //     // blob = response.blob();
      //     blob = new Blob([response])
      //     console.log(blob.size)
      //     blobsize.push(blob.size)

      //   }),
      
      // ).then(function() {
      //    return blobsize

      // })
    }

    //  makeRequest( imgs,blob, blobsize) {
      // var xhr = new XMLHttpRequest(); 
      // xhr.open('GET', imgs, true); 
      // xhr.responseType = 'blob';
      // xhr.onload = function() 
      // {
      //     blob = xhr.response;
      //     blobsize.push(blob.size)
      //     console.log(blob, blob.size);
      // }
      // xhr.send();
      // var xhr = new XMLHttpRequest();
      // (function loop(i, length) {
      //     if (i>= length) {
      //         return;
      //     }
      
      // var requests=new Array(imgs.length);
      // for (let i = 0; i < imgs.length; i++) {
      //     requests[i] = new XMLHttpRequest();
      //     requests[i].open("GET", imgs[i]);
      //     requests[i].responseType = 'blob'
      //     requests[i].onload = function() {
      //         var blob = requests[i].response;
      //         blobsize.push(blob.size)
      //         console.log(blob.size);
      //     }
      //     requests[i].send();
      // }
    // }

    // callImage(imgs,blobsize){
    //   var requests=[]
    //     requests[i] = new XMLHttpRequest();
    //     requests[i].open("GET", imgs[i]);
    //     requests[i].responseType = 'blob'
    //     requests[i].onload = function() {
    //         var blob = requests[i].response;
    //         blobsize.push(blob.size)
    //         console.log(blob.size);
    //     }
    //     requests[i].send();
    
    // }
    
    
    
  
   
  // processDataAsycn = async (imgs) => {  
  //   return new Promise(function (resolve, reject) {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open("GET", imgs,true);
  //     xhr.onload = function () {
  //         if (this.status >= 200 && this.status < 300) {
  //             resolve(xhr.response);
  //         } else {
  //             reject({
  //                 status: this.status,
  //                 statusText: xhr.statusText
  //             });
  //         }
  //     };
  //     xhr.onerror = function () {
  //         reject({
  //             status: this.status,
  //             statusText: xhr.statusText
  //         });
  //     };
  //     xhr.send();
  // });
  // };  


  // async callImage (imgs,blob,blobsize){
  // fetch(`${imgs}`)
  // .then((response) => {
  //   // blob = response.blob.size
  //   console.log(response.blob());
  //   // console.log(response.blob)
  // }).catch((err) => {
  //     console.log(err);
  // });




  // this.setState({test:false});
    // var response = await fetch(`${imgs}`)
    // //    {
    // //     method: 'GET',
    // //   headers: {
    // //     'Content-Type': 'image/png'
    // //   },
    // // });
    // const body =  await response.blob();
    // blobsize.push(body.size)
    // // if (response.status !== 200) throw Error(body.message);
    // console.log(body.size)
    
    // setTimeout(function () {
    //   this.setState({test:true});
    // }.bind(this), 2000)

    // this.setState({test:true});
    // // return body;
  //   fetch(imgs)
  //    .then((response) =>{
  //       console.log (response)
  //  })
  // };

  
  
  callApi = async (param) => {
    const response = await fetch('/api/hello?url='+param);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    // console.log(body)
  
    return body;


  };


  



//   callImage = async (url) => {
//   fetch(url, {
//   // mode: 'no-cors',
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//   },
// },
// ).then(response => {
//   if (response.ok) {
//     response.json().then(json => {
//       console.log(json);
//       return json;
//     });
//   }
// });
//   }



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

      
  //     var ogtitle = doc.querySelector("meta[property='og:title']");
  //     ogtitle = ogtitle? ogtitle.getAttribute("content") : false;

  //     var ogtype = doc.querySelector("meta[property='og:type']");
  //     ogtype = ogtype? ogtype.getAttribute("content") : false;

  //     var ogsite_name = doc.querySelector("meta[property='og:site_name']");
  //     ogsite_name = ogsite_name? ogsite_name.getAttribute("content") : false;

  //     var ogurl = doc.querySelector("meta[property='og:url']");
  //     ogurl = ogurl? ogurl.getAttribute("content") : false;

  //     var ogimage = doc.querySelector("meta[property='og:image']");
  //     ogimage = ogimage? ogimage.getAttribute("content") : false;

  //     var ogdescription = doc.querySelector("meta[property='og:description']");
  //     ogdescription = ogdescription? ogdescription.getAttribute("content") : false;



  //     console.log(ogtitle)
  //     console.log(ogsite_name)
  //     console.log(ogimage)
  //     console.log(ogdescription)



  //     //--------------------------

  //     //h tags------

  //     var h1 = doc.getElementsByTagName('h1')[0];
  //     var h2 = doc.getElementsByTagName('h2')[0];
  //     var h3 = doc.getElementsByTagName('h3')[0];
  //     var h4 = doc.getElementsByTagName('h4')[0];

  //     //-------------





  //     var imgElems = doc.getElementsByTagName('img');
  //     // var svgImgs =doc.getElementsByTagName('svg');
  //     var imgs= doc.images.length;

  //     console.log(imgs)
  //     // console.log(svgImgs.length)
  //     for ( var i=0, len = imgElems.length; i < len; i++ ) {
  //       var imgs = imgElems[i].src || imgElems[i].href;
  //       fetch(`${imgElems[i].src}`)
  //       .then()
  //       if (imgs && imgs.length > 0){
  //         var iTime = performance.getEntriesByName(imgs)[0];
  //         // console.log(iTime); //or encodedBodySize, decodedBodySize
  //         console.log(imgElems[i].title);
  //         console.log(imgElems[1].src)

  //       }
  //       if(imgElems[i].title==""){
  //         // console.log(imgElems[i])
  //         this.setState({
  //           imgTitle: false
  //         })
  //       }else{
  //         this.setState({
  //           imgTitle: true
  //         })
  //       }
  //       if(imgElems[i].alt==""){
  //         console.log(imgElems[i])
  //         this.setState({
  //           imgAlt: false
  //         })
  //       }else{
  //         this.setState({
  //           imgAlt: true
  //         })
  //       }
  //     }
  //     console.log(title);
  //     // console.log(h1.innerHTML);
  //     // console.log(sitemap.innerText)
	// 		this.setState({
	// 			title: title.length,
  //       metaDescription: metaDescription,
  //       loaded: true,
  //       h1tag: h1,
  //       h2tag: h2,
  //       h3tag: h3,
  //       h3tag: h4,
  //       ogtitle: ogtitle,
  //       ogtype: ogtype,
  //       ogurl: ogurl,
  //       ogsite_name: ogsite_name,
  //       ogimage: ogimage,
  //       ogdescription: ogdescription
	// 		})
  //   });

    // var sitemap= ("https://cors-anywhere.herokuapp.com/" +`${path}`+"/sitemap.xml") || ("https://cors-anywhere.herokuapp.com/" +`${path}`+"/sitemap.html");
    // var http = new XMLHttpRequest();
    // http.open('HEAD', sitemap, false);
    // http.send();
    // if (http.status != 404){
    //   console.log(true)

    //   this.setState({
    //     sitemap: true
    //   })
    // } else{
    //   this.setState({
    //     sitemap: false
    //   })    
    // }  

    // var robots = ("https://cors-anywhere.herokuapp.com/" +`${path}`+"/robots.txt")
    // var https = new XMLHttpRequest();
    // https.open('HEAD', robots, false);
    // https.send();
    // if (https.status != 404){
    //   console.log(true)

    //   this.setState({
    //     robots: true
    //   })
    // } else{
    //   this.setState({
    //     robots: false
    //   })    
    // }  

  // }
  

    // window.onload = function(){
    //   setTimeout(function(){
    //     var s = performance.timing;
    //     console.log(t.loadEventEnd - t.responseEnd + "miliseconds");
    //   }, 0);
    // }
  
  


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