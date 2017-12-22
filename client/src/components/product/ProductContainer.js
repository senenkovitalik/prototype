import React from 'react';
import fetch from 'isomorphic-fetch';

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
      console.log(p);
      this.setState({
        product: p
      })
    });
  }

  render() {
    return (
      <Product p={this.state.product} />
    );
  }
}

export default ProductContainer;