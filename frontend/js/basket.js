let basket = [];
let subtotal = 0;
let deliveryCost = 2.5;
let totalPrice = 0;
let orderMode = "delivery";

/* Warenkorb */
function renderBasket() {
  calculateTotalPrice();

  setBasketMessage();
  setBasketItems();
  setBasketFooter();

  renderBasketMobile();
  updateOrderButton();
  saveBasket();
}

function setBasketMessage() {
  const basketStatusContainerRef = document.querySelector(".empty-basket-container");

  if (basket.length === 0) {
    basketStatusContainerRef.innerHTML = emptyMessageTemplate();
    basketStatusContainerRef.classList.add("is-active");
  } else {
    basketStatusContainerRef.innerHTML = "";
    basketStatusContainerRef.classList.remove("is-active");
  }
}

function setBasketItems() {
  const basketContainerRef = document.getElementById("basketContainer");

  basketContainerRef.innerHTML = "";

  for (let itemIndex = 0; itemIndex < basket.length; itemIndex++) {
    const selectedItem = basket[itemIndex];
    basketContainerRef.innerHTML += basketItemTemplate(selectedItem, itemIndex);
  }
}

function setBasketFooter() {
  const basketFooterContainerRef = document.getElementById("basketFooterContainer");

  basketFooterContainerRef.innerHTML = basketFooterTemplate(
    subtotal,
    deliveryCost,
    totalPrice
  );
}

/* Warenkorb Responsiv */
function renderBasketMobile() {
  setBasketMessageMobile();
  setBasketItemsMobile();
  setBasketFooterMobile();
}

function setBasketMessageMobile() {
  const basketMobileStatusContainerRef = document.querySelector(".empty-basket-mobile-container");

  if (basket.length === 0) {
    basketMobileStatusContainerRef.innerHTML = emptyMessageTemplate();
    basketMobileStatusContainerRef.classList.add("is-active");
  } else {
    basketMobileStatusContainerRef.innerHTML = "";
    basketMobileStatusContainerRef.classList.remove("is-active");
  }
}

function setBasketItemsMobile() {
  const basketMobileContainerRef = document.getElementById("basketMobileContainer");

  basketMobileContainerRef.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    const selectedItem = basket[i];
    basketMobileContainerRef.innerHTML += basketItemTemplate(selectedItem, i);
  }
}

function setBasketFooterMobile() {
  const basketFooterMobileContainerRef = document.getElementById("basketFooterMobileContainer");

  basketFooterMobileContainerRef.innerHTML = basketFooterTemplate(
    subtotal,
    deliveryCost,
    totalPrice
  );
}

/* Warenwert berechnen */
function calculateSubtotal() {
  subtotal = 0;

  for (let itemIndex = 0; itemIndex < basket.length; itemIndex++) {
    const currentItem = basket[itemIndex];
    subtotal += currentItem.price * currentItem.amount;
  }

  return subtotal;
}

/* Lieferkosten berechnen */
function calculateDeliveryCost() {
  if (basket.length === 0) {
    return 0;
  }

  if (orderMode === "pickup") {
    return 0;
  }

  return 2.5;
}

/* Gesamtpreis berechnen */
function calculateTotalPrice() {
  subtotal = calculateSubtotal();
  deliveryCost = calculateDeliveryCost();
  totalPrice = subtotal + deliveryCost;
}

/* Artikel zum Warenkorb hinzufügen */
function findBasketItem(selectedDish) {
  for (let itemIndex = 0; itemIndex < basket.length; itemIndex++) {
    const currentItem = basket[itemIndex];

    if (currentItem.name === selectedDish.name) {
      return currentItem;
    }
  }

  return false;
}
function addNewItemToBasket(selectedDish) {
  const newBasketItem = {
    name: selectedDish.name,
    price: selectedDish.price,
    amount: 1,
  };

  basket.push(newBasketItem);
}
/* Menge und  Artikel im Warenkorb bearbeiten */
function increaseAmount(itemIndex) {
  basket[itemIndex].amount++;
  renderBasket();
}

function decreaseAmount(itemIndex) {
  if (basket[itemIndex].amount > 1) {
    basket[itemIndex].amount--;
  } else {
    deleteFromBasket(itemIndex);
  }

  renderBasket();
}

function deleteFromBasket(itemIndex) {
  basket.splice(itemIndex, 1);
  renderBasket();
}

/* Bestellmodus auswählen */
function setOrderMode(mode) {
  orderMode = mode;

  updateOrderButtons(mode);

  updateOrderButton();
  renderBasket();
}
function updateOrderButtons(mode) {
  const deliveryBtnRef = document.getElementById("deliveryBtn");
  const pickupBtnRef = document.getElementById("pickupBtn");
  const deliveryBtnMobileRef = document.getElementById("deliveryBtnMobile");
  const pickupBtnMobileRef = document.getElementById("pickupBtnMobile");

  deliveryBtnRef.classList.remove("is-active");
  pickupBtnRef.classList.remove("is-active");
  deliveryBtnMobileRef.classList.remove("is-active");
  pickupBtnMobileRef.classList.remove("is-active");

  if (mode === "delivery") {
    deliveryBtnRef.classList.add("is-active");
    deliveryBtnMobileRef.classList.add("is-active");
  } else {
    pickupBtnRef.classList.add("is-active");
    pickupBtnMobileRef.classList.add("is-active");
  }
}
/* Bestellbutton aktivieren/deaktivieren */
function updateOrderButton() {
  const orderBtn = document.getElementById("orderBtn");
  const orderBtnMobile = document.getElementById("orderBtnMobile");

  if (basket.length === 0) {
    orderBtn.disabled = true;
    orderBtnMobile.disabled = true;
  } else {
    orderBtn.disabled = false;
    orderBtnMobile.disabled = false;
  }
}

/* Warenkorb Responsiv öffnen/schließen */
function toggleBasketMobile() {
  const basketMobileContainerRef = document.getElementById("basketMobile");
  basketMobileContainerRef.classList.toggle("is-open");
  basketMobileContainerRef.classList.toggle("is-closed");
}
/* Bestellung abschließen */
function completeOrder() {
  if (basket.length === 0) {
    return;
  }

  showOrderDialog();

  basket = [];
  renderBasket();
  updateOrderButton();
}
function showOrderDialog() {
  const orderDialogContainerRef = document.getElementById("orderDialog");
  const orderDialogTextRef = document.getElementById("orderDialogText");

  if (orderMode === "delivery") {
    orderDialogTextRef.innerHTML = deliveryMessageTemplate();
  } else {
    orderDialogTextRef.innerHTML = pickupMessageTemplate();
  }

  orderDialogContainerRef.classList.add("active");
}
function closeOrderDialog() {
  const orderDialogContainerRef = document.getElementById("orderDialog");
  orderDialogContainerRef.classList.remove("active");
}

