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
    console.log(this.props.location);
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
        <Switch location={isModal ? this.state.previousLocation : location}>
          {/* Maybe it's stupid, but it works!) */}
          <Route exact path='/' component={() => <Home store={this.props.store} /> } />
          <Route exact path='/:category' component={Home} />
          <Route exact path='/:category/:child' component={Home} />
          <Route exact path="/:category/:child/:name/:model"
                 component={(props) => <ProductContainer url={`/api${props.location.pathname}`}
                                                         history={props.history}
                                                         store={this.props.store} /> } />
        </Switch>
        {isModal ? <Route path='/basket' component={Basket} /> : null}
        <Footer/>
      </div>
    );
  }
}

export default App;