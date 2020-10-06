'use strict';
$(window).on('load resize', function () {
  if ($(window).width() <= 1023) {
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

$(window).on('load', function () {
  $('.review__slider').slick({
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    // autoplay: true,
    appendArrows: false,
    arrows: true,
    prevArrow: $('.review__slider-arrow--prev'),
    nextArrow: $('.review__slider-arrow--next'),
  })
// одинаковая высота слайдеров
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});

$('.review__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $('.review__slider-counter').html('<span class="current">' + i + '</span>' + ' / ' + slick.slideCount);
});
