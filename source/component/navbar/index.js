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
            <input type="search" name="searchbtn"/>
            <a href="/cart"><img src={require(`${__dirname}/../footer/icons/shopping-cart.png`)} className="icon"/></a>
          </ul>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Adara's Blog</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
