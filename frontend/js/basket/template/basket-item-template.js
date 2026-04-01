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