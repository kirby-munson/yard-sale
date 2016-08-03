var React = require('react');
var router = require('../router');
var $ = require('jquery');
var User = require('../models/user').User;
var ListingCollection = require('../models/listing').ListingCollection;
var YardSaleCollection = require('../models/yardsale').YardSaleCollection;
var ListingComponent = require('../components/listing.jsx').ListingComponent;



var ProfileComponent = React.createClass({
  getInitialState: function(){
    return {
      'yardsales': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var yardsales = new YardSaleCollection();

    yardsales.fetch().done(function(response){
      self.setState({
        'yardsales': yardsales
      });
    });

    me.fetch().done(function(){
      self.setState({
        'me': me
      });
    });
  },
  handleYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#yardsale/', {trigger: true});
  },
  handleCreateProfile: function(e){
    e.preventDefault();
    this.props.router.navigate('#createsale/', {trigger: true});
  },
  handleSales: function(e){
    e.preventDefault();
    this.props.router.navigate('#sales/', {trigger: true});
  },
  handleCreateYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#create/', {trigger: true});
  },
  handleGoHome: function(e){
    e.preventDefault();
    this.props.router.navigate('', {trigger: true});
  },
  render: function(){
    var self = this;
    var me = this.state.me;
    var meStuff = me.attributes;
    var yardsales = this.state.yardsales;
    var yardsaleList = yardsales.map(function(yardsale, index){
      console.log(id, meStuff.id);
      var saleId = yardsale.get('id');
      var id = yardsale.get('seller');
      if(id == meStuff.id){
      return (
          <div key={index} className="yardsale">
            <a href={'#listing/' + yardsale.get('id') + '/'}><h6>{yardsale.get('name')}</h6></a>
            <dl><span className="bold">Cause: </span> {yardsale.get('cause')}</dl>
            <dl><span className="bold">Description: </span> {yardsale.get('description')}</dl>
            <dl><span className="bold">Location: </span> {yardsale.get('location')}</dl>
            <a href={'#itemsadd/' + yardsale.get('id')}><button id="additems" className="additems waves-effect waves-light btn">Add Items</button></a>
          </div>
        );
      }
    });
    return(
      <div className="row">
        <h3 id="title" className="white-text card-panel col s12">Hello, {me.get('first_name')}</h3>
          <div id="side-nav" className="col s12 col m3 col l3">
            <div id="list2" className="idphoto col s8 offset-s2 col m1 col l8 offset-l2"><img src={me.get('photo')}></img></div>
            <div id="list" className="col s8 offset-s2 col m8 offset-m4 col l8 offset-l2">{me.get('first_name') + ' ' + me.get('last_name')}</div>
            <div id="list1" className="col s8 offset-s2 col m8 offset-m4 col l8 offset-l2">{me.get('email_address')}</div>


            <dl className="profilelinks col s8 offset-s2 col m2 col l8 offset-l2">
              <dd><button id="submitbtn2" className="col m6 waves-effect waves-light btn" onClick={this.handleCreateProfile}>Create Yardsale</button></dd>
            </dl>
          </div>

          <div id="main" className="col s12 col m9 col l9">
            <div className="row">
              <h3 className="number">Active YardSales</h3>
            </div>
            <div className="row">
              {yardsaleList}
            </div>
          </div>
        </div>
      )
    }
  });


module.exports = {
  'ProfileComponent':ProfileComponent,
};
