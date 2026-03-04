// Global 
function init() {
  renderDishes();
  loadBasket();  
  renderBasket();
  syncResponsiveBasket();
  
}

function toggleBasket() {
    const basket = document.getElementById("basketResponsive");
    const button = document.getElementById("basketToggleButton");

    basket.classList.toggle('is-open');
    button.classList.toggle('is-open');
}