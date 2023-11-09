let navElement = document.querySelector("nav");
let aboutElement = document.getElementById("#about");
let skillElement = document.getElementById("#skills");
let projectElement = document.getElementById("#projects");
let contactElement = document.getElementById("#contacts");

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
  reset: true,
  delay: 100,
  interval: 600,
  easing: "ease",
};
var fadeTop = {
  distance: "20%",
  origin: "top",
};
var fadeLeft = {
  distance: "20%",
  origin: "left",
};
var fadeRight = {
  distance: "20%",
  origin: "right",
};
var fadeBottom = {
  distance: "20%",
  origin: "bottom",
};

//ABOUT
ScrollReveal().reveal(".about", fadeIn);
ScrollReveal().reveal(".about", fadeLeft);
//SKILLS
ScrollReveal().reveal(".skills", fadeIn);
ScrollReveal().reveal(".skills", fadeRight);

//PROJECTS
ScrollReveal().reveal(".projects", fadeIn);
ScrollReveal().reveal(".projects", fadeLeft);

//CONTACTS
ScrollReveal().reveal(".contacts", fadeIn);
ScrollReveal().reveal(".contacts", fadeRight);
