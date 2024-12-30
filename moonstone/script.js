document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav ul');
  
    // Toggle navigation menu on hamburger click
    navToggle?.addEventListener('click', () => {
      navMenu?.classList.toggle('show');
    });
  
    // Close menu when clicking outside the nav
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
  
    // Handle image loading errors (provide a placeholder if the original fails)
    document.querySelectorAll('.character-image').forEach((img) => {
      img.onerror = function () {
        this.src = '/api/placeholder/400/300';
        this.alt = 'Character image placeholder';
      };
    });

    // Swipe functionality for card pack opening feel
    const characterGrid = document.querySelector('.character-grid');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    characterGrid.addEventListener('mousedown', (e) => {
      isDown = true;
      characterGrid.classList.add('active');
      startX = e.pageX - characterGrid.offsetLeft;
      scrollLeft = characterGrid.scrollLeft;
    });
  
    characterGrid.addEventListener('mouseleave', () => {
      isDown = false;
      characterGrid.classList.remove('active');
    });
  
    characterGrid.addEventListener('mouseup', () => {
      isDown = false;
      characterGrid.classList.remove('active');
    });
  
    characterGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - characterGrid.offsetLeft;
      const walk = (x - startX) * 3; // Scroll-fast
      characterGrid.scrollLeft = scrollLeft - walk;
    });
  });