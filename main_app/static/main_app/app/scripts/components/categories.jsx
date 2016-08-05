var React = require('react');
var CategoryCollection = require('../models/category').CategoryCollection;


var CategoryComponent2 = React.createClass({
  getInitialState: function(){
    return {
      listOfCategories: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var listOfCategories = new CategoryCollection();

    listOfCategories.fetch().done(function(){
      self.setState({
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
  'CategoryComponent2': CategoryComponent2
};
