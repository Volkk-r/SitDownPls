const swiper = new Swiper('.banner__swiper', {

  loop: true,


  pagination: {
    el: '.banner__pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }

});

const specialSlider = new Swiper('.special__swiper', {

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,

  navigation: {
    nextEl: '.special__btn-next',
    prevEl: '.special__btn-prev',
  },

  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    700: { slidesPerView: 2, slidesPerGroup: 1 },
    980: { slidesPerView: 3, slidesPerGroup: 1 },
    1360: { slidesPerView: 'auto', slidesPerGroup: 3 },
  },
});

const usefulSlider = new Swiper('.useful__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,

  navigation: {
    nextEl: '.useful__btn-next',
    prevEl: '.useful__btn-prev',
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    580: { slidesPerView: 2, spaceBetween: 16 },
    701: { slidesPerView: 2, spaceBetween: 32 },
    981: { slidesPerView: 3 },
    1200: { slidesPerView: 2 },
  },
});

const sliderCatalog = new Swiper('.catalog__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,
  allowTouchMove: false,

  grid: {
    rows: 3,
    fill: 'row',
  },

  pagination: {
    el: '.catalog__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      grid: { rows: 3 },
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
      grid: { rows: 3 },
    },
    980: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      grid: { rows: 3 },
    },
  },
});

const swiperSimilar = new Swiper('.product__swiper', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 32,

  navigation: {
    nextEl: '.product__btn-next',
    prevEl: '.product__btn-prev',
  },

  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 16 },
    580: { slidesPerView: 2 },
    700: { slidesPerView: 2, spaceBetween: 32 },
    900: { slidesPerView: 3 },
    1300: { slidesPerView: 4 },
  },
})

const swiperSmall = new Swiper('.product__img-small', {
  spaceBetween: 38,
  slidesPerView: 4,
  freeMode: false,
  watchSlidesProgress: true,

  breakpoints: {
    300: { direction: 'horizontal', spaceBetween: 38, slidesPerView: 2 },
    450: { direction: 'horizontal', spaceBetween: 38, slidesPerView: 3 },
    580: { direction: 'vertical', spaceBetween: 25, slidesPerView: 4 },
    980: { direction: 'horizontal', spaceBetween: 38, slidesPerView: 3 }
  },
});

const swiperModal = new Swiper('.modal-product__img-small-swiper', {
  spaceBetween: 78,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.modal-product__btn-next',
    prevEl: '.modal-product__btn-prev',
  },

  breakpoints: {
    300: { slidesPerView: 1 },
    650: { slidesPerView: 1.5 },
    980: { slidesPerView: 3 },
    1360: { slidesPerView: 3 },
  },
});
