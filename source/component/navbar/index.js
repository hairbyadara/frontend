import React from 'react';
import './style.scss';
import logo from '../images/logo.png';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav>
          <div id="search-cart">
            <input id="search-bar" type="search" name="searchbtn" placeholder="Search..."/>
            <label for="cart-icon">Cart</label>
            <a href="/cart"><img src={require(`${__dirname}/../footer/icons/shopping-cart.png`)} className="icon" id="cart-icon" name="cart-icon"/></a>
          </div>
          <img src={logo} width="15%" height="15%" id="logo"/>
          <ul id="nav">
            <li className="nav-li"><a href="/">HOME</a></li>
            <li className="nav-li"><a href="/about">ABOUT US</a></li>
            <li className="nav-li"><a href="/faq">FAQ</a></li>
            <li className="nav-li"><a href="/blog">ADARA'S BLOG</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
