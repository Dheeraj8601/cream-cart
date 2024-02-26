var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  centerSlide: true, // Use camelCase (centerSlide instead of centerSlide :'true')
  fade: true, // Use camelCase (fade instead of fade :'true')
  grabCursor: true, // Use camelCase (grabCursor instead of gragCursor :'true')
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: { // Use colon instead of equals sign
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
