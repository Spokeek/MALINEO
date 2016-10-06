import Ember from 'ember';

export default Ember.Controller.extend({
  open (path) {
    this.transitionToRoute("app."+path);
},
  actions:{
  openRegister() {this.open("register");},
  openLogin() {this.open("login");},
  toggle() {console.log(this.get('menuIsOpen'));this.set('menuIsOpen', !this.get('menuIsOpen'));}
  }
});
