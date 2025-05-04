window.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carouselImages');
    let currentIndex = 0;

    function showImage(index) {
        const offset = -window.innerWidth * index;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Tornar as funções acessíveis no escopo global
    window.nextImage = function () {
        currentIndex = (currentIndex + 1) % 4;
        showImage(currentIndex);
    };

    window.prevImage = function () {
        currentIndex = (currentIndex - 1 + 4) % 4;
        showImage(currentIndex);
    };
});