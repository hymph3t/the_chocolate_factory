document.getElementById('feedbackForm').addEventListener('submit', function(event) {
     event.preventDefault();
   
     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var message = document.getElementById('message').value;
   
     // Здесь будет код для отправки данных на сервер
   
     alert('Сообщение отправлено!');
     this.reset();
});


document.addEventListener('DOMContentLoaded', function() {
    var headerBurger = document.querySelector('.header_burger');
    var headerNav = document.querySelector('.header_nav');
    
    headerBurger.addEventListener('click', function(event) {
        headerBurger.classList.toggle('active');
        headerNav.classList.toggle('active');
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("gallery-item");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}