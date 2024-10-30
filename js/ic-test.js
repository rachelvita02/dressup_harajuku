const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-image');

let currentIndex = 0;
const totalImages = images.length;

function showSlide(index) {
    const slideWidth = images[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
}

// Automatically set the correct slide width on window resize
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});
