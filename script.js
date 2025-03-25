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
let startRotation = false;

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

var r = document.querySelector(":root");

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.style.opacity = "0";
    navbar.style.pointerEvents = "none";
  } else {
    navbar.style.opacity = "1";
    navbar.style.pointerEvents = "auto";
  }

  // animace loga
  if (currentScroll > 442 * 1) {
    r.style.setProperty("--logo-opacity", "1");
  } else {
    r.style.setProperty("--logo-opacity", "0");
  }

  if (currentScroll > 702 * 1) {
    r.style.setProperty("--logo-position", "absolute");
    r.style.setProperty(
      "--logo-animation-left",
      "intro-logo-left-start 0.5s ease-in forwards"
    );
    r.style.setProperty(
      "--logo-animation-right",
      "intro-logo-right-start 0.5s ease-in forwards"
    );
  } else {
    r.style.setProperty("--logo-position", "fixed");
    r.style.setProperty(
      "--logo-animation-left",
      "intro-logo-left-end 0.2s ease-out forwards"
    );
    r.style.setProperty(
      "--logo-animation-right",
      "intro-logo-right-end 0.2s ease-out forwards"
    );
  }

  lastScrollTop = currentScroll;

  let offsetWhite = currentScroll * 0.3;

  r.style.setProperty(
    "--hill-white-transform",
    "translate3d(0px, -" + offsetWhite + "px, 0px)"
  );

  let offsetHillLeft1 = currentScroll * 0.25;

  r.style.setProperty(
    "--hill-left-1-transform",
    "translate3d(0px, -" + offsetHillLeft1 + "px, 0px)"
  );

  let offsetHillRight1 = currentScroll * 0.15;

  r.style.setProperty(
    "--hill-right-1-transform",
    "translate3d(0px, -" + offsetHillRight1 + "px, 0px)"
  );

  let offsetHillLeft2 = currentScroll * 0.1;

  r.style.setProperty(
    "--hill-left-2-transform",
    "translate3d(0px, -" + offsetHillLeft2 + "px, 0px)"
  );

  let offsetHillRight2 = currentScroll * 0.05;

  r.style.setProperty(
    "--hill-right-2-transform",
    "translate3d(0px, -" + offsetHillRight2 + "px, 0px)"
  );
});
