const navBar = document.getElementById("navbar");

const basket = document.querySelector("#basket");
const carDisplay = document.querySelector("#car-display");
const closeCar = document.querySelector("#close-car");

const options = document.querySelector("#options");
const optionDisplay = document.querySelector("#option-burguer");
const closeOptions = document.querySelector("#close-options");

const closeHome = document.querySelector(".home-link");
const closeProduct = document.querySelector(".product-link");

function nav() {
  document.addEventListener("scroll", () => {
    navBar.classList.toggle("change-navbar", window.scrollY > 0);
  });
}

// Abrir y cerrar lo que hay en el carro de compra
function basketAction() {
  basket.addEventListener("click", () => {
    carDisplay.classList.add("show-car");
  });
}

function closeBasket() {
  closeCar.addEventListener("click", () => {
    carDisplay.classList.remove("show-car");
  });
}

// Abrir y cerrar menu Responsive
function optionAction() {
  options.addEventListener("click", () => {
    optionDisplay.classList.add("show-option");
  });
}

function closeOption() {
  closeOptions.addEventListener("click", () => {
    optionDisplay.classList.remove("show-option");
  });
}

// seleccion de opcion
function homeC() {
  closeHome.addEventListener("click", () => {
    optionDisplay.classList.remove("show-option");
  });
}
function productC() {
  closeProduct.addEventListener("click", () => {
    optionDisplay.classList.remove("show-option");
  });
}

export {
  productC,
  homeC,
  closeOption,
  optionAction,
  closeBasket,
  basketAction,
  nav,
};
