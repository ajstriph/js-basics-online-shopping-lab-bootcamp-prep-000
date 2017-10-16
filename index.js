var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.random(1,100);
  var itemName = "daikon";
 item = {[itemName]: [itemPrice]};
 cart.push(item);
 console.log("[itemName] has been added to your cart.")
 return cart;
}


function viewCart() {
  if(cart == []){
    console.log("Your shopping cart is empty.");
  }
  else {
    console.log(`In your cart, you have ${itemName} at ${itemPrice}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
