import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from './List';

class OrderProcessingContainer extends React.Component {
  constructor(props) {
    super(props);
    // it's bad pattern, but...
    this.state = {
      ...this.evalTotalValues(this.props)
    };
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
    const confirm = (e) => {
      e.preventDefault();
      this.props.history.push(`${this.props.match.path}/status`);
    };

    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}`} render={() =>
            <div>
              <List products={this.props.products} />

              <h3>User data</h3>

              <form>
                <label>User name <input type="text" name="username" /></label><br />
                <label>Phone <input type="tel" name="phone" /></label><br />
                <button type="button">Accept</button>
              </form>

              <hr />

              <h3>Delivery</h3>

              <form>
                <label>Type of delivery
                  <select>
                    <option>Self-checkout</option>
                    <option>By courier (additional fee)</option>
                  </select>
                </label><br />
                <label>Address <input type="text" /></label><br />

                <button type="button" onClick={confirm}>Confirm</button>
              </form>

              <hr />

              <table>
                <tbody>
                <tr>
                  <td>Number of products:</td>
                  <td>{this.state.totalCount}</td>
                </tr>
                <tr>
                  <td>Total price:</td>
                  <td>{this.state.totalPrice}</td>
                </tr>
                </tbody>
              </table>

            </div>
          } />
          <Route path={`${this.props.match.path}/status`} render={() => <div>Order status</div>} />
        </Switch>
      </div>
    );
  }
}

export default OrderProcessingContainer;