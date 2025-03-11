$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '5px'
        }, 'slow');
    });
});


const textElement = document.getElementById('text');
let currentImageIndex = 0;

function showNextImage() {
    // Remove a classe 'show' da imagem atual
    images[currentImageIndex].classList.remove('show');

    // Atualiza o índice da imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Exibe a próxima imagem
    images[currentImageIndex].classList.add('show');

    // Faz a transição suave do texto
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = texts[currentImageIndex];
        textElement.style.opacity = 1;
    }, 500);
}

// Troca a imagem e o texto a cada 3.5 segundos
setInterval(showNextImage, 3500);