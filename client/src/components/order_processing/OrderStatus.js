import React from 'react';

class OrderStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null
    }
  }

  componentWillReceiveProps() {
    this.fetchStatus();
  }

  componentDidMount() {
    this.fetchStatus();
  }

  fetchStatus() {
    fetch(`/api/order/status/${this.props.orderId}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    }).catch(ex => console.log("Exception: ", ex));
  }

  render() {
    return (
      <div>
        <h3>Order status</h3>
        <p>{this.props.orderId}</p>
      </div>
    );
  }
};

export default OrderStatus;