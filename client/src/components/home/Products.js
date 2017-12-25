import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import ListContainer from "./List/ListContainer";

class Products extends React.Component {
  render() {
    const sameProps = {
      prodsInBasket: this.props.prodsInBasket,
      add: this.props.add
    };

    return (
      <Switch>
        <Route exact path='/'
               render={() => <ListContainer url={`/api/random`} {...sameProps} />} />

        <Route exact path='/:category'
               render={({location}) => <ListContainer url={`/api${location.pathname}`} {...sameProps} /> } />

        <Route exact path='/:category/:child'
               render={({location}) => <ListContainer url={`/api${location.pathname}`} {...sameProps} /> }/>
      </Switch>
    );
  }
}

export default Products;