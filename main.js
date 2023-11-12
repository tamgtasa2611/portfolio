let aboutElement = document.getElementById("#about");
let skillElement = document.getElementById("#skills");
let projectElement = document.getElementById("#projects");
let contactElement = document.getElementById("#contacts");
let contactText = document.querySelector(".contact-info");
let contactForm = document.querySelector(".contact-form");
let skillsItems = document.querySelectorAll(".skill-name");

//List menu
let listMenu = document.querySelector(".bi-list");
let listDropdown = document.querySelector(".list-dropdown");
let navItems = document.querySelectorAll(".nav-item");
let menu = document.getElementById("#menu");

listMenu.onclick = function () {
  listMenu.style.animation = "fadeOut 500ms";
  listMenu.classList.add("d-none");
  listDropdown.classList.remove("d-none");
  listDropdown.style.animation = "rightToLeft 600ms, fadeIn 500ms";
};

navItems.forEach((item) => {
  item.onclick = function () {
    listMenu.classList.remove("d-none");
    listMenu.style.animation = "fadeIn 500ms";
    listDropdown.style.animation = "";
    listDropdown.style.animation = "rightOut 1s, fadeOut 1s";
    setTimeout(() => {
      listDropdown.classList.add("d-none");
    }, 500);
  };
});

window.onclick = function (event) {
  if (event.target != listMenu) {
    if (event.target != listDropdown) {
      listMenu.classList.remove("d-none");
      listMenu.style.animation = "fadeIn 500ms";
      listDropdown.style.animation = "";
      listDropdown.style.animation = "rightOut 1s, fadeOut 1s";
      setTimeout(() => {
        listDropdown.classList.add("d-none");
      }, 500);
    }
  }
};

//add nav bar background when scroll down
let navElement = document.querySelector("nav");
window.onscroll = function () {
  if (window.scrollY >= 10) {
    navElement.classList.add("bg-blue-4");
    navElement.classList.add("bsh");
  } else {
    navElement.classList.remove("bg-blue-4");
    navElement.classList.remove("bsh");
  }
};

//carousel
const myCarouselElement = document.querySelector("#myCarousel");
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
  distance: "20%",
  origin: "left",
};
var fadeRight = {
  distance: "20%",
  origin: "right",
};
var fadeBottom = {
  distance: "10%",
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
ScrollReveal().reveal(".contact-info", fadeIn);
ScrollReveal().reveal(".contact-info", fadeLeft);
ScrollReveal().reveal(".contact-form", fadeIn);
ScrollReveal().reveal(".contact-form", fadeRight);

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

//form submit
let nameInput = document.querySelector("#name-form");
let emailInput = document.querySelector("#email");
let subjectInput = document.querySelector("#subject");
let messageInput = document.querySelector("#message");
let submitBtn = document.querySelector(".send-btn");
let date = new Date();

$("#msg-form").on("submit", function (event) {
  event.preventDefault(); // prevent reload
  submitBtn.innerText = "Sending your message...";

  var formData = new FormData(this);
  formData.append("service_id", "service_i5lafl6");
  formData.append("template_id", "template_sv89sdr");
  formData.append("user_id", "ET9Wf41T8Ynk-Oeld");

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
    type: "POST",
    data: formData,
    contentType: false, // auto-detection
    processData: false, // no need to parse formData to string
  })
    .done(function () {
      submitBtn.innerText = "Send";
      alert("Your message has been submitted!");
    })
    .fail(function (error) {
      alert("Oops... Please try again!");
    });
});
