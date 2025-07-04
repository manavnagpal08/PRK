// Initialize AOS animations
AOS.init();

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Typing animation
const typedText = document.getElementById('typed-text');
const messages = [
  "Turning ideas into impact 💡",
  "Exploring AI & Data Science 🚀",
  "Designing creative digital solutions 🎨"
];

let msgIndex = 0;
let charIndex = 0;

function type() {
  if (!typedText) return;

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
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) {
    type();
  }
});
