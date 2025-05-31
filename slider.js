const track = document.querySelector('.slider-section');
const images = document.querySelectorAll('.slider-section img').length;

const imagesPerSlide = 3;
const imageWidth = 490; // width of each image
const slideWidth = imageWidth * imagesPerSlide;

let index = 0;

setInterval(() => {
    index++;
    if (index >= Math.ceil(images / imagesPerSlide)) {
        index = 0;
    }
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}, 2000);
