var Backbone = require('backbone');

var Profile = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/api/profile/'
});

var ProfileCollection = Backbone.Collection.extend({
  model: Profile,
  url: '/api/profile/'
});

module.exports = {
  'Profile': Profile,
  'ProfileCollection': ProfileCollection
};
