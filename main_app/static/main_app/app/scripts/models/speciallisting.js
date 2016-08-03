var Backbone = require('backbone');
var FileModel = require('./utilities').FileModel;

var SpecialListing = FileModel.extend({
  urlRoot: '/api/special/',
  defaults: {
    'models': []
  },
  // make: function(item, description, price, photo, callback){
  //   jQuery.post('/api/listings/',
  //     {item: item, description: description, price: price, photo: photo}).done(callback);
  // }
});

var SpecialListingCollection = Backbone.Collection.extend({
  model: SpecialListing,
  url: '/api/special/'
});

module.exports = {
  'SpecialListing': SpecialListing,
  'SpecialListingCollection': SpecialListingCollection
};
