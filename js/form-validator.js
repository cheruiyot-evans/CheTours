// js/form-validator.js
// Lightweight client-side validation for Contact form and Newsletter

export function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]');
    const email = contactForm.querySelector('[name="email"]');
    const message = contactForm.querySelector('[name="message"]');

    let valid = true;
    // simple required checks
    [name, email, message].forEach((el) => {
      if (!el.value.trim()) {
        valid = false;
        el.setAttribute('aria-invalid', 'true');
        el.nextElementSibling &&
          (el.nextElementSibling.textContent = 'Required.');
      } else {
        el.setAttribute('aria-invalid', 'false');
        el.nextElementSibling && (el.nextElementSibling.textContent = '');
      }
    });

    // email pattern
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailRe.test(email.value)) {
      valid = false;
      email.setAttribute('aria-invalid', 'true');
      email.nextElementSibling &&
        (email.nextElementSibling.textContent = 'Enter a valid email.');
    }

    if (valid) {
      // Simulated submission (since static site). Show success message.
      contactForm.querySelector('.form-status').textContent =
        'Thanks — message queued (demo).';
      contactForm.reset();
    } else {
      contactForm.querySelector('.form-status').textContent =
        'Please fix errors.';
    }
  });
}
