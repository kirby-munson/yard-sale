var Backbone = require('backbone');
var FileModel = require('./utilities').FileModel;

var YardSale = FileModel.extend({
  urlRoot: '/api/yardsales/',
  // make: function(item, description, price, photo, callback){
  //   jQuery.post('/api/listings/',
  //     {item: item, description: description, price: price, photo: photo}).done(callback);
  // }
});

var YardSaleCollection = Backbone.Collection.extend({
  model: YardSale,
  url: '/api/yardsales/'
});

module.exports = {
  'YardSale': YardSale,
  'YardSaleCollection': YardSaleCollection
};
