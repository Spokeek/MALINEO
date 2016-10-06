import DS from 'ember-data';

export default DS.Model.extend({
  idUser: DS.belongsTo('user'),
  idHandicapType: DS.belongsTo('handicapType'),
});
