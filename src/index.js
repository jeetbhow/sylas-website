import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector("nav");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  setTimeout(() => navbar.classList.toggle("opacity-100"), 10);
  hamburger.classList.toggle("open");
  navbar.classList.toggle("mobile");
  navbar.classList.toggle("hidden");
  header.classList.toggle("mobile");
});
