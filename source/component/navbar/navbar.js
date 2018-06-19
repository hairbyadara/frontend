import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './style.scss';
import logo from '../images/logo.png';
import cartIcon from '../footer/icons/shopping-cart.png';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    // let test = localStorage.items ? JSON.parse(localStorage.items) : undefined;
    console.log(this.props);
    // console.log('this is length', test.length);
    return (
      <BrowserRouter>
        <header>
          <nav>
            <div id="search-cart">
              <input id="search-bar" type="search" name="searchbtn" placeholder="Search..."/>
              <label htmlFor="cart-icon"> {this.props.cart.items ? this.props.cart.items.length : 0}</label>
              <Link to="/cart"><img src={cartIcon} className="icon" id="cart-icon" name="cart-icon"/></Link>
            </div>
            <img src={logo} width="15%" height="15%" id="logo"/>
            <ul id="nav">
              <Link className="nav-li" to="/">HOME</Link>
              <Link className="nav-li" to="/about">ABOUT US</Link>
              <Link className="nav-li" to="/FAQ">FAQ</Link>
              <Link className="nav-li" to="/blog">ADARA'S BLOG</Link>
            </ul>
          </nav>
        </header>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => ({
  cart: state,
});
export default connect(mapStateToProps)(Navbar);