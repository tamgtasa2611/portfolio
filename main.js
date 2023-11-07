let navElement = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY >= 10) {
    navElement.classList.add("bg-dark");
    navElement.classList.add("bsh");
  } else {
    navElement.classList.remove("bg-dark");
    navElement.classList.remove("bsh");
  }
};
