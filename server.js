const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;



var request = require('request');

// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

// // axios(url)
// //   .then(response => {
// //     const html = response.data;
// //     const  = cheerio.load(html);
// //     const statsTable = $('.statsTableContainer > tr');
// //     console.log(statsTable.length);
// //   })
// //   .catch(console.error);


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.use(cors());

// app.get('/with-cors', cors(), (req, res, next) => {
//   res.json({ msg: 'WHOAH with CORS it works!' }, console.log(msg))
// })


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express', array: [1,2,3,4] });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});







app.listen(port, () => console.log(`Listening on port ${port}`));