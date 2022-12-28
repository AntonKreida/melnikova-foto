import modalSubmenu from '../models/submenu';

const controllerSubmenu = {
  toggle() {
    modalSubmenu.isOn = !modalSubmenu.isOn;
  },

  checkStatus(submenu: HTMLElement) {
    const status = !!submenu.classList.contains('active');

    modalSubmenu.isOn = status;
  },
};

export default controllerSubmenu;
