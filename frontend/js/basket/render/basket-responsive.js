/* 1️⃣
*/
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

/* 2️⃣
*/    
function setBasketItemsMobile() {
  const basketMobileContainerRef = document.getElementById("basketMobileContainer");

  basketMobileContainerRef.innerHTML = "";

   for (let i = 0; i < basket.length; i++) {
    const selectedItem = basket[i];
    basketMobileContainerRef.innerHTML += basketItemTemplate(selectedItem, i);
  }
}

/* 3️⃣
*/
function setBasketFooterMobile() {
  const basketFooterMobileContainerRef = document.getElementById("basketFooterMobileContainer");

  basketFooterMobileContainerRef.innerHTML = basketFooterTemplate(
    subtotal,
    deliveryCost,
    totalPrice,
  );
}
