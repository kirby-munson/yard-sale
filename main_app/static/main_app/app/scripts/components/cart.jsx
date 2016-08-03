var React = require('react');


var CartComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel col s8 offset-s2">Cart</h3>
        <h1 className="col s8 offset-s2">Coming soon!!</h1>
      </div>
    )
  }
});

module.exports = CartComponent;
