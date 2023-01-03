const buttons = document.querySelectorAll('.js-button') as NodeList;
const modal = document.querySelector('.js-modal') as HTMLElement;
const modalInner = document.querySelector('.js-modal-inner') as HTMLElement;
const svg = document.querySelector('.js-path') as SVGPathElement;
const buttonModal = document.querySelector('.js-modal-button') as HTMLButtonElement;
const body = document.querySelector('body') as HTMLBodyElement;

const handlerModal = (event: Event) => {
  event.preventDefault();

  modal.classList.add('show');
  body.classList.add('no--scroll');

  setTimeout(() => {
    modalInner.style.transform = 'translateX(0%)';
    svg.style.opacity = '1';
  }, 150);
};

const handlerCloseModal = (event: Event) => {
  event.preventDefault();

  modalInner.style.transform = 'translateX(100%)';
  svg.style.opacity = '1';

  setTimeout(() => {
    modal.classList.remove('show');
    body.classList.remove('no--scroll');
  }, 300);
};

buttons.forEach((button) => {
  button.addEventListener('click', handlerModal);
});

buttonModal.addEventListener('click', handlerCloseModal);
