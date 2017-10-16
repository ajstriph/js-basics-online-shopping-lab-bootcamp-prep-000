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
    Object.keys(cart);
    return console.log(`In your cart, you have` + Object.keys(cart)[0] + `at` +); //Object.values(cart)[0] + `.`);
  }
  else if (cart.length == 2){
    Object.keys(cart);
    return console.log(`In your cart, you have` + Object.keys(cart)[0] + `at ${cart[0]} and ` + Object.keys(cart)[1] );
  }
  else{
    //while
    Object.keys(cart);
    const orangeCost = getCart()[0]["orange"];
    const pearCost = getCart()[1]["pear"];
    const quinceCost = getCart()[2]["quince"];
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
