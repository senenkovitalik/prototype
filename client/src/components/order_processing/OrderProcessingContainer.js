import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import List from './List';
import Forms from './Forms';
import Summary from './Summary';
import OrderStatus from './OrderStatus';

class OrderProcessingContainer extends React.Component {
  constructor(props) {
    super(props);
    // it's bad pattern, but...
    this.state = {
      ...this.evalTotalValues(this.props),
      orderId: ''
    };

    this.sendOrder = this.sendOrder.bind(this);
  }

  sendOrder() {
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // send cookies
      body: JSON.stringify({
        name: 'Senenko Vitaliy',
        phone: '0930592340',
        delivery: 'self-checkout',
        products: this.props.products
      })
    }).then(response =>
      response.json()
    ).then(json => {
      console.log(json);
      this.setState({
        orderId: json.id
      });
    }).catch(ex => console.log("Parsing failed", ex));
  }

  evalTotalValues(props) {
    let totalCount = 0;
    let totalPrice = 0;
    props.products.forEach(p => {
      totalCount += p.count;
      totalPrice += p.count * p.product.price;
    });
    return {
      totalCount,
      totalPrice
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.evalTotalValues(nextProps));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}`} render={() =>
            <div>
              <List products={this.props.products} />

              <Forms {...this.props} sendOrder={this.sendOrder} />

              <hr />

              <Summary totalCount={this.state.totalCount}
                       totalPrice={this.state.totalPrice} />
            </div>
          } />
          <Route path={`${this.props.match.path}/status`}
                 render={() => <OrderStatus orderId={this.state.orderId} />} />
        </Switch>
      </div>
    );
  }
}

export default OrderProcessingContainer;