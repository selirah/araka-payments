import $ from 'jquery';
import { Swiper } from 'swiper';

$(document).ready(function () {
  let swiperOptions = {
    speed: 5000,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 0,
    },
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: true,
  };
  var logosForwardSwipe = new Swiper(
    '.swiper-container.forward',
    swiperOptions
  );
  swiperOptions.autoplay['reverseDirection'] = true;
  var logosReverseSwipe = new Swiper(
    '.swiper-container.reverse',
    swiperOptions
  );
});
