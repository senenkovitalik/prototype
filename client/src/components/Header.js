import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'yellow'}}>
        <h2>Header</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>About</li>
          <li><NavLink to={{
            pathname: `/basket`,
            // this is the trick!
            state: { modal: true }
          }}>Basket</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Header;