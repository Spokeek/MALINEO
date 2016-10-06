import DS from 'ember-data';

export default DS.Model.extend({
  idLication: DS.attr(),
  name: DS.attr(),
  coordonateX: DS.attr("number"),
  coordonateY: DS.attr("number"),
  image: DS.attr(),
  contract: DS.attr(),
  city_idCity: DS.belongsTo('city'),
});
