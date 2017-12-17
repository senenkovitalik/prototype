import React from 'react';
import fetch from 'isomorphic-fetch';

class List extends React.Component {
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
        })
      });
  }

  render() {
    return (
      <div>
        {
          this.state.products.map((prod, i) => {
            <div key={i}>
              <ul>
                <li>{prod.name}</li>
                <li>{prod.model}</li>
              </ul>
            </div>
          })
        }
      </div>
    );
  }
}

export default List;