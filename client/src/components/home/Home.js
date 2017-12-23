import React from 'react';
import Categories from "./Categories";
import Products from "./Products";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Categories/>
        <Products/>
      </div>
    );
  }
}

export default Home;