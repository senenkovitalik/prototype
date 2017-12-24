import React from 'react';
import _ from 'lodash';
import { Route } from 'react-router-dom';
import App from "./App";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(product) {
    const p = _.find(this.state.products, product);
    if (p === undefined) {
      this.setState({
        products: _.union(this.state.products, [product])
      });
    }
  }

  remove(product) {
    this.setState({
      products: _.without(this.state.products, product)
    });
  }

  render() {
    return (
     <Route render={(props) => <App {...props}
                                    products={this.state.products}
                                    add={this.add}
                                    remove={this.remove} /> } />
    );
  }
}

export default AppContainer;