const cartImages = document.querySelector("#print-cart");
const amountCart = document.querySelector("#amount-cart");

export function printCarts(object) {
  let html = "";
  for (const element in object) {
    html += `                           
    <div class="car_container">
                            <div class="img-cart">
                                <img src="${object[element].image}" alt="">
                            </div>
                             <div class="info-product-cart">

                                <p>${object[element].name}</p>
                                <p>Stock: ${object[element].stock}
                                <span>$${object[element].price}</span>
                                </p>
                                <p>
                                Subtotal: $${(
                                  parseFloat(object[element].price) *
                                  parseFloat(object[element].amount)
                                ).toFixed(2)}
                                </p>
                                <div class="units">
                                    <div>
                                        <span class="icon-minus btn-amount"></span>
                                        <p>${object[element].amount} units</p>
                                        <span class="icon-plus btn-amount"></span>
                                    </div>
        
                                    <div class="trash-container"><span class="icon-trash-empty trash"></span></div>
                                </div>
                            </div>
                        </div>`;

    cartImages.innerHTML = html;
  }
}

export function printAmountCart(object) {
  let productCount = 0;
  for (const element in object) {
    productCount += object[element].amount;
  }
  amountCart.innerHTML = productCount;
}
