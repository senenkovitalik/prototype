import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header';
import Home from "./home/Home";
import ListContainer from './home/List/ListContainer';
import ProductContainer from './product/ProductContainer';
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/*<Route component={Home} />*/}
          <Route exact path='/:category' component={({location}) => <ListContainer url={`/api${location.pathname}`} /> } />
          <Route exact path='/:category/:child' component={({location}) => <ListContainer url={`/api${location.pathname}`} /> }/>
          <Route exact path="/:category/:child/:name/:model" component={({location}) => <ProductContainer url={`/api${location.pathname}`} /> } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;