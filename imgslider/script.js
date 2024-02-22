
var slideIndex = 1;
var isPlaying = true; 
var slideshowInterval;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
     
    if (isPlaying) {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);  
    }
}

function togglePlayPause() {
    var playPauseBtn = document.querySelector('.playPause');
    if (isPlaying) {
        clearInterval(slideshowInterval);
        playPauseBtn.textContent = 'Play';
    } else {
        slideshowInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

const player = document.querySelector('.fake-player');

function clickHandler () { 
    const buttons = Array.from(this.children);
    buttons.forEach(button => button.classList.toggle('hidden'))
};

player.addEventListener('click', clickHandler);
