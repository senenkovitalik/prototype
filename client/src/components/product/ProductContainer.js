import React from 'react';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

import Product from './Product';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    fetch(this.props.url)
    .then((res) => {
      if (res.status >= 400) {
        console.log("Bad responce");
      }
      return res.json();
    })
    .then((p) => {
      this.setState({
        product: p
      })
    });
  }

  render() {
    return (
      <Product p={this.state.product}
               inBasket={!!_.find(this.props.products, this.state.product)}
               history={this.props.history}
               add={this.props.add} />
    );
  }
}

export default ProductContainer;