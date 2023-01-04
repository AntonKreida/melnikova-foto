const buttonsMore = document.querySelectorAll('.js-button-more') as NodeList;

const handlerShowPageSocial = () => {
  window.location.href = 'https://vk.com/melnikova_foto72';
};

buttonsMore.forEach((button) => {
  button.addEventListener('click', handlerShowPageSocial);
});
