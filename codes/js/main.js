import {
  nav,
  basketAction,
  closeBasket,
  optionAction,
  closeOption,
  homeC,
  productC,
} from "./navbar.js";

import { printProduct, productsA } from "./cards.js";

import { printCarts, printAmountCart } from "./printCart.js";

const cartAm = document.querySelector(".print-car");
const carEmpty = document.querySelector("#car-empty");

nav();
basketAction();
closeBasket();
optionAction();
closeOption();
homeC();
productC();
printProduct(productsA);

var mixer = mixitup(".products_show-imgs", {
  selectors: {
    target: ".card-container",
  },
  animation: {
    duration: 300,
  },
});

const carAmount = {};

document.addEventListener("click", function (e) {
  const idProduct = parseInt(e.target.dataset.idbtn);
  let currentProduct = null;
  if (e.target.classList.contains("add-btn")) {
    productsA.forEach((element) => {
      if (idProduct === element.id) {
        currentProduct = element;
      }
    });
    if (carAmount[currentProduct.id]) {
      carAmount[currentProduct.id].amount++;
    } else {
      carAmount[currentProduct.id] = currentProduct;
      carAmount[currentProduct.id].amount = 1;
    }
    if (
      carAmount[currentProduct.id].amount > carAmount[currentProduct.id].stock
    ) {
      alert("We dont have stock");
    }
    if (Object.entries(carAmount).length > 0) {
      carEmpty.classList.add("car_not-empty");
      cartAm.classList.remove("car_amount-zero");
    }

    printCarts(carAmount);
    printAmountCart(carAmount);
  }
});

console.log(cartAm.classList);
document.addEventListener("click", (e) => {
  const idButton = parseInt(e.target.parentElement.dataset.idcart);
  if (e.target.classList.contains("icon-minus")) {
    for (const element in carAmount) {
      if (idButton === carAmount[element].id) {
        carAmount[element].amount--;
        if (carAmount[element].amount === 0) {
          delete carAmount[element];
        }
        if (Object.entries(carAmount).length === 0) {
          cartAm.classList.add("car_amount-zero");

          carEmpty.classList.remove("car_not-empty");
        }
      }
      printCarts(carAmount);
      printAmountCart(carAmount);
    }
  }
});

document.addEventListener("click", (e) => {
  const idButton = parseInt(e.target.parentElement.dataset.idcart);
  if (e.target.classList.contains("icon-plus")) {
    for (const element in carAmount) {
      if (idButton === carAmount[element].id) {
        carAmount[element].amount++;
        console.log(carAmount[element].stock);
      }
      if (carAmount[element].amount > carAmount[element].stock) {
        alert("We dont have stock");
      }
    }
    printCarts(carAmount);
    printAmountCart(carAmount);
  }
});
