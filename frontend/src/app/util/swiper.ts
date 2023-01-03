/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * THIS INIT SWIPER
 */

import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  preloadImages: true,
  slidesPerView: 2.62,
  watchOverflow: true,
  initialSlide: 0,
  grabCursor: true,
});
