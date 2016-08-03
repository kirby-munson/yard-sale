var React = require('react');
var LocationCollection = require('../models/location').LocationCollection;


var LocationComponent = React.createClass({
  getInitialState: function(){
    return {
      listOfLocations: []
    }
  },
  componentWillMount: function(){
    var listOfLocations = new LocationCollection();

    listOfLocations.fetch().done(() => {
      this.setState({
        'listOfLocations': listOfLocations
      });
    });

  },
  render: function(){
    var locations = this.state.listOfLocations;

    var locationList = locations.map(function(location, index){
      return(
        <option key={index} value={location.get('city')}>{location.get('city')}</option>
      );
    });
    return(
      <div>
        <select className="browser-default col s10 offset-s1 col l4 offset-l4">
          <option value="">Choose your city</option>
          {locationList}
        </select>
      </div>
    )
  }
});

var LocationComponent2 = React.createClass({
  getInitialState: function(){
    return {
      listOfLocations: []
    }
  },
  componentWillMount: function(){
    var listOfLocations = new LocationCollection();

    listOfLocations.fetch().done(() => {
      this.setState({
        'listOfLocations': listOfLocations
      });
    });

  },
  render: function(){
    var locations = this.state.listOfLocations;

    var locationList = locations.map(function(location, index){
      return(
        <option key={index} value={location.get('city')}>{location.get('city')}</option>
      );
    });
    return(
      <div>
        <select name="city" className="browser-default col s6">
          <option value="">Choose your city</option>
          {locationList}
        </select>
      </div>
    )
  }
});

module.exports = {
  'LocationComponent': LocationComponent,
  'LocationComponent2': LocationComponent2
}
