import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../images/logo.png';
import cartIcon from '../images/shopping-cart.png';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div id="search-cart">
            <input id="search-bar" type="search" name="searchbtn" placeholder="Search..."/>
            <label className="label" htmlFor="cart-icon"> : {localStorage.items ? JSON.parse(localStorage.items).length : 0}</label>
            <Link to="/cart"><img src={cartIcon} id="cart-icon" className="icon" name="cart-icon"/></Link>
          </div>
          <Link to="/"><img src={logo} id="logo"/></Link>

          <ul className="nav">
            <button className="hover">MENU</button>
            <div id="dropdown">
              <Link to="/" className="nav-li">HOME</Link>
              <Link to="/about" className="nav-li">ABOUT US</Link>
              <Link to="/FAQ" className="nav-li">FAQ</Link>
              <Link to="/blog" className="nav-li">ADARA'S BLOG</Link>
            </div>
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
