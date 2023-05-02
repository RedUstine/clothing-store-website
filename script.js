
// SLIDE OR CAROUSEL CODE
let slideWrap = document.querySelector(".slide-wrap");
let slideCards = document.querySelectorAll(".slide-card");
let totalSlides = slideCards.length; //concatenation
slideWrap.style.width = totalSlides+"00vw";
let slideIndex = 0;
// camelCase - everyNewWordBeginsWithItsFirstLetterInUpperCase
// add: +, subtract: -, divide: /, mutiply: *, modulus (remainder): %
window.setInterval(function(){
    slideIndex = slideIndex % totalSlides;
    // slideWrap.style.transform = "translateX(-" + slideIndex + "00vw)";
    slideWrap.style.transform = `translateX(-${slideIndex}00vw)`;
    slideIndex = slideIndex + 2;
},2000)


// search<
{/* <script>
    
    
    
    
<script/> */}
