
//Router for /prices endpoint
const express = require('express');
const app = express();
const router = express.Router();

const axios = require('axios');
const { formatPrice } = require('../helpers/helperFunctions.js');
const { save, retrieve } = require('../../database/index.js');

const PAGE_SIZE = 100;

let storePrices = function(data){
  console.log('entering...')
  let cryptoPrices = [];

  //convert prices data to Mongo Schema
  for (let i = 0; i < data.length; i++){

    let crypto = {
      rank: data[i].rank,
      name: data[i].name,
      symbol: data[i].symbol,
      price: data[i].quotes.USD.price,
      marketCap: data[i].quotes.USD.market_cap,
      priceChange24hr: data[i].quotes.USD.percent_change_24h+"%",
      priceChange1hr: data[i].quotes.USD.percent_change_1h+"%",
      priceChange7d: data[i].quotes.USD.percent_change_7d+"%"
    }
    cryptoPrices.push(crypto); // add to array
  }

  save(cryptoPrices); //save prices in DB and send response object

}

//Get request for '/' all prices
router.get('/', async (req, res)=>{
  
  try {

    let response = await axios.get('https://api.coinmarketcap.com/v2/ticker/');

    let data = response.data.data; //Coinmarket Cap Returns "Data" property that stores all relevant key values 

    let cryptoData = [];
  
    for (keys in data){
      //add new props for testing
      data[keys].price = formatPrice(data[keys].quotes.USD.price);
      data[keys].marketCap = formatPrice(data[keys].quotes.USD.market_cap);
      data[keys].priceChange24hr = data[keys].quotes.USD.percent_change_24h + '%';

      cryptoData.push(data[keys]);
    }

    cryptoData.sort((a,b)=>a.rank - b.rank); //sort prices

    storePrices(cryptoData);
    let prices = await retrieve(PAGE_SIZE);
    res.send(prices);
    //res.send(cryptoData);
  }

  catch (err){
    console.log(err,'Error in Request to Coin Market Cap');
    res.status(500).send(err);
  }
  
});


module.exports = router;