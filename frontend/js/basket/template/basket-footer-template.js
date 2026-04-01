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