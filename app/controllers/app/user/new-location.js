import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didUpdatePlace: function (lat, lng, marker) {
      console.log(lat);
      console.log(lng);
      console.log(marker);
    },
    fetchLocation: function () {
      
    }
  }
});
