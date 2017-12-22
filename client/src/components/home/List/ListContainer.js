import React from 'react';
import fetch from 'isomorphic-fetch';
import List from './List';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
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
      <List products={this.state.products} />
    );
  }
}

export default ListContainer;