import DS from 'ember-data';

export default DS.Model.extend({
  handicapType_idHandicapType: DS.hasMany('handicapType'),
  location_idLocation: DS.belongsTo('location'),
});
