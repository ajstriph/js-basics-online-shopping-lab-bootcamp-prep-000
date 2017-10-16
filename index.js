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
    var object = cart[0]; //{lemon:4}
    var keys = Object.keys(cart[0]);                                  //object['lemon']
    return console.log(`In your cart, you have ` + keys[0] + ` at $` + object[keys[0]] + `.`);
  }
  else if (cart.length == 2){
    var mango = cart[0];
    var nuts = cart[1];
    var mangoKey = Object.keys(cart[0]);
    var nutsKey = Object.keys(cart[1]);
    Object.keys(cart);
    return console.log(`In your cart, you have ` + mangoKey[0] + ` at $` + mango[mangoKey[0] + ` and ` + nutsKey[0] + ` at $` + nuts[nutsKey[0]] + `.`]);
  }
  else{
    //while
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
