// Pre Loader
var preLoader = document.querySelector(".pre-loader");
window.addEventListener("load", vanish);
function vanish() {
  preLoader.classList.add("disppear");
}

// Back to top Button && Sticky Nav
var backToTopButton = document.getElementById("back-to-top");
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.opacity = "1";
    navbar.classList.add("sticky-nav");
  } else {
    backToTopButton.style.opacity = "0";
    navbar.classList.remove("sticky-nav");
  }
}
backToTopButton.addEventListener("click", topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Menu Icon Change Toggle
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", () => {
  let menuIcon = document.querySelector(".menu-icon");
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.add("fa-times");
    menuIcon.classList.remove("fa-bars");
  } else if (menuIcon.classList.contains("fa-times")) {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
});

// Video Play OnClick
let videoPlayIcon = document.querySelector(".play-icon");
videoPlayIcon.addEventListener("click", () => {
  let video = document.querySelector(".video");
  video.style.zIndex = 1;
  video.style.opacity = 1;
  video.play();
  let videoImage = document.querySelector(".video-img");
  videoImage.style.display = "none";
  videoPlayIcon.style.display = "none";
});

// Swiper JS Testimonial Carousel
var swiper = new Swiper(".swiper-container-testimonial", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    992: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});
