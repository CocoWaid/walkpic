const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.querySelectorAll('img'));
let currentImageIndex = 0;

const showImage = (index) => {
  images.forEach((image, imageIndex) => {
    image.style.display = imageIndex === index ? 'block' : 'none';
  });
};

const prevImage = () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
};

const nextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
};

const prev
