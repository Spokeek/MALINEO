import Ember from 'ember';

export default Ember.Controller.extend({
  showMap: true,
  actions: {
    handleClick: function() {
      alert("clicked");
    },
  }
});
