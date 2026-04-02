/* 1️⃣
 */
let dishes = [
  {
    img: "./assets/images/dish-1.jpg",
    name: "Gebratener Lachs",
    price: 17.5,
    description: "Lachsfilet mit Kartoffeln.",
  },

  {
    img: "./assets/images/dish-2.jpg",
    name: "Spaghetti Carbonara",
    price: 12.5,
    description: "Klassische italienische Pasta.",
  },
  {
    img: "./assets/images/dish-3.jpg",
    name: "Thai Curry mit Reis",
    price: 13.5,
    description: "Aromatisches Curry mit Gemüse.",
  },
  {
    img: "./assets/images/dish-4.jpg",
    name: "Gegrilltes Hähnchen",
    price: 15.5,
    description: "Saftiges Hähnchenfilet mit Gemüse.",
  },

  {
    img: "./assets/images/dish-5.jpg",
    name: "Vegetarische Lasagne",
    price: 10.5,
    description: "Leckere Lasagne mit Gemüse und Käse.",
  },
  {
    img: "./assets/images/dish-6.jpg",
    name: "Hähnchen-Curry mit Gemüse",
    price: 14.5,
    description: "Würziges Curry mit Hähnchen und Gemüse.",
  },
];

/* 2️⃣
 */
function renderDishes() {
  const dishContainerRef = document.getElementById("dishContainer");

  dishContainerRef.innerHTML = "";

  for (let dishIndex = 0; dishIndex < dishes.length; dishIndex++) {
    const selectedDish = dishes[dishIndex];
    dishContainerRef.innerHTML += dishTemplate(selectedDish, dishIndex);
  }
  
}

/* 3️⃣
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