import React from 'react';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import ProductItem from './ProductItem';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    fetch(this.props.url)
    .then((res) => {
      if (res.status >= 400) {
        console.log("Bad responce");
      }
      return res.json();
    })
    .then((prods) => {
      this.setState({
        products: prods
      });
    });
  }

  render() {
    return (
      <div>
        <p>List of products</p>
        {
          this.state.products.map((prod, i) =>
            <ProductItem key={i}
                         product={prod}
                         inBasket={!!_.find(this.props.prodsInBasket, prod)}
                         add={this.props.add} />
          )
        }
      </div>
    );
  }
}

export default ListContainer;