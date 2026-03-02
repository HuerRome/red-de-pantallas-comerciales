"use strict";

// Punto de entrada
document.addEventListener("DOMContentLoaded", () => {
  // JS listo para usar
});



















"use strict";

const products = [
  {
    name: "Mozzarella Cremac",
    price: "$5.999",
    unit: "kg",
    image: "img/mozzarella.png"
  },
  {
    name: "Cerveza Patagonia",
    price: "$2.999",
    unit: "c/u",
    image: "img/cerveza.png"
  },
  {
    name: "Jamón Cocido",
    price: "$4.500",
    unit: "kg",
    image: "img/jamon.png"
  },
  {
    name: "Salame",
    price: "$3.800",
    unit: "kg",
    image: "img/salame.png"
  },
    {
    name: "Yogurt Cotali",
    price: "$3.800",
    unit: "kg",
    image: "img/salame.png"
  }
];

function renderProducts(data) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="grid">
      ${data.map(product => `
        <div class="card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-name">${product.name}</div>
          <div class="price">${product.price}</div>
          <div class="unit">${product.unit}</div>
        </div>
      `).join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});


let currentIndex = 0;

function nextSlide() {
  currentIndex += 4;

  if (currentIndex >= products.length) {
    currentIndex = 0;
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  renderProducts(visibleProducts);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products.slice(0, 4));
  setInterval(nextSlide, 8000);
});