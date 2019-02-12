import React, { Component } from 'react';
//import { fetchTestCategories as oldOne } from '../../models/Test';
import {fetchAllCategories} from '../../actions/category';
import CategoryListItem from './CategoryListItem';
import { connect } from 'react-redux';

class CategoryList extends Component {

  /*
  constructor(props) {
    super(props);
    //this.state = { categories: [] };
  }
  */

  componentDidMount() {
    //this.setState({ categories: fetchTestCategories() });
    this.props.categoriesFetchAll();
  }

  render() {
    return (
      <div>
        <ol>
          {
            this.props.categories.categoryList.map((item, index) =>
              <CategoryListItem key={item.id} item={item} index={index} />
            )
          }
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);