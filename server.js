const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
var fs = require('fs');
const puppeteer = require('puppeteer');

var http = require('http');
var http = require('follow-redirects').http;
var https = require('https');


const isRelativeUrl = require("is-relative-url");



// app.use(cors())

const app = express();
const port = process.env.PORT || 5000;
const url = require('url');



var request = require('request');
// const {UrlChecker} = require('broken-link-checker');

// const urlChecker = new UrlChecker(options)
//   .on('error', (error) => {})
//   .on('queue', () => {})
//   .on('link', (result, customData) => {})
//   .on('end', () => {});

// urlChecker.enqueue("https://www.discernliving.com/", customData);

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto('https://search.google.com/test/mobile-friendly?url=www.bmw.in');

//   const textContent = await page.evaluate(() => {
//     return document.data
//   });

//   console.log(textContent); /* No Problem Mate */

//   browser.close();
// })();

// app.get('/api/mobile', (req,res)=>{
//   var url_parts = url.parse(req.url, true);
//     var query = url_parts.query;
//     puppeteer
//       .launch()
//       .then(browser => browser.newPage())
//       .then(page => {
//         return page.goto('https://search.google.com/test/mobile-friendly?url=www.bmw.in')
//         .then(setTimeout(
//           function() {
//             console.log(page.content())
//             return page.content();
            
//           }),200
//         ) 
//       })
//       .then(html => {
//         const $ = cheerio.load(html);
        

//           res.send(html)
//         })
       

// })


// const serp = require("serp");


// function abc(){
//   var options = {
//     numberOfResults : true,
//     qs : {
//       q   : "site:https://www.discernliving.com"
//     },
//     proxyList : proxyList
//   };
   
//   const numberOfResults = await serp.search(options);
//   console.log(numberOfResults)
// }

 




app.get('/api/indexing', (req,res)=>{
  var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    puppeteer
      .launch()
      .then(browser => browser.newPage())
      .then(page => {
        return page.goto('https://www.google.com/search?q=site:'+query.url).then(function() {
          console.log(page.content())
          return page.content();
          
        });
      })
      .then(html => {
        const $ = cheerio.load(html);
        

          res.send({html:html})
        })
       

      })


// app.get('/api/indexing', (req,res)=>{
//   // https://search.google.com/test/mobile-friendly?url=http%3A%2F%2Fbmw.in%2F
//   var url_parts = url.parse(req.url, true);
//   var query = url_parts.query;
//   axios.get("https://www.google.com/search?q=site:"  + query.url)
//   // console.log(response.status)
//   .then(response => {
//     // response
//   //  console.log(response)
//    res.send({response: response.data})
//   })

// })
// app.get('/api/indexing', (req,res)=>{
//   // https://search.google.com/test/mobile-friendly?url=http%3A%2F%2Fbmw.in%2F
//   var url_parts = url.parse(req.url, true);
//   var query = url_parts.query;
//    await axios.get("https://search.google.com/test/mobile-friendly?url="  + query.url)
//   // console.log(response.status)
//   .then(response => {
//     // response
//   //  console.log(response)
//    res.send({response: response.data})
//   })

// })







var urls =[];
app.get('/api/cache', (req,res)=>{
  
  var url_parts = url.parse(req.url, true);

  var a ="24"
  var query = url_parts.query;
  axios.get("https://webcache.googleusercontent.com/search?q=cache:"  + query.url)
    // console.log(response.status)
    .then(response => {
      response
      res.send({response:(response.data)})
    })

})

app.get('/api/goo',(req,res)=>{
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('abcd',query.url);


  
  axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url="  + query.url)
    // console.log(response.status)
    .then(response => {
      response
      res.send({response:(response.data)})
      // console.log(response.data.audits.metri)
    })
   
    
  })
  
function errBack (cb,THIS,logger) {

  var 
  self,
  EB=function(fn,r,e){
      if (logger===false) {
          fn.log=fn.info=fn.warn=fn.errlog=function(){};       
      } else {
          fn.log        = logger?logger.log   : console.log.bind(console);
          fn.info       = logger?logger.info  : console.info.bind(console);
          fn.warn       = logger?logger.warn  : console.warn.bind(console);
          fn.errlog     = logger?logger.error : console.error.bind(console);
      }
      fn.result=r;
      fn.error=e;
      return (self=fn);
  };


      return EB(

          function () {
              return cb.apply (THIS,Array.prototype.concat.apply([undefined],arguments));
          },
          
      );
}
app.use(bodyParser.urlencoded({ extended: true })); 




app.get('/api/hello', (req, res) => {


  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('abcd',query.url);


  var statuscodes = []

 

 
 var TLD_url = query.url;
 
 https.get(TLD_url, function(res2){
  //     var body = [];
      var callback=errBack(res2);
      
      callback.info({statusCode:res2.statusCode});
      statuscodes.push(res2.statusCode)
})

axios.get(query.url)
  .then(response => {    
      // response.data
      console.log('my status' ,statuscodes)
      res.send({test:response.data, statuscodes:statuscodes})
    
  })

  

  
});









app.listen(port, () => console.log(`Listening on port ${port}`));