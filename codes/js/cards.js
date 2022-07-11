const productsA = [
  {
    id: 1,
    name: "Hoodies",
    stock: 8,
    price: "14.00",
    image: "./codes/img/featured1.png",
    tag: "ho",
  },
  {
    id: 2,
    name: "Shirts",
    stock: 13,
    price: "24.00",
    image: "./codes/img/featured2.png",
    tag: "sh",
  },
  {
    id: 3,
    name: "Sweatshirts",
    stock: "8",
    price: "24.00",
    image: "./codes/img/featured3.png",
    tag: "sw",
  },
];

const imgProducts = document.querySelector(".products_show-imgs");

export function printProduct(products) {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html += ` <div class="card-container ${products[i].tag}" data-id='${products[i].id}'>
                    <div class="img-container">
                        <img src="${products[i].image}" alt="${products[i].name}">
                    </div>
                    <div class="card-info">
                        <div>
                            <p>${products[i].price}</p>
                            <span>Stock: ${products[i].stock}</span>
                        </div>
                        <p class="name-product">${products[i].name}</p>
                        <button>+</button>
                    </div>
                    </div>`;
  }
  imgProducts.innerHTML = html;
}

printProduct(productsA);
