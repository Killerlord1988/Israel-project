'use strict';
// подключение слайдера в секции Жизнь в Израиле
var responsive = {
  mobile: 1023,
  desktop: 1006,
}

function activateSlick(responsive) {
  if ($(window).width() <= responsive) {
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
}

$(window).on('load resize', function () {
  if (device.desktop()) {
    activateSlick(responsive.desktop)
  };

  if (device.mobile()) {
    activateSlick(responsive.mobile)
  };
});

// подключение слайдера в секции Отзывы
$(window).on('load', function () {
  $('.review__slider').slick({
    dots: false,
    infinite: true,
    rows: 0,
    speed: 100,
    slidesToShow: 1,
    // autoplay: true,
    appendArrows: false,
    arrows: true,
    prevArrow: $('.review__slider-arrow--prev'),
    nextArrow: $('.review__slider-arrow--next'),
  })
});

  // одинаковая высота слайдеров
$('.review__slider').on('setPosition', function () {
    $(this).find('.review__slide-wrapper').height('auto');
    var slickTrack = $(this).find('.slick-track');
    var slickTrackHeight = $(slickTrack).height();
    $(this).find('.review__slide-wrapper').css('height', slickTrackHeight + 'px');
});

$('.review__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $('.review__slider-counter').html('<span class="current">' + i + '</span>' + ' / ' + slick.slideCount);
});
