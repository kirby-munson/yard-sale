var Backbone = require('backbone');

var Location = Backbone.Model.extend({
  idAttribute: '_id',

});

var LocationCollection = Backbone.Collection.extend({
  model: Location,
  url: '/api/locations/'
});

module.exports = {
  'Location': Location,
  'LocationCollection': LocationCollection
};
