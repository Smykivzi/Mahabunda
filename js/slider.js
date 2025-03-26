// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;

// function showSlide(index) {
//     if (index < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (index >= totalSlides) {
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//     }
//     document.querySelector(".slider-track").style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

showSlide(index);
