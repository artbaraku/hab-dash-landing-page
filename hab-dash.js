document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // Show 4 slides at a time
    spaceBetween: 20, // Space between slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      1000: {
        slidesPerView: 3, 
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });
});
