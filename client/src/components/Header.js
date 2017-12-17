import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'yellow'}}>
        <h2>Header</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Header;