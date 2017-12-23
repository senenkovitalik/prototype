import React from 'react';
import store from './Store';
import App from "./App";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // store contain products that in basket
      store: store
    }
  }

  render() {
    return (
      <App store={this.state.store} />
    );
  }
}

export default AppContainer;