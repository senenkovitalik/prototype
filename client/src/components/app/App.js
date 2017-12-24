import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Header from '../Header';
import Home from "../home/Home";
import ProductContainer from '../product/ProductContainer';
import Basket from '../basket/Basket';
import Footer from "../Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    );

    return (
      <div>
        <Header />
        <Switch location={isModal ? this.previousLocation : location}>
          {/* Maybe it's stupid, but it works!) */}
          <Route exact path='/' render={() => <Home /> } />
          <Route exact path='/:category' render={() => <Home /> } />
          <Route exact path='/:category/:child' render={() => <Home /> } />
          <Route exact path="/:category/:child/:name/:model"
                 render={(props) => <ProductContainer url={`/api${props.location.pathname}`}
                                                      history={props.history}
                                                      products={this.props.products}
                                                      add={this.props.add} /> } />
        </Switch>
        {isModal ? <Route path='/basket'
                          render={(props) => <Basket products={this.props.products}
                                                     remove={this.props.remove}
                                                     {...props} /> }/>
          : null}
        <Footer/>
      </div>
    );
  }
}

export default App;