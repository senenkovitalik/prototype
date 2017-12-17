import React from 'react';
import Categories from "./Categories";
import Products from "./Products";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>There will be a list of products</h2>
        <Categories/>
        <Products/>
      </div>
    );
  }
}

export default Home;