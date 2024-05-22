import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const MAX_SLIDES = 3;

const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector("nav");
const header = document.querySelector("header");
const track = document.querySelector(".track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const card = document.querySelector(".testimonial-card");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navbar.classList.toggle("mobile");
  navbar.classList.toggle("hidden");
  header.classList.toggle("mobile");
  setTimeout(() => navbar.classList.toggle("opacity-100"), 10);
});

nextBtn.addEventListener("click", () => {
  track.scrollLeft +=
    card.offsetWidth + (track.offsetWidth - card.offsetWidth) / 2;
});

prevBtn.addEventListener("click", () => {
  track.scrollLeft -=
    card.offsetWidth + (track.offsetWidth - card.offsetWidth) / 2;
});
