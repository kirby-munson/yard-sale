var Backbone = require('backbone');

var Category = Backbone.Model.extend({
  idAttribute: '_id',

});

var CategoryCollection = Backbone.Collection.extend({
  model: Category,
  url: '/api/categories/'
});

module.exports = {
  'Category': Category,
  'CategoryCollection': CategoryCollection
};
