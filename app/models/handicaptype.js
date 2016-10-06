import DS from 'ember-data';

export default DS.Model.extend({
  idHandicapType: DS.attr('number'),
  name: DS.attr(),
});
