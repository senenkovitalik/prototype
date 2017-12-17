import React from 'react';
import Header from './Header';
import Home from "./home/Home";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer/>
      </div>
    );
  }
}

export default App;