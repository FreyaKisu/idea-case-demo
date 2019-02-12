import React, { Component } from "react";

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }

  render() {
    return (
      <li key={this.props.index}>
        {`${this.props.item.name} ${this.props.item.budget}`}
      </li>
    );
  }
}
