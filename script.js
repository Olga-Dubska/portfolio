// Jednoduchý parallax efekt na scroll
/*window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const layers = document.querySelectorAll(".parallax-layer");

  layers.forEach((layer, index) => {
    const depth = (index + 1) * 3; // čím nižší vrstva, tím větší posun
    const movement = -(scrolled * depth) / 100;
    layer.style.transform = `translateY(${movement}px)`;
  });
});
*/

// Texty, které se budou střídat
const phrases = [
  "Tvořím projekty na míru vašim potřebám",
  "Propojuji kreativitu s funkčním designem",
  "Prezentuji zkušenosti z reálných projektů",
  "Čerpám z praxe v e-commerce prostředí",
  "Ovládám grafiku pro online i offline svět",
  "Navrhuji UX, které vtáhne uživatele",
];

let index = 1;
const textElement = document.querySelector(".intro-text");

function rotateText() {
  // Změní text s jemným efektem zmizení/zobrazení
  textElement.classList.add("fade-out");
  setTimeout(() => {
    textElement.textContent = phrases[index];
    textElement.classList.remove("fade-out");
    index = (index + 1) % phrases.length;
  }, 400);
}

setInterval(rotateText, 2500);

// navbar zmizeni pri scrollovani
let lastScrollTop = 0;
const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.style.opacity = "0";
    navbar.style.pointerEvents = "none";
  } else {
    navbar.style.opacity = "1";
    navbar.style.pointerEvents = "auto";
  }

  lastScrollTop = currentScroll;
});
