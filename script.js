// Add hover effect to all images
document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; // Slight zoom-in
        image.style.boxShadow = '0 0 20px gold, 0 0 40px goldenrod'; // Enhance glow
        image.style.transition = 'transform 0.3s, box-shadow 0.3s'; // Smooth transition
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Reset zoom
        image.style.boxShadow = '0 0 10px gold, 0 0 20px goldenrod'; // Reset glow
    });
});
