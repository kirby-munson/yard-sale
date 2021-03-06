var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var csrf = require('./csrf');

var HomeComponent = require('./components/home.jsx');
var LocationComponent = require('./components/locations.jsx');
var SignUpComponent = require('./components/signup.jsx');
var LoginComponent = require('./components/login.jsx');
var ProfileComponent = require('./components/profile.jsx').ProfileComponent;
var ListingComponent = require('./components/listing.jsx').ListingComponent;
var CartComponent = require('./components/cart.jsx');
var CreateComponent = require('./components/create.jsx').CreateComponent;
var CreateListingComponent = require('./components/create.jsx').CreateListingComponent;
var DetailComponent = require('./components/detail.jsx').DetailComponent;
var SearchLocation = require('./components/search.jsx').SearchLocation;



var TheAppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'locations/': 'locations',
    'login/': 'login',
    'signup/': 'signup',
    'profile/': 'profile',
    'yardsale/': 'yardsale',
    'cart/': 'cart',
    'createsale/': 'createsale',
    'listing/:id/': 'listing',
    'detail/:id/': 'detail',
    'searchlocation/': 'searchlocation',
    'itemsadd/:id': 'itemsadd'
  },
  initialize: function(){
    var csrftoken = csrf.getCookie('csrftoken');
    console.log('csrftoken', csrftoken);

    $.ajaxSetup({
      beforeSend: function(xhr, settings) {
        if (!csrf.csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader("X-CSRFToken", csrftoken);
        } else {
          console.warn("CSRF Token Not Set!");
          console.log('safe method', !csrf.csrfSafeMethod(settings.type));
          console.log('cross domain', !this.crossDomain);
        }
      }
    });
  },
  index: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(HomeComponent, {router: self}),
      document.getElementById('container')
    );
  },
  locations: function(){
    ReactDOM.render(
      React.createElement(LocationComponent),
      document.getElementById('container')
    );
  },
  login: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(LoginComponent, {router: self}),
      document.getElementById('container')
    );
  },
  signup: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(SignUpComponent, {router: self}),
      document.getElementById('container')
    );
  },
  profile: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(ProfileComponent, {id: id, router: self}),
      document.getElementById('container')
    );
  },
  yardsale: function(){
    ReactDOM.render(
      React.createElement(YardSaleComponent, {router: self}),
      document.getElementById('container')
    );
  },
  cart: function(){
    ReactDOM.render(
      React.createElement(CartComponent, {router: self}),
      document.getElementById('container')
    );
  },
  createsale: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(CreateComponent, {router: self}),
      document.getElementById('container')
    );
  },
  listing: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(ListingComponent, {id: id, router: self}),
      document.getElementById('container')
    );
  },
  detail: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(DetailComponent, {id: id, router: self}),
      document.getElementById('container')
    );
  },
  searchlocation: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(SearchLocation, {id: id, router: self}),
      document.getElementById('container')
    );
  },
  itemsadd: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(CreateListingComponent, {id: id, router: self}),
      document.getElementById('container')
    );
  }
});

var router = new TheAppRouter();

module.exports = router;
