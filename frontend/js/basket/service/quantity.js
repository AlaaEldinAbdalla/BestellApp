
1/* 1️⃣
  */
function increaseAmount(itemIndex) {
  basket[itemIndex].amount++;

  renderBasket();
}

/* 2️⃣
  */
function decreaseAmount(itemIndex) {
  if (basket[itemIndex].amount > 1) {
    basket[itemIndex].amount--;
  } else {
    deleteFromBasket(itemIndex);

  }

  renderBasket();
}

/* 3️⃣
  */
function deleteFromBasket(itemIndex) {
  basket.splice(itemIndex, 1);
  renderBasket();

}