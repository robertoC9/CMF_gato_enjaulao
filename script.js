// Animación simple del logo flotante
document.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo');
  if (window.scrollY > 50) {
    logo.style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    logo.style.background = 'rgba(0, 0, 0, 0.6)';
  }
});

// Smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
