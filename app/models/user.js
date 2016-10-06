import DS from 'ember-data';

export default DS.Model.extend({
  idUSer: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  mail: DS.attr(),
  phoneNumber: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  birth: DS.attr("date")
});
