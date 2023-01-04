const buttonNext = document.querySelector('.js-button-next') as HTMLButtonElement;

const handlerNextPagePrice = () => {
  window.location.href = './price.html';
};

buttonNext.addEventListener('click', handlerNextPagePrice);
