const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
var fs = require('fs');

var http = require('http');
var http = require('follow-redirects').http;
var https = require('https');


const isRelativeUrl = require("is-relative-url");



// app.use(cors())

const app = express();
const port = process.env.PORT || 5000;
const url = require('url');



var request = require('request');







var urls =[];
app.get('/api/goo',(req,res)=>{
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('abcd',query.url);
  
  axios.get("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url="  + query.url)
    // console.log(response.status)
    .then(response => {
      response
      res.send({response:(response.data)})
      console.log(response.data.audits.metri)
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