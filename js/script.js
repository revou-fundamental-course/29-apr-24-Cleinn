//Entering value to username and option

let nameInput = document.getElementById('input-name')

document.getElementById('send').addEventListener("click", function() {
    const nama =nameInput.value

    if (nama == "") {
        document.getElementById('error-text').innerHTML = "Please enter your name."
    }
    else {
        document.getElementById('error-text').innerHTML = ""
    }
})

let optionInput = document.getElementById('option')

document.getElementById('send').addEventListener("click", function() {
    const option =optionInput.value

    if (option == "select") {
        document.getElementById('error-text3').innerHTML = "Please select an option."
    }
    else {
        document.getElementById('error-text3').innerHTML = ""
    }
})

let emailInput = document.getElementById('input-email')

document.getElementById('send').addEventListener("click", function() {
    const email =emailInput.value

    if (email == "") {
        document.getElementById('error-text2').innerHTML = "Please enter an email address."
    }
    else {
        document.getElementById('error-text2').innerHTML = ""
    }
})

//Image Slider

const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", InitializeSlider);

function InitializeSlider(){
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
     
}
function showSlide(index) {
    if (index >= slides.length ) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

//Nav Scroll

function scrollToSection(sectionId) { 
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); 
} 

