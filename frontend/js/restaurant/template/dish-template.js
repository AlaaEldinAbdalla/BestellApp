function  dishTemplate (selectedDish, dishIndex) {
  return `
    <div class="dish-card">
      <img class="dish-img" src="${selectedDish.img}" alt="${selectedDish.name}">
      <div class="dish-info">
        <div class="dish-name">${selectedDish.name}</div>
        <div class="dish-description">${selectedDish.description}</div>
      </div>
      <div class="dish-action">
        <div>
  ${selectedDish.price.toFixed(2).replace(".", ",")} €
</div>
        <button class="add-btn-to-basket" onclick="addDishToBasket(${dishIndex})">+</button>
      </div>
    </div>
  `;
}
