// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

// Keep the footer year current
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
