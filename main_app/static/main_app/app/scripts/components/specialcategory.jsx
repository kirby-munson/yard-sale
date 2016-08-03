var React = require('react');
var SpecialListingCollection = require('../models/speciallisting').SpecialListingCollection;


var SpecialCategoryComponent = React.createClass({
  getInitialState: function(){
    return {
      listOfSpecialCategories: []
    }
  },
  componentWillMount: function(){
    var listOfSpecialCategories = new SpecialListingCollection();

    listOfSpecialCategories.fetch().done(() => {
      this.setState({
        'listOfSpecialCategories': listOfSpecialCategories
      });
    });

  },
  render: function(){
    var categories = this.state.listOfSpecialCategories;
    console.log(categories);
    var categoriesList = categories.map(function(category, index){
      return(
        <option key={index} name="choice" value={category.get('choice')}>{category.choices}</option>
      );
    });
    return(
      <div>
          <select name="category" id="category" className="browser-default col s3 offset-s4">
            <option value="">Choose your category</option>
            {categoriesList}
          </select>
      </div>
    )
  }
});

module.exports = SpecialCategoryComponent;
