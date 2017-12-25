import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLink = {fontWeight: 'bold', color: 'red'};

class Header extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'yellow'}}>
        <h2>Header</h2>
        <ul>
          <li><NavLink exact to="/" activeStyle={activeLink}>Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={activeLink}>About</NavLink></li>
          <li>
            <NavLink to={{ pathname: `/basket`, state: { modal: true } }}
                     activeStyle={activeLink}
            >Basket</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;