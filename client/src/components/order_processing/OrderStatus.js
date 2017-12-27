import React from 'react';

class OrderStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.fetchStatus(nextProps.orderId);
  }

  fetchStatus(orderId) {
    fetch(`/api/order/status/${orderId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        status: json.status
      });
    }).catch(ex => {
      console.log("Exception: ", ex);
      this.setState({
        status: false
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Order status</h3>
        {
          !!this.state.status
            ? <p>Your order successfully confirmed</p>
            : <p>Sorry. Please, try later. Something happens.</p>
        }
      </div>
    );
  }
};

export default OrderStatus;