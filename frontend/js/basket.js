// Basket Logic
let basket = [];

function renderBasket() {
    const basketContainerRef = document.getElementById("basketContainer");
    basketContainerRef.innerHTML = ""; 

    let subtotal = 0; 

    for (let currentProduktInBasketIndex = 0; currentProduktInBasketIndex < basket.length; currentProduktInBasketIndex++) {
        const produktInBasket = basket[currentProduktInBasketIndex];
         // ✅ Index wird korrekt übergeben
       basketContainerRef.innerHTML += createBasketItemTemplate(produktInBasket, currentProduktInBasketIndex);
        
        subtotal += produktInBasket.price * produktInBasket.amount; 
    }

    let deliveryCosts = 2.5; 
    if (subtotal === 0) {
        deliveryCosts = 0; 
    }

    
    document.getElementById("subtotal").innerHTML = `${subtotal} €`;
    document.getElementById("deliveryCosts").innerHTML = `${deliveryCosts} €`;
    document.getElementById("totalPriceWithDelivery").innerHTML = `${subtotal + deliveryCosts} €`; 
     syncResponsiveBasket();
        saveBasket();
}

function createBasketItemTemplate(produktInBasket, currentProduktInBasketIndex) {
    return `
    <div class="basket-item">
      <div class="basket-item-name">${produktInBasket.name}</div>
      <div class="basket-item-controls-row">
        <div class="basket-item-quantity-controls">
          <button class="remove-from-basket-button" onclick="decreaseProductCount(${currentProduktInBasketIndex})">-</button>
          <div class="basket-item-amount">${produktInBasket.amount}x</div>
          <button class="add-existing-item-button" onclick="increaseProductCount(${currentProduktInBasketIndex})">+</button>
        </div>
        <div class="basket-item-price">${produktInBasket.price * produktInBasket.amount} €</div>
        <button class="delete-from-basket-button" onclick="deleteFromBasket(${currentProduktInBasketIndex})">🗑️</button>
      </div>
    </div>
    `;
}

function increaseProductCount(currentProduktInBasketIndex) {
    basket[currentProduktInBasketIndex].amount++;
    renderBasket();
}

function decreaseProductCount(currentProduktInBasketIndex) {
    if (basket[currentProduktInBasketIndex].amount > 1) {
        basket[currentProduktInBasketIndex].amount--;
    } else {
        basket.splice(currentProduktInBasketIndex, 1);
    }
    renderBasket();
  
}

function deleteFromBasket(currentProduktInBasketIndex) {
  basket.splice(currentProduktInBasketIndex, 1);
  renderBasket();
}

function syncResponsiveBasket() {

    const basketContainerRef = document.getElementById("basketContainer");
    const basketContainerResponsiveRef = document.getElementById("basketContainerResponsive");
          basketContainerResponsiveRef.innerHTML = basketContainerRef.innerHTML;

    const subtotal = document.getElementById("subtotal").innerHTML;
    const deliveryCosts = document.getElementById("deliveryCosts").innerHTML;
    const totalPriceWithDelivery = document.getElementById("totalPriceWithDelivery").innerHTML;

           document.getElementById("subtotalResponsive").innerHTML = subtotal;
           document.getElementById("deliveryCostsResponsive").innerHTML = deliveryCosts;
           document.getElementById("totalPriceWithDeliveryResponsive").innerHTML = totalPriceWithDelivery;
}
