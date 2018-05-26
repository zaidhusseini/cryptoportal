const express = require('express');
const app = express();
const router = express.Router();

const axios = require('axios');
const { formatPrice } = require('./helpers/helpers.js')

router.use('/prices', async (req, res)=>{
  
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


    res.send(cryptoData);
  }

  catch (err){
    console.log(err,'Error in Request to Coin Market Cap');
    res.status(500).send(err);
  }
  

});

module.exports = router;