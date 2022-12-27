/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */

/**
 * THIS INIT SWIPER
 */

import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  preloadImages: true,
  resistance: true,
  slidesPerView: 2.62,
  watchOverflow: true,
  initialSlide: 0,
});
