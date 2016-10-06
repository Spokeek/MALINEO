import Ember from 'ember';

export default Ember.Controller.extend({
  menuIsOpen: false,
  open(path) {
    this.transitionToRoute("app." + path);
  },
  actions: {
    openRegister() {
      this.open("register");
    },
    openLogin() {
      this.open("login");
    },
    toggle() {
      this.toggleProperty('menuIsOpen');
    }
  }
});
