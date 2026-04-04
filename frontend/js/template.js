
function dishTemplate(selectedDish, dishIndex) {
  return `
    <div class="dish-card">
      <img class="dish-img" src="${selectedDish.img}" alt="${selectedDish.name}">
      <div class="dish-info">
         <div class="dish-name">${selectedDish.name}</div>
         <div class="dish-description">${selectedDish.description}</div>
      </div>

      <div class="dish-action">
         <div>${selectedDish.price.toFixed(2).replace(".", ",")} €</div>
         <button class="add-btn-to-basket" onclick="addDishToBasket(${dishIndex})">+</button>
      </div>
    </div>
  `;
}

function emptyMessageTemplate() {
  return `
          <p class="empty-message">
             Dein Warenkorb ist leer. Füge leckere Gerichte hinzu!
          </p>
  `;
}

function basketItemTemplate(selectedItem, itemIndex) {
  return `
    <div class="basket-item">
      <div class="basket-item-name">${selectedItem.name}</div>

      <div class="basket-item-controls-row">

        <div class="basket-item-quantity-controls">
          <button class="basket-btn remove" onclick="decreaseAmount(${itemIndex})">-</button>
          <div class="basket-item-amount">${selectedItem.amount}</div>
          <button class="basket-btn add" onclick="increaseAmount(${itemIndex})">+</button>
        </div>

        <div class="basket-item-price">
          ${(selectedItem.price * selectedItem.amount).toFixed(2).replace(".", ",")} €
        </div>

        <button class="basket-btn delete" onclick="deleteFromBasket(${itemIndex})">x</button>

      </div>
    </div>
  `;
}

function basketFooterTemplate(subtotal, deliveryCost, totalPrice) {
  return `
    <div class="basket-footer__content">
    
      <div class="basket-row">
        <span>Warenwert</span>
        <span id="subtotal">${subtotal.toFixed(2).replace(".", ",")} €</span>
      </div>

      <div class="basket-row">
        <span>Lieferkosten</span>
        <span id="deliveryCost">${deliveryCost.toFixed(2).replace(".", ",")} €</span>
      </div>

      <div class="basket-row basket-total">
        <span>Gesamtpreis</span>
        <span id="totalPriceWithDelivery">${totalPrice.toFixed(2).replace(".", ",")} €</span>
      </div>

    </div>
  `;
}

function deliveryMessageTemplate() {
  return `
    <p class="order-message">
      Danke für deine Bestellung! Dein Essen wird in 30 Minuten geliefert.
    </p>
  `;
}

function pickupMessageTemplate() {
  return `
    <p class="pickup-message">
      Danke für deine Bestellung! Dein Essen ist in 30 Minuten zur Abholung bereit.
    </p>
  `;
}
