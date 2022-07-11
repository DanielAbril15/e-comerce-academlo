import { nav } from "./navbar.js";
import { printProduct } from "./cards.js";

nav();
printProduct(productsA);

mixitup(".products_show-imgs", {
  selectors: {
    target: ".card-container",
  },
  animation: {
    duration: 300,
  },
});
