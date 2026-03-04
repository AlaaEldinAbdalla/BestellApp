// Dishes Logic
let dishes = [
  {
    name: "Spaghetti Carbonara",
    price: 12.5,
    description: "Klassische italienische Pasta mit Speck, Ei und Parmesan.",
  },
  {
    name: "Vegetarische Lasagne",
    price: 10.0,
    description: "Leckere Lasagne mit Gemüse und Käse.",
  },
  {
    name: "Gegrilltes Hähnchen mit Gemüse",
    price: 15.0,
    description: "Saftiges Hähnchenfilet mit frischem Gemüse.",
  },
  {
    name: "Thai Curry mit Reis",
    price: 13.0,
    description: "Aromatisches Curry mit Kokosmilch und Gemüse.",
  },
];

function renderDishes() {
  const dishCardContainerRef = document.getElementById("dishCard");
  dishCardContainerRef.innerHTML = ""; // Clear existing content

  for (let currentDishIndex = 0; currentDishIndex < dishes.length; currentDishIndex++) {
    const currentDish = dishes[currentDishIndex];
    dishCardContainerRef.innerHTML += createDishCardTemplate(
      currentDish,
      currentDishIndex,
    );
  }
}

function createDishCardTemplate(currentDish, currentDishIndex) {
  return `
    <div class="dish-card">
        <div class="dish-info">
        <div class="dish-name">${currentDish.name}</div>
        <div class="dish-description">${currentDish.description}</div>
        <div class="dish-price">${currentDish.price} €</div>
    </div>
    <button class="add-to-basket-button" onclick="addToBasket(${currentDishIndex})">+</button>
    </div>
  `;
}

function addToBasket(selectedDishIndex) {
    const selectedDish = dishes[selectedDishIndex];

    
    let dishAlreadyInBasket = false;

    for (let currentProduktInBasketIndex = 0; currentProduktInBasketIndex < basket.length; currentProduktInBasketIndex++) {
        let produktInBasket = basket[currentProduktInBasketIndex];

      
        if (produktInBasket.name === selectedDish.name) {
            produktInBasket.amount++; 
            dishAlreadyInBasket = true;
            break;
        }
    }

    if (dishAlreadyInBasket === false) {
        basket.push({
            name: selectedDish.name,
            price: selectedDish.price,
            amount: 1
        });
    }

    renderBasket(); 
}
