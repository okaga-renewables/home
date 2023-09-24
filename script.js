let index = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;
let slideInterval;

// Function to start the slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        changeImage(1);
    }, 3000);
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

document.getElementById('next').addEventListener('click', () => {
    changeImage(1);
});

document.getElementById('prev').addEventListener('click', () => {
    changeImage(-1);
});

document.querySelector('.slider').addEventListener('mouseenter', stopSlideshow);
document.querySelector('.slider').addEventListener('mouseleave', startSlideshow);

function changeImage(direction) {
    images[index].style.opacity = 0; // Hide current image
    index += direction;
    if (index === totalImages) index = 0;
    if (index < 0) index = totalImages - 1;
    images[index].style.opacity = 1; // Show next/previous image
}

startSlideshow(); // Start the slideshow when the page loads
