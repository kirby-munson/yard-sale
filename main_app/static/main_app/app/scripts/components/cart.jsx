var React = require('react');


var CartComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className="white-text card-panel col s12">Cart<a className="profilelink" href="#profile/">My Profile</a></h3>
        <h1 className="col s8 offset-s2">You have (1) Item in your cart</h1>
      </div>
    )
  }
});

module.exports = CartComponent;
