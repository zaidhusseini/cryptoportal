const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cryptoportal',  { useNewUrlParser: true });

const cryptoPricesSchema = new mongoose.Schema({
  rank: Number,
  name: String,
  symbol: String,
  price: Number,
  marketCap: Number,
  priceChange24hr: String,
  priceChange1hr: String,
  priceChange7d: String,
})

const CryptoPrices = mongoose.model('CryptoPrice', cryptoPricesSchema);

//Store prices in DB after prices API call
let storePrices = function(cryptos){
  CryptoPrices.create(cryptos ,(err, result)=>{
    if (err){
      console.log('Error storing crypto prices in DB', err);
      return;
    } else {
      console.log("Crypto prices saved successfully");
    }
  });
}

//Retrieve crypto prices from DB

let retrievePrices = async function(pageSize, pageNumber){
  //retrieve prices object
  let prices = await CryptoPrices.find({}, (err, response)=>{
    if (err){
      console.log('Error retrieving crypto prices from DB', err);
      return;
    } else {
      console.log("Crypto prices retrieved successfully");
    }
  }).limit(pageSize);

  return prices;
}

module.exports.save = storePrices;
module.exports.retrieve = retrievePrices;