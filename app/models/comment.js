import DS from 'ember-data';

export default DS.Model.extend({
  idComment: DS.attr('number'),
  content: DS.attr(),
  date: DS.attr('date'),
});
