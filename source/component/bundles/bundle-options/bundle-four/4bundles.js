import React from 'react';
import { Link }  from 'react-router-dom';
import './styles.scss';
import bundlePic from '../../../images/spiral-curl-five-bundles.JPG';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';


class FourBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '4 Bundle Hair Texture',
      priceOne: '',
      priceTwo: '',
      priceThree: '',
      priceFour: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.cartItemCartCreate(this.state);
  }
  handleChange(event){
    console.log(event.target.name.name);
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div>
        <h5 className="header-links"><Link className="header-links" to="../../">Home </Link> > <Link className="header-links" to="../bundles">Bundles </Link>> 4 Bundles </h5>
        <h1>4 Bundles</h1>
        <div id="four-bundle-main">
          <div id="col1-bundle">
            <img src={bundlePic} width="75%"/>
          </div>
          <div id="col2-bundle">
            <form className="four-bundle-form" onSubmit={this.handleSubmit}>
              <select name="texture" id="4 Bundle Hair Texture" onChange={this.handleChange} required>
                <option value="" defaultValue>Select hair type...</option>
                <option value="kinky-curl">Brazilian Mink Kinky Curl</option>
                <option value="straight">Brazilian Mink Straight</option>
                <option value="body-wave">Brazilian Mink Body Wave</option>
              </select>
              <select name="priceOne" id="priceOne" onChange={this.handleChange} required>
                <option value="" defaultValue>Select length</option>
                <option name="12 Inches" value="65">12" $ 65.00 </option>
                <option name="14 Inches" value="70">14" $ 70.00 </option>
                <option name="16 Inches" value="75">16" $ 75.00 </option>
                <option name="18 Inches" value="80">18" $ 80.00 </option>
                <option name="20 Inches" value="85">20" $ 85.00 </option>
                <option name="22 Inches" value="90">22" $ 90.00 </option>
                <option name="24 Inches" value="95">24" $ 95.00 </option>
                <option name="26 Inches" value="100">26" $ 100.00 </option>
                <option name="28 Inches" value="105">28" $ 105.00 </option>
                <option name="30 Inches" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceTwo" id="priceTwo" onChange={this.handleChange} required>
                <option value="" defaultValue>Select length</option>
                <option name="12 Inches" value="65">12" $ 65.00 </option>
                <option name="14 Inches" value="70">14" $ 70.00 </option>
                <option name="16 Inches" value="75">16" $ 75.00 </option>
                <option name="18 Inches" value="80">18" $ 80.00 </option>
                <option name="20 Inches" value="85">20" $ 85.00 </option>
                <option name="22 Inches" value="90">22" $ 90.00 </option>
                <option name="24 Inches" value="95">24" $ 95.00 </option>
                <option name="26 Inches" value="100">26" $ 100.00 </option>
                <option name="28 Inches" value="105">28" $ 105.00 </option>
                <option name="30 Inches" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceThree" id="priceThree" onChange={this.handleChange} required>
                <option value="" defaultValue>Select length</option>
                <option name="12 Inches" value="65">12" $ 65.00 </option>
                <option name="14 Inches" value="70">14" $ 70.00 </option>
                <option name="16 Inches" value="75">16" $ 75.00 </option>
                <option name="18 Inches" value="80">18" $ 80.00 </option>
                <option name="20 Inches" value="85">20" $ 85.00 </option>
                <option name="22 Inches" value="90">22" $ 90.00 </option>
                <option name="24 Inches" value="95">24" $ 95.00 </option>
                <option name="26 Inches" value="100">26" $ 100.00 </option>
                <option name="28 Inches" value="105">28" $ 105.00 </option>
                <option name="30 Inches" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceFour" id="priceFour" onChange={this.handleChange} required>
                <option value="" defaultValue>Select length</option>
                <option name="12 Inches" value="65">12" $ 65.00 </option>
                <option name="14 Inches" value="70">14" $ 70.00 </option>
                <option name="16 Inches" value="75">16" $ 75.00 </option>
                <option name="18 Inches" value="80">18" $ 80.00 </option>
                <option name="20 Inches" value="85">20" $ 85.00 </option>
                <option name="22 Inches" value="90">22" $ 90.00 </option>
                <option name="24 Inches" value="95">24" $ 95.00 </option>
                <option name="26 Inches" value="100">26" $ 100.00 </option>
                <option name="28 Inches" value="105">28" $ 105.00 </option>
                <option name="30 Inches" value="110">30" $ 110.00 </option>
              </select>
              <button type="submit" id="four-bundle-button"><span>Add to Cart</span></button>
            </form>
          </div>
        </div>
        <h4 className="share-header">Share this product</h4>
        <div className="sharethis-inline-share-buttons"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state,
});
const mapDispatchToProps = (dispatch, getState) => ({
  cartItemCartCreate: item => dispatch(cartCreate(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FourBundle);