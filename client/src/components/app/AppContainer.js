import React from 'react';
import store from './Store';
import { Route } from 'react-router-dom';
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
     <Route render={(props) => <App store={this.state.store} {...props} /> } />
    );
  }
}

export default AppContainer;