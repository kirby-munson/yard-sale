var React = require('react');
var router = require('../router');
var $ = require('jquery');
var User = require('../models/user').User;
var ListingCollection = require('../models/listing').ListingCollection;
var YardSaleCollection = require('../models/yardsale').YardSaleCollection;


var ListingComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'yardsales': []
    }
  },
  componentWillMount: function(){
    var self = this;
    var thisId = this.props.id;
    console.log(thisId, this.props.id)
    var yardsales = new YardSaleCollection();
    var listings = new ListingCollection();

    listings.fetch().done(function(response){
      console.warn('response :', response);
      self.setState({
        'listings': listings
      });
    });

    yardsales.fetch().done(function(){
      self.setState({
        'yardsales': yardsales
      });
    });
  },
  render: function(){
    var self = this;
    var listings = this.state.listings;
    var listingList = listings.map(function(listing, index){
      var id = listing.get('yardsale');
      if(id == self.props.id){
      return (
          <dd key={index} className="col s12 col m6 col l4">
            <div className="ydsalebig card-panel">
              <div className="imgwrapper3">
                <img src={listing.get('photo')} />
              </div>
              <a href={"#detail/" + listing.get('id') + '/'}>{listing.get('item') + ' '}</a>
              {listing.get('seller') + ' '}
              {'$' + listing.get('price') + ' '}
              {listing.get('description') + ' '}
            </div>
          </dd>
        );
      }
    });
    return(
      <div className="row">
        <div id="salenav" className="salenav card-panel col s12 col m2 col l2">
          <dl className="salenav">
            <dd>Sort by category: </dd>
            <dd>Shirts</dd>
            <dd>Shoes</dd>
            <dd>Pants</dd>
            <dd>Dresses</dd>
            <dd>Accessories</dd>
            <dd>Jackets</dd>
            <dd>Tank Tops</dd>
            <dd>Other</dd>
          </dl>
        </div>
        <div className="salemain col s12 col m12 col l9">
          <h3>YardSale</h3>
            <dl>{listingList}</dl>
        </div>
      </div>
    )
  }
});

module.exports = {
  'ListingComponent': ListingComponent
};
