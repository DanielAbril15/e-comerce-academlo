const navBar = document.getElementById("navbar");

const basket = document.querySelector("#basket");
const carDisplay = document.querySelector("#car-display");
const closeCar = document.querySelector("#close-car");

const options = document.querySelector("#options");
const optionDisplay = document.querySelector("#option-burguer");
const closeOptions = document.querySelector("#close-options");

const closeHome = document.querySelector(".home-link");
const closeProduct = document.querySelector(".product-link");

export function nav() {
  document.addEventListener("scroll", () => {
    navBar.classList.toggle("change-navbar", window.scrollY > 0);
  });
}

// Abrir y cerrar lo que hay en el carro de compra
export function basketAction() {
  basket.addEventListener("click", () => {
    carDisplay.classList.add("show-car");
  });
}

export function closeBasket() {
  closeCar.addEventListener("click", () => {
    carDisplay.classList.remove("show-car");
  });
}

// Abrir y cerrar menu Responsive
export function optionAction() {
  options.addEventListener("click", () => {
    optionDisplay.classList.add("show-option");
  });
}

export function closeOption() {
  closeOptions.addEventListener("click", () => {
    optionDisplay.classList.remove("show-option");
  });
}

// seleccion de opcion
export function homeC() {
  closeHome.addEventListener("click", () => {
    optionDisplay.classList.remove("show-option");
  });
}
export function productC() {
  closeProduct.addEventListener("click", () => {
    optionDisplay.classList.remove("show-option");
  });
}
