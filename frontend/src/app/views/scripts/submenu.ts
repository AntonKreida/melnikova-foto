import controllerSubmenu from '../../controllers/submenu';
import modalSubmenu from '../../models/submenu';

const viewSubmenu = {
  init() {
    const submenu: HTMLElement | null = document.querySelector('.js-submenu');

    if (submenu === null) {
      throw new Error('This is not the HTML element');
    }

    controllerSubmenu.checkStatus(submenu);

    submenu.addEventListener('click', () => {
      controllerSubmenu.toggle();
      this.updateView(submenu);
    });
  },

  updateView(submenu: HTMLElement) {
    const { open } = modalSubmenu;

    submenu.classList.toggle(open);
  },
};
viewSubmenu.init();
