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
    this.changeCount = this.changeCount.bind(this);
  }

  add(product) {
    if (!_.find(this.state.products, product)) {
      const p = Object.assign({}, { product, count: 1 });
      this.setState({
        products: _.union(this.state.products, [p])
      });
    }
  }

  remove(product) {
    this.setState({
      products: _.without(this.state.products, product)
    });
  }

  changeCount(product, action) {
    // if action true = + 1
    // else -1
    const index = _.findIndex(this.state.products, product);

    if (index !== -1) {
      let count = product.count;

      if (action) {
        count += 1;
      } else {
        count = (count > 1) ? count - 1 : 1;
      }

      const updatedProduct = Object.assign({}, product, { count: count });

      const copy = _.slice(this.state.products);

      this.setState({
        products: _.fill(copy, updatedProduct, index, index+1)
      })
    }
  }

  render() {
    return (
     <Route render={(props) => <App {...props}
                                    products={this.state.products}
                                    add={this.add}
                                    remove={this.remove}
                                    changeCount={this.changeCount} /> } />
    );
  }
}

export default AppContainer;