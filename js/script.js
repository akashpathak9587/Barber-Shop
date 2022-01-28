const preloader = document.querySelector('.preloader');


window.addEventListener('load', () => {
    setInterval(() => {
        if (!preloader.style.display) {
            preloader.style.display = "initial";
        }
        if (preloader.style.display) {
            preloader.style.display = "none";
        } else {
            clearInterval(load);
        }
    }, 200);
})

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        headerEl.classList.add('active');
        document.querySelector('.header .nav .button').classList.add('active');
        document.querySelector('.arrow-to-top').classList.add('active');
    }
    if (window.scrollY === 0) {
        headerEl.classList.remove('active');
        document.querySelector('.header .nav .button').classList.remove('active');
        document.querySelector('.arrow-to-top').classList.remove('active');
    }
})

const sliderBox = document.querySelectorAll('.team-wrapper-inner-box');
let slidePosition = 0;
const sliderWrapperInner = document.querySelector('.team-wrapper-inner');


const imageSlide = () => {
    sliderWrapperInner.style.transition = 'margin-left 0.3s ease';
    sliderWrapperInner.style.marginLeft = `-${34.7 * slidePosition}%`;
    slidePosition++;
    if (slidePosition === sliderBox.length - 1) {
        sliderWrapperInner.style.transition = 'none';
        slidePosition = 0;
        sliderWrapperInner.style.marginLeft = `-${34.7 * slidePosition}%`;
    }

}


setInterval(imageSlide, 5000)

const reviewBtns = document.querySelectorAll('.review-wrapper-inner-btn button');
let currentBtn = 0;
reviewBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        document.querySelector('.review-wrapper-inner').style.marginLeft = `-${50 * i}%`;
        reviewBtns[currentBtn].classList.remove('active');
        item.classList.add('active');
        currentBtn = i;
    })
})
