var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx').LocationComponent;
var CategoryComponent = require('../components/categories.jsx'). CategoryComponent;
var ListingCollection = require('../models/listing').ListingCollection;
var YardSaleCollection = require('../models/yardsale').YardSaleCollection;


var SearchLocation = React.createClass({
  getInitialState: function(){
    return {
      'yardsales': []
    }
  },
  componentWillMount: function(){
    var self = this;
    var yardsales = new YardSaleCollection();
    // var hereListings = listings.where({location: 22});
    // console.log(hereListings);

    yardsales.fetch().done(function(){
      self.setState({
        'yardsales': yardsales
      });
    });
  },
  render: function(){
    var yardsales = this.state.yardsales;
    var yardsaleList = yardsales.map(function(yardsale, index){
      console.log(yardsale)
      return (
          <dd key={index} className="col s12 col m6 col l4">
            <div key={index} className="yardsale">
              <a href={'#listing/' + yardsale.get('id') + '/'}><h6>{yardsale.get('name')}</h6></a>
              <dl><span className="bold">Cause: </span> {yardsale.get('cause')}</dl>
              <dl><span className="bold">Description: </span> {yardsale.get('description')}</dl>
              <dl><span className="bold">Location: </span> {yardsale.get('location')}</dl>
            </div>
          </dd>
        );
      });
    return(
      <div className="row">
        <div id="salenav" className="salenav card-panel col s12 col m2 col l2">
          <dl className="salenav">
            <dd>Sort by location: </dd>
            <dd><a href="#" onClick={this.handleIrmo}>Irmo</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Greenville</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Greer</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Clemson</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Powdersville</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Columbia</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Charleston</a></dd>
            <dd><a href="#" onClick={this.handleIrmo}>Other</a></dd>
          </dl>
        </div>
        <div className="salemain col s12 col m12 col l9">
          <h3>Browse Yardsales</h3>
            <dl>{yardsaleList}</dl>
        </div>
      </div>
    )
  }
});

module.exports = {
  'SearchLocation': SearchLocation
};
