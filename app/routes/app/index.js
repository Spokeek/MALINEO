import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('user');
  },
  setupController: function(controller) {
    controller.setProperties({
      // Must be an Ember Array
      markers: Ember.A([{
        id: 'unique-id', // Recommended
        lat: 32.75494243654723, // Required
        lng: -86.8359375, // Required
        click: function(event) {
          alert(event.label);
        },
        clickable: true,
        draggable: false,
        label: 'Point A',
        title: 'string',
        visible: true,
      }])
    });
  }
});
