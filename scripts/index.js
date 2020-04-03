function copyrightYear() {
    'use strict';
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

copyrightYear();

var current = 0,
    slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);