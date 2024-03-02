let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
  // Oculta todos os slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Garante que o índice do slide esteja dentro dos limites
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Exibe o slide atual
//   slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

setInterval(nextSlide, 3000); // Altera para o próximo slide a cada 3 segundos

showSlide(slideIndex);
