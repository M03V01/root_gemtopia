const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

const screenWidth = window.innerWidth;

// Imposta il valore di top in base alla larghezza della finestra

    slideLeft.style.top = `-${(slidesLength - 1) * 75}vh`; // Per schermi più piccoli di 1200px

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight  = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0;
        }
    }else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

let scrolling = false;
const scrollDelay = 1000; // Tempo di ritardo tra uno scroll e l'altro in millisecondi

sliderContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Impedisci lo scorrimento della pagina
    if (!scrolling) {
        scrolling = true;
        setTimeout(() => {
            scrolling = false;
        }, scrollDelay);

        const deltaY = event.deltaY;
        const direction = deltaY > 0 ? 'down' : 'up';
        changeSlide(direction);
    }
});
