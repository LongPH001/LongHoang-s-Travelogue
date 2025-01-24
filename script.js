document.querySelectorAll('[data-carousel]').forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector('.carousel-images');
    const images = carousel.querySelectorAll('img');
    const prevButton = carouselContainer.querySelector('.carousel-button.prev');
    const nextButton = carouselContainer.querySelector('.carousel-button.next');

    let currentIndex = 0;
    let imageWidth = images[0].clientWidth;

    // Function to update the carousel's position
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Move to the next image
    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateCarousel();
    });

    // Move to the previous image
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        updateCarousel();
    });

    // Ensure carousel resizes correctly when the window size changes
    window.addEventListener('resize', () => {
        imageWidth = images[0].clientWidth; // Update imageWidth dynamically
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});
