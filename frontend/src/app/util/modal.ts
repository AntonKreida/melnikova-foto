const buttons = document.querySelectorAll('.js-button') as NodeList;
const buttonModal = document.querySelector('.js-modal-button') as HTMLButtonElement;

const handlerModal = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const modal = document.querySelector('.js-modal') as HTMLElement;
  const modalInner = document.querySelector('.js-modal-inner') as HTMLElement;
  const svg = document.querySelector('.js-path') as SVGPathElement;

  modal.classList.add('show');
  body.classList.add('no--scroll');

  setTimeout(() => {
    modalInner.style.transform = 'translateX(0%)';
    svg.style.opacity = '1';
  }, 150);
};

const handlerCloseModal = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const modal = document.querySelector('.js-modal') as HTMLElement;
  const modalInner = document.querySelector('.js-modal-inner') as HTMLElement;
  const svg = document.querySelector('.js-path') as SVGPathElement;

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

export default handlerModal;
