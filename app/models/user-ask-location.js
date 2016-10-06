import DS from 'ember-data';

export default DS.Model.extend({
  idUser: DS.belongsTo('user'),
  idLocation: DS.belongsTo('location'),
  approval_idApproval: DS.attr("number"),
});
