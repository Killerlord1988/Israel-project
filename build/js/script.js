'use strict';
$(window).on('load resize', function () {
  if ($(window).width() < 767) {
    $('.about-life__slider').slick({
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      // autoplay: true,
      appendArrows: false,
    });
  } else {
    $('.about-life__slider').filter('.slick-initialized').slick('unslick');
  }
});
