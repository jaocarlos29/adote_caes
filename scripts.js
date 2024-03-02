// Declaração de variáveis globais
let slideIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-image'); // Seleciona todos os elementos com a classe 'carousel-image'

// Função para exibir o slide correspondente ao índice fornecido
function showSlide(index) {
    // Oculta todos os slides
    slides.forEach(slide => {
        slide.style.display = 'none'; // Define o estilo de exibição como 'none' para ocultar o slide
    });

    // Garante que o índice do slide esteja dentro dos limites
    if (index >= slides.length) {
        slideIndex = 0; // Se o índice ultrapassar o número de slides, volta ao primeiro slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Se o índice for menor que 0, volta ao último slide
    }

    // Exibe o slide atual
    slides[slideIndex].style.display = 'block'; // Define o estilo de exibição como 'block' para mostrar o slide
}

// Função para avançar para o próximo slide
function nextSlide() {
    slideIndex++; // Incrementa o índice do slide para avançar para o próximo slide
    showSlide(slideIndex); // Chama a função showSlide() para exibir o próximo slide
}

// Função para retroceder para o slide anterior
function prevSlide() {
    slideIndex--; // Decrementa o índice do slide para retroceder para o slide anterior
    showSlide(slideIndex); // Chama a função showSlide() para exibir o slide anterior
}

// Configura um intervalo de tempo para alterar automaticamente para o próximo slide a cada 5 segundos
setInterval(nextSlide, 5000); // Chama a função nextSlide() a cada 5000 milissegundos (5 segundos)

// Evento 'onload' que é acionado quando a página é carregada
window.onload = function() {
    showSlide(slideIndex); // Chama a função showSlide() para exibir o slide atual quando a página é carregada
};
