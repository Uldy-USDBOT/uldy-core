// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(toggle && links) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({top: top, behavior: 'smooth'});
      }
    });
  });

  // Navbar background on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
});
