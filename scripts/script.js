
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
