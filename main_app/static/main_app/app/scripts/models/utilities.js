var Backbone = require('backbone');
var _ = require('underscore');

var SaveMethod = Backbone.Model.extend({
  save: function(attributes, options){
    options = options || {};
    attributes = attributes || {};

    options.data = this.toJSON();
    options.emulateJSON = true;

    return Backbone.Model.prototype.save.call(this, attributes, options);
  }
});

var FileModel = Backbone.Model.extend({
  sync: function(method, model, options){

    // Post data as FormData object on create to allow file upload
    if(method == 'create'){
      var formData = new FormData();

      // Loop over model attributes and append to formData
      _.each(model.attributes, function(value, key){
        formData.append(key, value);
      });

      // Set processData and contentType to false so data is sent as FormData
      _.defaults(options || (options = {}), {
        data: formData,
        processData: false,
        contentType: false
      });
    }
    return Backbone.sync.call(this, method, model, options);
  }
});

module.exports = {
  'FileModel': FileModel,
  'SaveMethod': SaveMethod
};
