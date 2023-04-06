new Swiper('swiper-wrapper', {
  navigation: {
    nextEl: '.right_arrow',
    prevEl: '.left_arrow'
  },
    simulateTouch: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
  autoplay: {
    delay: 1000
  },
  speed: 300,
  }
  breackpoints: {
    320: {
      slidesPerView: 1,
    },
    786: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});