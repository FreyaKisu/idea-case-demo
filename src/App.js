import React, { Component } from "react";
import "./App.css";
import CategoryList from "./Components/CategoryComponents.jsx/CategoryList";
import AddCategory from "./Components/CategoryComponents.jsx/AddCategory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My Categories</h2>
        <AddCategory />
        <CategoryList />
      </div>
    );
  }
}

export default App;
