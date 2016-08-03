var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx');
var CategoryComponent2 = require('../components/categories.jsx').CategoryComponent2;
var Listing = require('../models/listing').Listing;
var YardSale = require('../models/yardsale').YardSale;
var YardSaleCollection = require('../models/yardsale').YardSaleCollection;



var $ = require('jquery');


var CreateComponent = React.createClass({
  getInitialState: function(){
    return {
      'cause': '',
       'name': '',
       'description': '',
       'yardsales': []
    }
  },
  componentWillMount: function(){
    var self = this;
    var yardsales = new YardSaleCollection();

    yardsales.fetch().done(function(){
      self.setState({
        'yardsales': yardsales
      });
    });

  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var cause = this.state.cause;
    var name = this.state.name;
    var description = this.state.description;


    var newSale = new YardSale();
    newSale.set({
      'cause': cause,
      'description': description,
      'name': name
    });
    newSale.save().then(function(response){
      self.props.router.navigate('#itemsadd/' + response.id, {trigger: true});
    });

  },
  handleDescriptionChange: function(e){
    e.preventDefault();
    this.setState({
      'description': e.target.value
    });
  },
  handleNameChange: function(e){
    e.preventDefault();
    this.setState({
      'name': e.target.value
    });
  },
  handleCategoryChange: function(e){
    e.preventDefault();
    this.setState({
      'cause': e.target.value
    });
  },
  render: function(){
    return (
      <div className="row">
          <form id="form" className="col s12 col l8 offset-l2" onSubmit={this.handleSubmit}>
             <div className="row">
                <div className="input-field col s12 col l8">
                   <input
                     name="name"
                     id="name"
                     value={this.state.name}
                     onChange={this.handleNameChange}
                     type="text" />
                   <label htmlFor="name">Sale Name</label>
                </div>
                <div className="input-field col s12 col l12">
                   <input
                     name="description"
                     id="description"
                     value={this.state.description}
                     onChange={this.handleDescriptionChange}
                     type="text" />
                   <label htmlFor="description">Sale Description</label>
                </div>
                <div className="input-field col s8">
                   <select className="browser-default" onChange={this.handleCategoryChange} name='cause'>
                     <option value="">Choose a Cause</option>
                     <option value="Extra fun">Extra fun</option>
                     <option value="Personal need">Personal need</option>
                     <option value="Big trip">Big trip</option>
                     <option value="Help others">Help others</option>
                     <option value="Other">Other</option>
                   </select>
                 </div>
               </div>
              <button id="finish" type='submit' className="col s6 col l2 waves-effect waves-light btn">Create YardSale</button>
          </form>
    </div>
    )
  }
});

var CreateListingComponent = React.createClass({
  getInitialState: function(){
    return {
      'item': '',
       'description': '',
       'price': '',
       'photo': '',
       'category': '',
       'yardsale': ''
    }
  },
  componentWillMount: function(){
    var self = this;
    var thisId = this.props.id;
    var yardsales = new YardSaleCollection();
    yardsales.fetch().done(function(){
      self.setState({
        'yardsales': yardsales
      });
    });

  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var thisId = this.props.id;
    var item = this.state.item;
    var description = this.state.description;
    var price = this.state.price;
    var photo = this.state.photo;
    var category = this.state.category;
    var yardsale = this.props.id;
    console.log(thisId, yardsale);


    var newItem = new Listing();
    newItem.set({
      'item': item,
      'description': description,
      'price': price,
      'photo': photo,
      'category': category,
      'yardsale': yardsale
    });
    newItem.save();

    this.setState({
      'item': '',
       'description': '',
       'price': '',
       'photo': '',
    });

  },
  handleItemChange: function(e){
    e.preventDefault();
    this.setState({
      'item': e.target.value
    });
  },
  handleDescriptionChange: function(e){
    e.preventDefault();
    this.setState({
      'description': e.target.value
    });
  },
  handlePriceChange: function(e){
    e.preventDefault();
    this.setState({
      'price': e.target.value
    });
  },
  handlePhotoChange: function(e){
    this.setState({
      'photo': e.target.files[0]
    });
  },
  handleFinishChange: function(){
    this.props.router.navigate('#profile/', {trigger: true});
  },
  handleCategoryChange: function(e){
    e.preventDefault();
    this.setState({
      'category': e.target.value
    });
  },
  render: function(){
    return(
      <div className="row">
          <form id="form" className="col s12 col l8 offset-l2" onSubmit={this.handleSubmit}>
             <div className="row">
                <div className="input-field col s12 col l6">
                   <input
                     name="item"
                     id="item"
                     value={this.state.item}
                     onChange={this.handleItemChange}
                     type="text" />
                   <label htmlFor="item">Item Name</label>
                </div>
                <div className="input-field col s12 col l6">
                   <input
                     name="description"
                     id="description"
                     value={this.state.description}
                     onChange={this.handleDescriptionChange}
                     type="text" />
                   <label htmlFor="description">Description</label>
                </div>
                <div className="input-field col s12 col l6">
                   <input
                     name="price"
                     id="price"
                     value={this.state.price}
                     onChange={this.handlePriceChange}
                     type="text" />
                   <label htmlFor="price">Price</label>
                </div>
                <div className="input-field col s12 col l6">
                  <label htmlFor="photo">Photo</label><br />
                  <br />
                   <input
                     name="photo"
                     id="photo"
                     onChange={this.handlePhotoChange}
                     type="file" />
                </div>
                <CategoryComponent2 />
              </div>
             <button id="add" className="waves-effect waves-light btn">Add This Item</button>
          </form>
          <div className="col s8 offset-s2">
            <button id="finish" onClick={this.handleFinishChange} className="col s6 col l2 waves-effect waves-light btn">Finish</button>
          </div>
    </div>
    )
  }
});

module.exports = {
  'CreateListingComponent': CreateListingComponent,
  'CreateComponent': CreateComponent
};
