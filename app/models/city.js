import DS from 'ember-data';

export default DS.Model.extend({
  idCity: DS.attr('number'),
  name: DS.attr(),
  postalCode: DS.attr('number'),
  region_idRegion: DS.belongsTo('region'),
});
