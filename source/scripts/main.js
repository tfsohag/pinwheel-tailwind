// import Swiper from '../plugins/swiper/swiper-bundle.js';

(function () {
  "use strict";

  // Preloader js
  // window.addEventListener("load", (e) => {
  //   document.querySelector(".preloader").style.display = "none";
  // });

  // swiper slider
  new Swiper(".swiper", {
    loop: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class=${className}>${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();

// for tab component
const tabs = document.querySelectorAll(".tabs>li");
const tabElements = document.querySelectorAll(".tab-element");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    console.log(tabs);
    // remove active class from all tabs and tab contents
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    tabElements.forEach((tabElement) =>
      tabElement.classList.remove("active-tab")
    );

    // add active class to clicked tab and corresponding tab content
    tab.classList.add("active-tab");
    tabElements[index].classList.add("active-tab");
  });
});

// modal compon
// Get the modal elements
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-container");
const modalOpenBtn = document.getElementById("modal-open-button");
const modalCloseBtn = document.getElementById("modal-close-button");

// modal open button
modalOpenBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
});

// modal close button
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

// Close the modal click on the modal container
modalOverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});
