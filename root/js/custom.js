document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slideRight = document.querySelector('.right-slide');
    const slideLeft = document.querySelector('.left-slide');
    const upButton = document.querySelector('.up-button');
    const downButton = document.querySelector('.down-button');
    const slidesLength = slideRight.querySelectorAll('.slide-image').length;

    let activeSlideIndex = 0;

    slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

    const changeSlide = (direction) => {
        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1;
            }
        }

        const slideHeight = slideRight.clientHeight;
        slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
    };

    function activateSlider() {
        upButton.addEventListener('click', () => changeSlide('up'));
        downButton.addEventListener('click', () => changeSlide('down'));
    }

    // Attivare lo slider per entrambe le modalità (desktop e mobile)
    activateSlider();
});
