import Ember from 'ember';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  gMap: Ember.inject.service(),

  actions: {
    fetchLocation: function () {
      var self = this;
      this.get('geolocation').getLocation().then(function(geoObject) {
        var address = self.reverseGeocode(geoObject.coords.latitude, geoObject.coords.longitude);
        //self.controllerFor('app.user.new-location').set('address', address);
      });
    }
  },
  reverseGeocode(lat, lng) {
    this.get('gMap')
      .geocode({lat, lng})
      .then((geocodes) => {
        console.log(geocodes[0]);
      })
      .catch((err) => console.error(err));
  }
});
