import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
