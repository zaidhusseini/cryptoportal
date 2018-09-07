

const formatPrice = function(price){
  
  //only add commas to prices > 1,000
  if (price >= 1000){
    return '$ ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Use Regex to convert to commas
  } else {
    return '$ ' + price.toString();
  }
}

module.exports.formatPrice = formatPrice;