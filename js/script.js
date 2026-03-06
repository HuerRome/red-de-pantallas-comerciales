"use strict";

// Punto de entrada
document.addEventListener("DOMContentLoaded", () => {
  // JS listo para usar
});

const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

let index = 0;

function nextSlide(){

    index++;

    if(index >= totalSlides){
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide,10000);
