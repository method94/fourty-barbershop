
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
      navbar.classList.add('navbar--transparent');
    } else {
      navbar.classList.remove('navbar--transparent');
    }
  });



/* Script for burger menu bar event */
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');

  if (burger.classList.contains('active')) {
    burger.textContent = '✕';  // X als Zeichen
  } else {
    burger.textContent = '☰';  // Burger Icon
  }
});

const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    logo.classList.add('hidden');
  } else {
    logo.classList.remove('hidden');
  }
});

const menuLinks = navMenu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Menü schließen
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    // Burger-Icon wieder auf ☰ setzen
    burger.textContent = '☰';
  });
});

/* SLIDESHOW */

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
      type    : 'loop',
      perPage : 1,
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      pagination: true,
      arrows: true,
    }).mount();
  });

    document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('.ourStoryText');
    if (!paragraph) return;

    const fullText = paragraph.getAttribute('data-text');
    paragraph.textContent = ''; // leer machen zum Start

    let index = 0;

    function type() {
      if (index < fullText.length) {
        paragraph.textContent += fullText.charAt(index);
        index++;
        setTimeout(type, 10); // Tippen-Geschwindigkeit (30ms pro Buchstabe)
      }
    }

    // Intersection Observer starten, sobald sichtbar wird
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          type();
          observer.disconnect(); // nur einmal tippen
        }
      });
    }, {
      threshold: 0.5 // 50% sichtbar
    });

    observer.observe(paragraph);
  });