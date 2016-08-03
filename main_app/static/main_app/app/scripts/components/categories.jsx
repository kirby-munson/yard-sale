var React = require('react');
var CategoryCollection = require('../models/category').CategoryCollection;


var CategoryComponent = React.createClass({
  getInitialState: function(){
    return {
      listOfCategories: []
    }
  },
  componentWillMount: function(){
    var listOfCategories = new CategoryCollection();

    listOfCategories.fetch().done(() => {
      this.setState({
        'listOfCategories': listOfCategories
      });
    });

  },
  render: function(){
    var categories = this.state.listOfCategories;

    var categoriesList = categories.map(function(category, index){
      return(
        <option key={index} name="category" value={category.get('category')}>{category.get('category')}</option>
      );
    });
    return(
      <div>
        <select name="category" id="category" className="browser-default col s10 offset-s1 col l4 offset-l4">
          <option value="">Choose your category</option>
          {categoriesList}
        </select>
      </div>
    )
  }
});

var CategoryComponent2 = React.createClass({
  getInitialState: function(){
    return {
      listOfCategories: []
    }
  },
  componentWillMount: function(){
    var listOfCategories = new CategoryCollection();

    listOfCategories.fetch().done(() => {
      this.setState({
        'listOfCategories': listOfCategories
      });
    });

  },
  render: function(){
    var categories = this.state.listOfCategories;

    var categoriesList = categories.map(function(category, index){
      return(
        <option key={index} value={category.get('category')}>{category.get('category')}</option>
      );
    });
    return(
      <div>
        <select name="category" onChange={this.handleCategoryChange} id="category" className="browser-default col s12">
          <option id="category" value="">Choose your category</option>
          {categoriesList}
        </select>
      </div>
    )
  }
});

module.exports = {
  'CategoryComponent': CategoryComponent,
  'CategoryComponent2': CategoryComponent2
};
