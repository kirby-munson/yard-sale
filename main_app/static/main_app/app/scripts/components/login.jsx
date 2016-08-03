var React = require('react');
var router = require('../router');
var User = require('../models/user').User;



var LoginComponent = React.createClass({
  getInitialState: function(){
    return {
      'email_address': '',
       'password': '',
       'username': ''
     }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var email_address = this.state.email_address;
    var password = this.state.password;
    var username = this.state.email_address;


    var activeUser = new User();
    activeUser.login(email_address, password, function(){
      self.props.router.navigate('#profile/', {trigger: true});
    });
  },
  handleNameChange: function(e){
    e.preventDefault();
    this.setState({
      'email_address': e.target.value
    });
  },
  handlePasswordChange: function(e){
    e.preventDefault();
    this.setState({
      'password': e.target.value
    });
  },
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className="white-text card-panel col s12">Log In</h3>
         <form className="col s12 col m10 offset-m1" onSubmit={this.handleSubmit}>
            <div className="row">
               <div className="input-field col s12 col m10 offset-m1 col l6">
                 <label htmlFor="email_address">email_address</label>
                  <input
                    id="email_address"
                    value={this.state.email_address}
                    onChange={this.handleNameChange}
                    name="email_address"
                    type="text" />
               </div>
               <div className="input-field col s12 col m10 offset-m1 col l6">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    name="password"
                    type="password" />
               </div>
            </div>
            <button id="submitbtn" className="waves-effect waves-light btn" type="submit">Log In</button>
         </form>
       </div>
    )
  }
});

module.exports = LoginComponent;
