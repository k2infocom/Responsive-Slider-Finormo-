var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
      },
    },
    autoplay:true,
  });
