"use strict";

// Punto de entrada
document.addEventListener("DOMContentLoaded", () => {
  // JS listo para usar
});






"use strict";

/* ==========================================
   DATA
========================================== */

const products = [
  { id: 1, name: "Queso Cremoso", price: 2999, discount: 7, image: "assets/img/1.jpg" },
  { id: 2, name: "Leche Entera", price: 2999, discount: 7, image: "assets/img/2.jpg" },
  { id: 3, name: "Pepsi 2L", price: 2999, discount: 7, image: "assets/img/3.jpg" },
  { id: 4, name: "Vino Malbec", price: 2999, discount: 7, image: "assets/img/4.jpg" },
  { id: 5, name: "Azúcar", price: 2999, discount: 7, image: "assets/img/5.jpg" }
];

let currentProducts = [...products];
let interval = null;

/* ==========================================
   RENDER
========================================== */

function renderProducts() {
  const featuredContainer = document.getElementById("featured");
  const gridContainer = document.getElementById("productGrid");

  featuredContainer.innerHTML = "";
  gridContainer.innerHTML = "";

  const featured = currentProducts[0];
  const gridItems = currentProducts.slice(1, 5);

  // Render featured
  featuredContainer.innerHTML = `
    <div class="featured-product">
      <img src="${featured.image}" alt="${featured.name}">
      <h1 class="product-title">${featured.name}</h1>
      <div class="price-box">$ ${featured.price}</div>
    </div>
    <div class="discount-badge">
      ${featured.discount}% OFF
    </div>
  `;

  // Render grid
  gridItems.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("grid-item");

    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="grid-title">${product.name}</div>
      <div class="price-stack">
        <div class="small-price">$ ${product.price}</div>
        <div class="small-price">$ ${product.price}</div>
        <div class="small-price">$ ${product.price}</div>
      </div>
      <div class="grid-discount">${product.discount}%</div>
    `;

    gridContainer.appendChild(item);
  });
}

/* ==========================================
   ROTACIÓN TIPO SIGNAGE
========================================== */

function rotateProducts() {
  // Rotación infinita tipo carrusel
  currentProducts.push(currentProducts.shift());
  renderProducts();
}

/* ==========================================
   INIT
========================================== */

function initCarousel() {
  renderProducts();

  interval = setInterval(() => {
    requestAnimationFrame(() => {
      rotateProducts();
    });
  }, 4000);

  // Pause on hover
  document.querySelector(".signage").addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  document.querySelector(".signage").addEventListener("mouseleave", () => {
    initCarousel();
  });
}

/* ==========================================
   START
========================================== */

document.addEventListener("DOMContentLoaded", initCarousel);

