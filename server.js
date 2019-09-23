const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;



var request = require('request');



const axios = require('axios');
const cheerio = require('cheerio');




app.get('/api/hello', (req, res) => {
  path = 
  axios.get('https://www.discernliving.com/')
  .then(response => {
    response.data
    res.send({test:response.data})
    
  })
});

axios.post('https://www.discernliving.com/')
.then(response => {
     console.log(response)
})


// app.post('/api/world', (req, res) => {
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