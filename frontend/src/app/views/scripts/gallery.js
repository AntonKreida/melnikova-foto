// THIS CONSTRUCTOR new FsLightbox THERE IS SUCH IN SCRIPTS
// SO  THIS ESlint EXCEPTION APPLIES
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable no-undef */
import 'fslightbox';

// INIT CONSTRUCTOR FOR GALLERY
const galleryOne = new FsLightbox();
const galleryTwo = new FsLightbox();
const galleryThee = new FsLightbox();

// LIST IMG FOR GALLERY
galleryOne.props.sources = [
  './images/gallery/one/gallery-one-1.jpg',
  './images/gallery/one/gallery-one-2.jpg',
  './images/gallery/one/gallery-one-3.jpg',
  './images/gallery/one/gallery-one-4.jpg',
  './images/gallery/one/gallery-one-5.jpg',
  './images/gallery/one/gallery-one-6.jpg',
  './images/gallery/one/gallery-one-7.jpg',
  './images/gallery/one/gallery-one-8.jpg',
  './images/gallery/one/gallery-one-9.jpg',
];

galleryTwo.props.sources = [
  './images/gallery/two/gallery-two-1.jpg',
  './images/gallery/two/gallery-two-2.jpg',
  './images/gallery/two/gallery-two-3.jpg',
  './images/gallery/two/gallery-two-4.jpg',
  './images/gallery/two/gallery-two-5.jpg',
  './images/gallery/two/gallery-two-6.jpg',
];

galleryThee.props.sources = [
  './images/gallery/thee/gallery-thee-1.jpg',
  './images/gallery/thee/gallery-thee-2.jpg',
  './images/gallery/thee/gallery-thee-3.jpg',
  './images/gallery/thee/gallery-thee-4.jpg',
  './images/gallery/thee/gallery-thee-5.jpg',
  './images/gallery/thee/gallery-thee-6.jpg',
  './images/gallery/thee/gallery-thee-7.jpg',
];

const galleryList = [galleryOne, galleryTwo, galleryThee];

const buttonGallery = document.querySelectorAll('.js-gallery');

buttonGallery.forEach((button, index) => {
  button.addEventListener('click', () => {
    galleryList[index].open();
  });
});
