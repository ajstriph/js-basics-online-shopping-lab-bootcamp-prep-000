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
    var lemonsCost = getCart()[0]["lemons"];
    return console.log(`In your cart, you have lemons at $15.`);
  }
  else if (cart.length == 2){
    Object.keys(cart);
    const mangoCost = getCart()[0]["mango"];
    const nutsCost = getCart()[1]["nuts"];
    return console.log(`In your cart, you have mangos at $${mangoCost} and nuts at $${nutsCost}.`);
  }
  else{
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
