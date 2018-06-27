import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../images/logo.png';
import cartIcon from '../footer/icons/shopping-cart.png';
import {connect} from 'react-redux';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div id="search-cart">
            <input id="search-bar" type="search" name="searchbtn" placeholder="Search..."/>
            <label htmlFor="cart-icon"> {this.props.cart.items ? this.props.cart.items.length : 0}</label>
            <Link to="/cart"><img src={cartIcon} className="icon" id="cart-icon" name="cart-icon"/></Link>
          </div>
          <img src={logo} width="15%" height="15%" id="logo"/>
          <ul id="nav">
            <Link to="/" id="nav-li">HOME</Link>
            <Link to="/about" id="nav-li">ABOUT US</Link>
            <Link to="/FAQ" id="nav-li">FAQ</Link>
            <Link to="/blog" id="nav-li">ADARA'S BLOG</Link>
          </ul>
        </nav>
      </header>
    );
  }
}

let mapStateToProps = state =>  ({
  cart: state,
});

export default connect(mapStateToProps, null)(Navbar);
