import { nav } from "./navbar.js";
import { printProduct, productsA } from "./cards.js";

nav();
printProduct(productsA);

// var mixer = mixitup(".products_show-imgs", {
//   selectors: {
//     target: ".card-container",
//   },
//   animation: {
//     duration: 300,
//   },
// });

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
  }
  if (carAmount[currentProduct.id]) {
    carAmount[currentProduct.id].amount++;
  } else {
    carAmount[currentProduct.id] = currentProduct;
    carAmount[currentProduct.id].amount = 1;
  }
});
function printCar() {
  let html = "";
  for (const product in object) {
    // if (product === currentProduct.id) {
    //     html =
    // }
  }
  if (carAmount.key) {
  }
}
