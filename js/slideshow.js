$(document).ready(function() {
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
        var slides = document.getElementsByClassName("slide");
        slides[slideIndex].style.display = "none";
        slideIndex = (slideIndex + 1) % slides.length;
        console.log(slideIndex);
        console.log(slides.length);
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 2000);
    }
});
