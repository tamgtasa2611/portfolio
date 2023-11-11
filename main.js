let navElement = document.querySelector("nav");
let aboutElement = document.getElementById("#about");
let skillElement = document.getElementById("#skills");
let projectElement = document.getElementById("#projects");
let contactElement = document.getElementById("#contacts");
let skillsItems = document.querySelectorAll(".skill-name");
const myCarouselElement = document.querySelector("#myCarousel");
let listMenu = document.querySelector(".bi-list");
let listDropdown = document.querySelector(".list-dropdown");
let closeBtn = document.querySelector(".close-btn");
let navItems = document.querySelectorAll(".nav-item");
let menu = document.getElementById("#menu");

//List menu
listMenu.onclick = function () {
  listDropdown.classList.remove("d-none");
  listDropdown.style.animation = "rightToLeft 0.6s";
};

navItems.forEach((item) => {
  item.onclick = function () {
    listDropdown.style.animation = "";
    listDropdown.style.animation = "rightOut 800ms";
    setTimeout(() => {
      listDropdown.classList.add("d-none");
    }, 300);
  };
});

window.onclick = function (event) {
  if (event.target != listMenu) {
    if (event.target != listDropdown) {
      listDropdown.style.animation = "";
      listDropdown.style.animation = "rightOut 1s";
      setTimeout(() => {
        listDropdown.classList.add("d-none");
      }, 300);
    }
  }
};

//add nav bar background when scroll down
window.onscroll = function () {
  if (window.scrollY >= 10) {
    navElement.classList.add("bg-blue-4");
    navElement.classList.add("bsh");
  } else {
    navElement.classList.remove("bg-blue-4");
    navElement.classList.remove("bsh");
  }
};

window.onload = function () {
  window.scrollTo(0, 0);
};

//about me carousel
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
});

//ScrollReveal
var fadeIn = {
  duration: 1400,
  delay: 100,
  easing: "ease",
};
var fadeTop = {
  distance: "10%",
  origin: "top",
};
var fadeLeft = {
  distance: "10%",
  origin: "left",
};
var fadeRight = {
  distance: "10%",
  origin: "right",
};
var fadeBottom = {
  distance: "40%",
  origin: "bottom",
};

//ABOUT
ScrollReveal().reveal(".about", fadeIn);
ScrollReveal().reveal(".about", fadeBottom);
//SKILLS
ScrollReveal().reveal(".skills", fadeIn);
ScrollReveal().reveal(".skills", fadeBottom);

//PROJECTS
ScrollReveal().reveal(".projects", fadeIn);
ScrollReveal().reveal(".projects", fadeBottom);

//CONTACTS
ScrollReveal().reveal(".contacts", fadeIn);
ScrollReveal().reveal(".contacts", fadeBottom);

//skills item img
skillsItems.forEach((item) => {
  item.onmouseover = () => {
    item.querySelector(".item-name").classList.add("visible");
    item.querySelector(".item-name").classList.remove("hidden");
  };
  item.onmouseout = () => {
    item.querySelector(".item-name").classList.remove("visible");
    item.querySelector(".item-name").classList.add("hidden");
  };
});
