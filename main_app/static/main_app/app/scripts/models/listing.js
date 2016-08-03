var Backbone = require('backbone');
var FileModel = require('./utilities').FileModel;

var Listing = FileModel.extend({
  urlRoot: '/api/listings/',
  delete: function(){
    jQuery.post('/api/listings/')
  },
  // make: function(item, description, price, photo, callback){
  //   jQuery.post('/api/listings/',
  //     {item: item, description: description, price: price, photo: photo}).done(callback);
  // }
});

var ListingCollection = Backbone.Collection.extend({
  model: Listing,
  url: '/api/listings/'
});

module.exports = {
  'Listing': Listing,
  'ListingCollection': ListingCollection
};
