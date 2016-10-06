import Ember from 'ember';

export default Ember.Controller.extend({
  email: "",
  password: "",
  canNotLogin: function () {
    var test = this.get('email') == "" || this.get('password') == "";
    return test?true:null;
  }.property("email", "password"),
  actions: {
    login: function () {
      alert('erreur de connexion');
    }
  },
});
