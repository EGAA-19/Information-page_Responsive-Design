/*
$(document).ready(function(){

    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion =  (barra * 0.10);
        
        $('body').css({
            'background-position': '0 -' + posicion + 'px'
        });

    });

});
*/

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");
const slides = document.querySelectorAll(".slide");
const slidesIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
/*DESPLAZAR IMAGEN HACIA LA DERECHA*/ 

nextBtn.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slidesIcons.forEach((slidesIcons) => {
        slidesIcons.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slidesIcons[slideNumber].classList.add("active");
});


/*DESPLAZAR IMAGEN HACIA LA IZQUIERDA*/
prevBtn.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slidesIcons.forEach((slidesIcons) => {
        slidesIcons.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides -1;
    }

    slides[slideNumber].classList.add("active");
    slidesIcons[slideNumber].classList.add("active");
});

/*AUTOMATIZACION*/
var playSlider;
var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slidesIcons.forEach((slidesIcons) => {
            slidesIcons.classList.remove("active");
        });
        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slidesIcons[slideNumber].classList.add("active");
    }, 4000);
}

repeater();

/*APOYAR MOUSE Y STOP SLIDE*/
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

/*APOYAR MOUSE Y PLAY SLIDE*/
slider.addEventListener("mouseout", () => {
    repeater();
});