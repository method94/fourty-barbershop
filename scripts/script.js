window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* Script for burger menu bar event */
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

// Menü auf-/zuklappen beim Klick auf Burger
burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Menü schließen, wenn ein Menüpunkt geklickt wird (nur mobil relevant)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});