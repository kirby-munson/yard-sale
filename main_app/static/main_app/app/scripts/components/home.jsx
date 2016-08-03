var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx').LocationComponent;
var CategoryComponent = require('../components/categories.jsx'). CategoryComponent;

var HomeComponent = React.createClass({
  handleSignUp: function(){
    this.props.router.navigate('#signup/', {trigger: true});
  },
  handleLogin: function(){
    this.props.router.navigate('#login/', {trigger: true});
  },
  handleLocation: function(e){
    e.preventDefault();
    this.props.router.navigate('#searchlocation/', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <header className="head">
          <div className="logo col s12">
            <h1 className="col s12"><span id="cursive">re </span>Purpose</h1>
          </div>
        </header>
        <div className="nav col s12">
          <dl className="col s12 col m4 offset-m4 navbar">
            <dd><button id="submit" className="waves-effect waves-light btn" onClick={this.handleSignUp}>Sign Up</button></dd>
            <dd><button  id="submit" className="waves-effect waves-light btn" onClick={this.handleLogin}>Login</button></dd>
          </dl>
        </div>
        <section className="home2">
          <p className="col s12 col l6 offset-l3" id="white">Search for what youre looking for by category or by location: </p>
          <div>
            <button id="submit3" onClick={this.handleLocation} className="waves-effect waves-light btn col s10 offset-s1 col l4 offset-l4">Browse</button>
          </div>
        </section>

        <section className="col s12 footer valign-wrapper">
          <p className="copy col s5">Copyright IronYard 2016</p>
          <dl className="social col s12 col m2">
            <dd className="social"><img className="icon" src="static/main_app/app/images/twitter.png" /></dd>
            <dd className="social"><img className="icon" src="static/main_app/app/images/face.png" /></dd>
            <dd className="social"><img className="icon" src="static/main_app/app/images/pin.png" /></dd>
          </dl>
          <dl className="name col s5">
            <dd>Kirby Munson / Front End Student</dd>
            <dd>Hope Paasch / Back End Student</dd>
          </dl>
        </section>
      </div>
    )
  }
});

module.exports = HomeComponent;
