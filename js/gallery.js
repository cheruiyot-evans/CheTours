// js/gallery.js
// Simple lightbox modal for gallery images (keyboard accessible)

export function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = modal && modal.querySelector('img');
  const closeBtn = modal && modal.querySelector('.close-btn');

  function open(imgSrc, alt) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalImg.src = imgSrc;
    modalImg.alt = alt;
    document.body.style.overflow = 'hidden';
    modal.focus();
  }
  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  items.forEach((it) => {
    it.addEventListener('click', (e) => {
      e.preventDefault();
      open(it.href, it.dataset.alt || '');
    });
    it.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(it.href, it.dataset.alt || '');
      }
    });
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}
