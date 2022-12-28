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
    const { isOn, open } = modalSubmenu;

    if (isOn) {
      submenu.classList.add(open);
    } else {
      submenu.classList.remove(open);
    }
  },
};
viewSubmenu.init();
