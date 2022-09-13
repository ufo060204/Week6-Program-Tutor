$(function() {
  console.log('Hello Bootstrap5');
});
// dropdown
$('.ham-icon').click(function(e) {
  e.preventDefault();
  $('.dropdown').toggleClass('active')
})

// Initialize Swiper
var swiper = new Swiper(".programSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
        slidesPerView: 7
    },
    992: {
        slidesPerView: 7
    }
}
});  

// Swiper
var swiper = new Swiper(".shareSwiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Initialize Swiper
var swiper = new Swiper(".programTypeSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    768: {
        slidesPerView: 6
    },
    992: {
        slidesPerView: 6
    }
}
});  

  