// Hamburger Menu

var openMenu = document.querySelector("#menu-bar");
var closeMenu = document.querySelector(".close");
var hamburgerMenu = document.querySelector(".header__nav-menu");

openMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "block";
  hamburgerMenu.style.top = "0";
});

closeMenu.addEventListener("click", () => {
  hamburgerMenu.style.top = "-100vh";
});

// Contact Modal

var openModal = document.querySelector(".open-modal");
var closeModal = document.querySelector(".modal-close");
var screenModal = document.querySelector(".screen-modal");
var backModal = document.querySelector(".modal-back");
var sendModal = document.querySelector(".send-modal");

openModal.addEventListener("click", () => {
  screenModal.style.display = "block";
  backModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  screenModal.style.display = "none";
  backModal.style.display = "none";
});

sendModal.addEventListener("click", () => {
  screenModal.style.display = "none";
  backModal.style.display = "none";
});

// Dark Theme

var openDark = document.querySelector(".dark-mode");

openDark.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark-theme");
});
