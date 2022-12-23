import modalSubmenu from '../models/submenu';

const controllerSubmenu = {
  toggle() {
    modalSubmenu.isOn = !modalSubmenu.isOn;
  },
};

export default controllerSubmenu;
