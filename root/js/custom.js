document.addEventListener("DOMContentLoaded", function() {
    const slideRight = document.querySelector('.right-slide');
    const slideLeft = document.querySelector('.left-slide');
    const upButton = document.querySelector('.up-button');
    const downButton = document.querySelector('.down-button');
    const slidesLength = slideRight.querySelectorAll('.slide-image').length;

    let activeSlideIndex = 0;
    let isTransitioning = false;

    // Clona tutte le slide e le posiziona correttamente
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
                activeSlideIndex = 0; // Torna alla prima slide se si è alla fine
            }
        } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1; // Torna all'ultima slide se si è all'inizio
            }
        }

        // Rimuovi le transizioni per posizionare le slide correttamente
        slideRight.style.transition = 'none';
        slideLeft.style.transition = 'none';

        // Imposta le trasformazioni per posizionare le slide
        slideRight.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
        slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}%)`;

        // Ripristina il flag di transizione dopo la fine della transizione
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    };


    function activateSlider() {
        upButton.addEventListener('click', () => changeSlide('up'));
        downButton.addEventListener('click', () => changeSlide('down'));
    }

    // Attivare lo slider per entrambe le modalità (desktop e mobile)
    activateSlider();
});
