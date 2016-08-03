var React = require('react');
var router = require('../router');
var $ = require('jquery');
var User = require('../models/user').User;
var ListingCollection = require('../models/listing').ListingCollection;



var DetailComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new ListingCollection();

    listings.fetch().done(function(){
      self.setState({
        'listings': listings
      });
    });

    me.fetch().done(function(){
      self.setState({
        'me': me
      });
    });
  },
  handleFakeBuy: function(e){
    e.preventDefault();
    this.props.router.navigate('#cart/', {trigger: true});
  },
  render: function(){
    var self = this;
    var listings = this.state.listings;


    var listingItem = listings.map(function(listing, index){
      var id = listing.id;
      if(id == self.props.id){

      return (
          <div key={index} >
            <div className="imgwrapper4">
              <img src={listing.get('photo')} />
            </div>
            <dl>
              <dd>{listing.get('item') + ' '}</dd>
              <dd>{'$' + listing.get('price') + ' '}</dd>
              <dd>{listing.get('description') + ' '}</dd>
            </dl>
          </div>
        )
      }
    });

    return(
      <div className="detail row">
        <div className="leftside col s12 col l6">
          <h5>Your Item</h5>
          <div className="ydsalehuge card-panel">{listingItem}</div>
        </div>
        <div className="rightside col s12 col m9 offset-m2 col l4 offset-l1">
          <button onClick={this.handleFakeBuy} id="submitbtn2" className="waves-effect waves-light btn">BUY</button>
        </div>
      </div>
    )
  }
});


module.exports = {
  'DetailComponent': DetailComponent
};
