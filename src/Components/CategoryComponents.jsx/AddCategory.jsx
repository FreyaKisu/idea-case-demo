import React, { Component } from "react";

export default class AddCategory extends Component {
  render() {
    return (
      <div>
        <p>
          <input type="text" />
          <br />
          <input type="text" />
          <br />
          <input type="text" />
          <br />
          <button type="button">Add new category</button>
          <br />
        </p>
      </div>
    );
  }
}
