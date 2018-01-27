console.log('main.js connected!');

const current = document.querySelector('#current');
const images = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set first image opacity
images[0].style.opacity = opacity;

images.forEach(image => {
  image.addEventListener('click', e => {
    // Reset opacity of all images
    images.forEach(image => (image.style.opacity = 1));

    // change current image to clicked src
    current.src = e.target.src;

    // add fadeIn
    current.classList.add('fade-in');

    // remove fadeIn class to animation happens
    setTimeout(() => {
      current.classList.remove('fade-in');
    }, 500);

    // change opacity
    e.target.style.opacity = opacity;
  });
});
