let basket = [];


/* 1️⃣
 */
function renderBasket() {
  calculateTotalPrice();

  setBasketMessage();
  setBasketItems();
  setBasketFooter();
  
  renderBasketMobile()
  updateOrderButton();
  saveBasket(); 

}

/* 2️⃣
 */
function setBasketMessage() {
  const basketStatusContainerRef = document.querySelector( ".empty-basket-container");

  if (basket.length === 0) {
    basketStatusContainerRef.innerHTML = emptyMessageTemplate();
    basketStatusContainerRef.classList.add("is-active");
  } else {
    basketStatusContainerRef.innerHTML = "";
    basketStatusContainerRef.classList.remove("is-active");
  }
}

/* 3️⃣
 */
function setBasketItems() {
  const basketContainerRef = document.getElementById("basketContainer");

  basketContainerRef.innerHTML = "";

  for (let itemIndex = 0; itemIndex < basket.length; itemIndex++) {
    const selectedItem = basket[itemIndex];
    basketContainerRef.innerHTML += basketItemTemplate(selectedItem, itemIndex);
  }
}

/* 4️⃣
 */
function setBasketFooter() {
  const basketFooterContainerRef = document.getElementById( "basketFooterContainer");

  basketFooterContainerRef.innerHTML = basketFooterTemplate(
    subtotal,
    deliveryCost,
    totalPrice,
  );
 
}

