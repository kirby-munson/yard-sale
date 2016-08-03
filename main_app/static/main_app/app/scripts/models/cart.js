var Backbone = require('backbone');

var Cart = Backbone.Model.extend({

});

var CartCollection = Backbone.Collection.extend({
  model: Cart,
  url:
});

module.extend = {
  'Cart': Cart,
  'CartCollection': CartCollection
};
