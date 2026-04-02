function saveBasket() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function loadBasket() {
  const savedBasket = localStorage.getItem("basket");

  if (savedBasket) {
    basket = JSON.parse(savedBasket);
  }
}