import DS from 'ember-data';

export default DS.Model.extend({
  idRegion: DS.attr('number'),
  name: DS.attr(),
});
