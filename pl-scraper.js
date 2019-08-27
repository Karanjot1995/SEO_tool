
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.discernliving.com/';

axios(url)
  .then(response => {
    const html = response.data;
    const data = cheerio.load(html);
    // const statsTable = data('.statsTableContainer > tr');
    console.log(data);
      
  })
  .catch(console.error);

