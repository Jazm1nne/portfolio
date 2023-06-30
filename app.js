window.addEventListener('scroll', () => {
    const targetElement = document.querySelector('.my-image');
    const section = document.querySelector('#about');
    const sectionTop = section.offsetTop + 500;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
  
    if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
      targetElement.classList.add('appear');
    } else {
      targetElement.classList.remove('appear');
    }
  });
  