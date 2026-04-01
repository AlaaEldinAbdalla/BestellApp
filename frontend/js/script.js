function init() {
renderDishes();
 loadBasket();  
renderBasket();
}


function toggleBasketMobile() {
  const basketMobileContainerRef = document.getElementById("basketMobile");
  basketMobileContainerRef.classList.toggle("is-open");
  basketMobileContainerRef.classList.toggle("is-closed");
}
