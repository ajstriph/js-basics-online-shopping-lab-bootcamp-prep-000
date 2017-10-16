var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100);
 var itemObject = {[item]: itemPrice};
 cart.push(itemObject);
 console.log(`${item} has been added to your cart.`)
 return cart;
}


function viewCart() {
  if(cart.length == 0){
    return console.log("Your shopping cart is empty.");
  }
  else if (cart.length == 1){
    return console.log(`In your cart, you have lemons at ${lemonsCost}.`);
  }
  else if (cart.length == 2){
    Object.keys(cart);
    return console.log(`In your cart, you have mangos at $${mangoCost} and nuts at $${nutsCost}.`);
  }
  else{
    Object.keys(cart);
    return console.log(`In your cart, you have oranges at $${orangeCost}, pear at $${pearCost}, and quince at $${quinceCost}.`);
  }
}

function total() {
  //*var totalCost = sorghumCost + tarragonCost;
  //return totalCost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
