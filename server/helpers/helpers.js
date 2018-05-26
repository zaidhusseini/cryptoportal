

const formatPrice = function(price){
  return '$ ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Use Regex to convert to commas
}

module.exports.formatPrice = formatPrice;