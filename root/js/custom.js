document.addEventListener("DOMContentLoaded", function() {
    const slideRight = document.querySelector('.right-slide');
    const slideLeft = document.querySelector('.left-slide');
    const upButton = document.querySelector('.up-button');
    const downButton = document.querySelector('.down-button');
    const slidesLength = slideRight.querySelectorAll('.slide-image').length;

    let activeSlideIndex = 0;
    let isTransitioning = false;
    let accumulatedScroll = 0;
    const scrollThreshold = 100;


    for (let i = 0; i < slidesLength; i++) {
        const cloneRight = slideRight.children[i].cloneNode(true);
        const cloneLeft = slideLeft.children[i].cloneNode(true);
        slideRight.appendChild(cloneRight);
        slideLeft.appendChild(cloneLeft);
    }

    slideRight.style.top = `-${slidesLength * 100}%`;
    slideLeft.style.top = `-${slidesLength * 100}%`;

    const changeSlide = (direction) => {
        if (isTransitioning) return;

        isTransitioning = true;

        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex >= slidesLength) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1;
            }
        }


        slideRight.style.transition = 'none';
        slideLeft.style.transition = 'none';


        slideRight.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
        slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}%)`;


        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    };


    function activateSlider() {
        upButton.addEventListener('click', () => changeSlide('up'));
        downButton.addEventListener('click', () => changeSlide('down'));

        // Aggiungi l'evento di scorrimento sullo slider solo per risoluzioni inferiori a 992px
        if (window.innerWidth < 992) {
            const sliderContainer = document.querySelector('.slider-container');

            sliderContainer.addEventListener('wheel', (event) => {
                event.preventDefault(); // Impedisce al browser di eseguire lo scrolling predefinito

                accumulatedScroll += event.deltaY;

                if (Math.abs(accumulatedScroll) >= scrollThreshold) {
                    if (accumulatedScroll > 0) {
                        changeSlide('down');
                    } else {
                        changeSlide('up');
                    }
                    accumulatedScroll = 0;
                }
            });
        }
    }


    activateSlider();
});
