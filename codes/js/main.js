// import { nav } from "./navbar.js";

// ------------Cambio de color del van cuando se hace scroll-------------
const navBar = document.querySelector("#navbar");
document.addEventListener("scroll", () => {
  navBar.classList.toggle("change-navbar", window.scrollY > 0);
});

// ------------Aparicion tarjetas de productos-------------

const productsA = [
  {
    id: 1,
    name: "Hoodies",
    stock: 8,
    price: "14.00",
    image: "./codes/img/featured1.png",
  },
  {
    id: 2,
    name: "Shirts",
    stock: 13,
    price: "24.00",
    image: "./codes/img/featured2.png",
  },
  {
    id: 3,
    name: "Sweatshirts",
    stock: "8",
    price: "24.00",
    image: "./codes/img/featured3.png",
  },
];

const imgProducts = document.querySelector(".products_show-imgs");

function printProduct(products) {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html += ` <div class="card-container" data-id='${products[i].id}'>
                    <div class="img-container">
                        <img src="${products[i].image}" alt="${products[i].name}">
                    </div>
                    <div class="card-info">
                        <div>
                            <p>${products[i].price}</p>
                            <span>${products[i].stock}</span>
                        </div>
                        <p class="name-product">${products[i].name}</p>
                        <button>+</button>
                    </div>
                    </div>`;
  }
  imgProducts.innerHTML = html;
}

printProduct(productsA);
