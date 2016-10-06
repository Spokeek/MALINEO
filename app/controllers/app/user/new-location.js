import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didUpdatePlace: function (obj) {
      console.log(obj);
    },
  },
});
