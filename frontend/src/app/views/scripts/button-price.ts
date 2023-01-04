import handlerModal from '../../util/modal';

const buttonPersonal = document.querySelector('.js-button-personal') as HTMLButtonElement;
const buttonBusiness = document.querySelector('.js-button-business') as HTMLButtonElement;
const pricePersonal = document.querySelector('.js-price-personal') as HTMLElement;
const priceBusiness = document.querySelector('.js-price-business') as HTMLElement;
let buttonForm = document.querySelectorAll('.js-button-form') as NodeList;

const handlerShowPricePersonal = (event: Event) => {
  const { target } = event;

  (target as HTMLButtonElement).classList.add('active');
  buttonBusiness.classList.remove('active');

  priceBusiness.classList.remove('active');
  setTimeout(() => {
    priceBusiness.style.position = 'absolute';
  }, 300);

  pricePersonal.classList.add('active');

  setTimeout(() => {
    pricePersonal.style.opacity = '1';
  }, 300);

  buttonForm = document.querySelectorAll('.js-button-form') as NodeList;
};

const handlerShowPriceBusiness = (event: Event) => {
  const { target } = event;

  (target as HTMLButtonElement).classList.add('active');
  buttonPersonal.classList.remove('active');

  priceBusiness.classList.add('active');
  setTimeout(() => {
    pricePersonal.classList.remove('active');
  }, 300);

  pricePersonal.style.opacity = '0';

  setTimeout(() => {
    priceBusiness.style.position = 'static';
  }, 300);

  buttonForm = document.querySelectorAll('.js-button-form') as NodeList;
};

buttonPersonal.addEventListener('click', handlerShowPricePersonal);
buttonBusiness.addEventListener('click', handlerShowPriceBusiness);

buttonForm.forEach((button) => {
  button.addEventListener('click', handlerModal);
});
