
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    document.querySelector('.nav-links.show').style.transition = 'opacity 2.5s';
    document.querySelector('.nav-links.show').style.opacity = '1';
  });

// Gradually show the hamburger element by changing its opacity to 1 after 0.1 second
setTimeout(() => {
    document.querySelector('.hamburger').style.transition = 'opacity 2.5s';
    document.querySelector('.hamburger').style.opacity = '1';
}, 100);





// Intersection Observerでスクロール時にフェードイン
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });
