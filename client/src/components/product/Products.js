import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import ListContainer from "../home/List/ListContainer";

class Products extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/:category' component={({location}) => <ListContainer url={`/api${location.pathname}`} /> } />
        <Route path='/:category/:child' component={({location}) => <ListContainer url={`/api${location.pathname}`} /> }/>
      </Switch>
    );
  }
}

export default Products;