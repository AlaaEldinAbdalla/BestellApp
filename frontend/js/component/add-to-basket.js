/* 1️⃣
*/
function addDishToBasket(dishIndex) {
  const selectedDish = dishes[dishIndex];
  const existingItem = findBasketItem(selectedDish);

  if (existingItem) { existingItem.amount++;
  } else {
    addNewItemToBasket(selectedDish);
  }
   
  renderBasket();
}

/* 2️⃣
*/
function findBasketItem(selectedDish) {
  for (let itemIndex = 0; itemIndex < basket.length; itemIndex++) {
    const currentItem = basket[itemIndex];

    if (currentItem.name === selectedDish.name) {
      return currentItem; 
    }
    
  }

  return false; 
}

/* 3️⃣
*/
function addNewItemToBasket(selectedDish) {
  const newBasketItem = {
    name: selectedDish.name,
    price: selectedDish.price,
    amount: 1,
  };
  basket.push(newBasketItem);
}

