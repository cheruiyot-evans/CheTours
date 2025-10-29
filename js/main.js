// js/main.js
// Site-wide interactions: mobile nav toggle + reveal on scroll

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if (mobileNav.getAttribute('aria-hidden') === 'true') {
        mobileNav.setAttribute('aria-hidden', 'false');
      } else {
        mobileNav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Reveal-on-scroll using IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

// Destination search filter
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card) => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? 'block' : 'none';
    });
  });
}

// blog
// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
function handleScroll() {
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll(); // Trigger once on load

// Simple form feedback
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = 'Sending...';
      setTimeout(() => {
        status.textContent = '✅ Message sent successfully!';
        form.reset();
      }, 1500);
    });
  }
});
