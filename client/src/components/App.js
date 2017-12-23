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
          {/* Maybe it's stupid, but it works!) */}
          <Route exact path='/' component={Home} />
          <Route exact path='/:category' component={Home} />
          <Route exact path='/:category/:child' component={Home} />
          <Route exact path="/:category/:child/:name/:model" component={(props) => <ProductContainer url={`/api${props.location.pathname}`}
                                                                                                     history={props.history} /> } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;