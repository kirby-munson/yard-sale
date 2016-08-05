var React = require('react');
var LocationComponent = require('../components/locations.jsx').LocationComponent;
var YardSaleCollection = require('../models/yardsale').YardSaleCollection;


var SearchLocation = React.createClass({
  getInitialState: function(){
    return {
      yardsales: new YardSaleCollection
    }
  },
  componentWillMount: function(){
    var self = this;
    var yardsales = this.state.yardsales;

    yardsales.fetch().done(function(){
      self.setState({
        yardsales: yardsales
      });
    });
  },
  handleLocation: function(e){
    e.preventDefault();
    this.setState({
      'location': e.target.value
    });
    console.log(e.target.value)
  },
  render: function(){
    var yardsales = this.state.yardsales;

    var yardsaleList = yardsales.where({location: this.state.location}).map(function(yardsale, index){
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
        <div className="search col s12 col m12 col l12">
          <h3 id="title" className="white-text card-panel col s12">Browse by location<a className="profilelink" href="#profile/">Profile</a> </h3>
          <form className="col s12 col l12">
          <select className="browser-default col s12 col m6 col offset-m3" onChange={this.handleLocation} name="location">
            <option value="">Choose city</option>
            <option value="Irmo">Irmo</option>
            <option value="Greenville">Greenville</option>
            <option value="Greer">Greer</option>
            <option value="Clemson">Clemson</option>
            <option value="Powdersville">Powdersville</option>
            <option value="Charleston">Charleston</option>
          </select>
        </form>
        </div>
        <div className="salemain col s12 col m12 col l12">
            <dl>{yardsaleList}</dl>
        </div>
      </div>
    )
  }
});

module.exports = {
  'SearchLocation': SearchLocation
};
