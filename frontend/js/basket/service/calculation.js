let subtotal = 0;
let deliveryCost = 2.5;
let totalPrice = 0;

/* 1️⃣
*/
function calculateSubtotal() {
    subtotal = 0;
    for (let itemIndex = 0; itemIndex < basket.length; itemIndex++) {
        const currentItem = basket[itemIndex];
        subtotal += currentItem.price * currentItem.amount;
    }
    return subtotal;
}

/* 2️⃣
*/
function calculateDeliveryCost() {
  if (basket.length === 0) {
    return 0; 
  }
    if (orderMode === "pickup") {
        return 0; 
    }
    return 2.5; 
}

/* 3️⃣
*/
function calculateTotalPrice() {
  subtotal = calculateSubtotal();
  deliveryCost = calculateDeliveryCost();
  totalPrice = subtotal + deliveryCost;
}






