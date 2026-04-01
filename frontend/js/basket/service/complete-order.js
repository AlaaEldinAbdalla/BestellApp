let orderMode = "delivery";

/* 1️⃣
*/
function  completeOrder() {
  if (basket.length === 0) {
    return;
  }

  showOrderDialog();

  basket = [];
  renderBasket();
  updateOrderButton();
}
/* 2️⃣
*/
function showOrderDialog() {
  const orderDialogContainerRef = document.getElementById("orderDialog");
  const orderDialogTextRef = document.getElementById("orderDialogText");

  if (orderMode === "delivery") {
    orderDialogTextRef.innerHTML = orderMessageTemplate();
  } else {
    orderDialogTextRef.innerHTML = pickupMessageTemplate();
  }

  orderDialogContainerRef.classList.add("active");
}

/* 3️⃣
*/
function closeOrderDialog() {
  const orderDialogContainerRef = document.getElementById("orderDialog");
  orderDialogContainerRef.classList.remove("active");
}

/* 4️⃣
*/
function setOrderMode(mode) {
  orderMode = mode;
  const deliveryBtnRef = document.getElementById("deliveryBtn");
  const pickupBtnRef = document.getElementById("pickupBtn");

  deliveryBtnRef.classList.remove("is-active");
  pickupBtnRef.classList.remove("is-active");

  if (mode === "delivery") {
    deliveryBtnRef.classList.add("is-active");
  } else {
    pickupBtnRef.classList.add("is-active");
  }
  updateOrderButton();
  renderBasket();
}

 /* 5️⃣
 */
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
