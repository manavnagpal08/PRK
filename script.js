// script.js

AOS.init();

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Typing Animation
const typedText = document.getElementById('typed-text');
const messages = [
  "Turning Ideas into Impact 💡",
  "Exploring AI & Data Science 🚀",
  "Building Smart, Creative Tech 🧠",
];
let msgIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < messages[msgIndex].length) {
    typedText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 70);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typedText) {
    type();
  }
});
