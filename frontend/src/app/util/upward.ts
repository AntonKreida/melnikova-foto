window.addEventListener('scroll', () => {
  const upward = document.querySelector('.js-upward') as HTMLElement;

  upward.classList.toggle('active', window.scrollY > 250);

  upward.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
