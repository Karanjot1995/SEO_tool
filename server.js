const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


// app.use(cors())

const app = express();
const port = process.env.PORT || 5000;
const url = require('url');


var request = require('request');



const axios = require('axios');
const cheerio = require('cheerio');




app.get('/api/hello', (req, res) => {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('abcd',query.url);
  axios.get(query.url)
  .then(response => {
    response.data
    res.send({test:response.data})
    
  })
});

// axios.post('https://www.discernliving.com/')
// .then(response => {
//      console.log(response)
// })


// app.post('/api/hello', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express', array: [1,2,3,4]}
// );
  

  
// });

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});







app.listen(port, () => console.log(`Listening on port ${port}`));