let navElement = document.querySelector("nav");
let aboutElement = document.getElementById("#about");
let skillElement = document.getElementById("#skills");
let projectElement = document.getElementById("#projects");
let contactElement = document.getElementById("#contacts");
let skillsItems = document.querySelectorAll(".skill-name");
const myCarouselElement = document.querySelector("#myCarousel");

//about me carousel
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
});
//add nav bar background when scroll down
window.onscroll = function () {
  if (window.scrollY >= 10) {
    navElement.classList.add("bg-dark");
    navElement.classList.add("bsh");
  } else {
    navElement.classList.remove("bg-dark");
    navElement.classList.remove("bsh");
  }
};

window.onload = function () {
  window.scrollTo(0, 0);
};

//ScrollReveal
var fadeIn = {
  duration: 1400,
  delay: 100,
  easing: "ease",
  reset: "true",
  interval: 600,
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
