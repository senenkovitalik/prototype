import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import List from "./List";

class Products extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/:category' render={({location}) => <List url={`/api${location.pathname}`} /> }/>
        <Route path='/:category/:child' render={({location}) => <List url={`/api${location.pathname}`} /> }/>
      </Switch>
    );
  }
}

export default Products;