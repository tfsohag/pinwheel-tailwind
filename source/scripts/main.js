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
    // remove active class
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    tabElements.forEach((tabElement) =>
      tabElement.classList.remove("active-tab")
    );

    // add active clas
    tab.classList.add("active-tab");
    tabElements[index].classList.add("active-tab");
  });
});

// modal components
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");
const modalOpenBtn = document.getElementById("modal-open-button");
const modalCloseBtn = document.getElementById("modal-close-button");

// modal open button
modalOpenBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalContainer.classList.remove("hidden");
});

// modal close button
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalContainer.classList.add("hidden");
});

// Close the modal click on the modal container
modalContainer.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalContainer.classList.add("hidden");
});

// Accordion component
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.children);
    const content = button.nextElementSibling;
    if (content.classList.contains("hidden")) {
      console.log(button.children[0]);
      content.classList.remove("hidden", "h-0");
      content.classList.add("opacity-100", "h-auto");
      button.children[0].classList.add("rotate-180");
    } else {
      content.classList.remove("opacity-100", "h-auto");
      content.classList.add("opacity-0", "h-0", "overflow-hidden", "hidden");
      button.children[0].classList.remove("rotate-180");
    }
  });
});

// toast component
const showToast = () => {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");


  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
};
const toastButton = document.getElementById("toast-button");
toastButton.addEventListener("click", () => {
  showToast();
});
