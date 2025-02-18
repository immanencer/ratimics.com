document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav ul');

  // Toggle navigation menu on hamburger click
  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  // Close menu if clicked outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && navMenu?.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('show');
    });
  });

  // Handle broken images (fallback)
  document.querySelectorAll('.character-image').forEach((img) => {
    img.onerror = function () {
      this.src = '/api/placeholder/400/300';
      this.alt = 'Character image placeholder';
    };
  });
});
