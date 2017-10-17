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
    var itemsOne = cart[0];
    var itemsTwo = cart[1];
    var itemsOneKey = Object.keys(cart[0]);
    var itemsTwoKey = Object.keys(cart[1]);
    return console.log(`In your cart, you have ` + itemsOneKey[0] + ` at $` + itemsOne[itemsOneKey[0]] + ` and ` + itemsTwoKey[0] + ` at $` + itemsTwo[itemsTwoKey[0]] + `.`);
  }
  else{
    var item;
    var itemKey;
    var itemArray = [];
    var itemPrice;
    for (var i = 0; i < cart.length; i++){
      item = cart[i]; // item = {"orange": 45}
      itemKey = Object.keys(item)[0]; // "orange"
      itemPrice = item[itemKey]; // 45
      itemArray.push(`${itemKey} at $${itemPrice}`);
    };
    var lastPartOfFirstSentence = itemArray.pop();
    var firstPartOfSentence = `In your cart, you have ${itemArray.join(`, `)}`;
    console.log(`${firstPartOfSentence}, and ${lastPartOfFirstSentence}.`);
  }
}
function total() {
  var amount = 0;
  for (var i = 0; i<cart.length; i++){
    var itemObject = cart[i];
    var item = Object.keys(cart[i])[0];
    var price = itemObject[item];
    amount = amount + price;
  }
  return amount;
}

function removeFromCart(item) {
  item = cart[1];
  cart.splice(item);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
