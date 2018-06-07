import React from 'react';
import './style.scss';
import logo from '../images/logo.png';
import cartIcon from '../footer/icons/shopping-cart.png';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav>
          <div id="search-cart">
            <input id="search-bar" type="search" name="searchbtn" placeholder="Search..."/>
            <label htmlFor="cart-icon">Cart:{this.props.cart.items ? this.props.cart.items.length : 0}</label>
            <a href="/cart"><img src={cartIcon} className="icon" id="cart-icon" name="cart-icon"/></a>
          </div>
          <img src={logo} width="15%" height="15%" id="logo"/>
          <ul id="nav">
            <li className="nav-li"><a href="/">HOME</a></li>
            <li className="nav-li"><a href="/about">ABOUT US</a></li>
            <li className="nav-li"><a href="/FAQ">FAQ</a></li>
            <li className="nav-li"><a href="/blog">ADARA'S BLOG</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  cart: state,
});
export default connect(mapStateToProps)(Navbar);