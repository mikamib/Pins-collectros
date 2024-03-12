document.addEventListener("DOMContentLoaded", function () {
  var scrollImage = document.getElementById("scrollImage");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    var triggerPosition = 1300;

    if (scrollPosition > triggerPosition) {
      scrollImage.style.opacity = 1;
    } else {
      scrollImage.style.opacity = 0;
    }
  });
  var scrollImage2 = document.getElementById("b");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    var triggerPosition = 1300;

    if (scrollPosition > triggerPosition) {
      scrollImage2.style.opacity = 1;
    } else {
      scrollImage2.style.opacity = 0;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollImage3 = document.getElementById("scrollImage3");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    var triggerPosition = 1900;

    if (scrollPosition > triggerPosition) {
      scrollImage3.style.opacity = 1;
    } else {
      scrollImage3.style.opacity = 0;
    }
  });
  var scrollImage4 = document.getElementById("scrollImage4");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    var triggerPosition = 1900;

    if (scrollPosition > triggerPosition) {
      scrollImage4.style.opacity = 1;
    } else {
      scrollImage4.style.opacity = 0;
    }
  });
});
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new filterizr(".portfolio-elements", options);

let filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});
