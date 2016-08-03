var Backbone = require('backbone');
var FileModel = require('./utilities').FileModel;

var User = FileModel.extend({
  idAttribute: 'id',
  defaults: {
    'attributes': {}
  },
  urlRoot: '/api/currentuser/',
  login: function(email_address, password, callback){
    jQuery.post('login/',
      {username: email_address, password: password}).done(callback);
  },
  register: function(){
    this.urlRoot = '/api/register/';
    return this.save();
  }
});


module.exports = {
  'User': User
};
