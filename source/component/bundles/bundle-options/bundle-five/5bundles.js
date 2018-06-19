import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import bundlePic from '../../../images/spiral-curl-five-bundles.JPG';
import './styles.scss';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';

class FiveBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item
      ? this.props.item
      : { 
        texture: '',
        priceOne: '',
        priceTwo: '',
        priceThree: '',
        priceFour: '',
        priceFive: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.cartItemCartCreate(this.state);
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return ( 
      <div>
        <div id="five-bundle-main">
          <div id="col1">
            <img src={bundlePic} width="75%" height=""/>
          </div>
          <div id="col2"> 
            <h1>5 Bundles</h1>
            <form className="five-bundle-form" onSubmit={this.handleSubmit}>
              <select name="texture" id="5-bundle-hair-texture" onChange={this.handleChange}required>
                <option value="" defaultValue>Select hair type...</option>
                <option value="kinky-curl">Brazilian Mink Kinky Curl</option>
                <option value="straight">Brazilian Mink Straight</option>
                <option value="body-wave">Brazilian Mink Body Wave</option>
              </select>
              <select name="priceOne" id="price-one" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option className="12in" value="65">12" $ 65.00 </option>
                <option className="14in" value="70">14" $ 70.00 </option>
                <option className="16in" value="75">16" $ 75.00 </option>
                <option className="18in" value="80">18" $ 80.00 </option>
                <option className="20in" value="85">20" $ 85.00 </option>
                <option className="22in" value="90">22" $ 90.00 </option>
                <option className="24in" value="95">24" $ 95.00 </option>
                <option className="26in" value="100">26" $ 100.00 </option>
                <option className="28in" value="105">28" $ 105.00 </option>
                <option className="30in" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceTwo" id="price-two" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option className="12in" value="65">12" $ 65.00 </option>
                <option className="14in" value="70">14" $ 70.00 </option>
                <option className="16in" value="75">16" $ 75.00 </option>
                <option className="18in" value="80">18" $ 80.00 </option>
                <option className="20in" value="85">20" $ 85.00 </option>
                <option className="22in" value="90">22" $ 90.00 </option>
                <option className="24in" value="95">24" $ 95.00 </option>
                <option className="26in" value="100">26" $ 100.00 </option>
                <option className="28in" value="105">28" $ 105.00 </option>
                <option className="30in" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceThree" id="price-three" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option name="12in" value="65">12" $ 65.00 </option>
                <option name="14in" value="70">14" $ 70.00 </option>
                <option name="16in" value="75">16" $ 75.00 </option>
                <option name="18in" value="80">18" $ 80.00 </option>
                <option name="20in" value="85">20" $ 85.00 </option>
                <option name="22in" value="90">22" $ 90.00 </option>
                <option name="24in" value="95">24" $ 95.00 </option>
                <option name="26in" value="100">26" $ 100.00 </option>
                <option name="28in" value="105">28" $ 105.00 </option>
                <option name="30in" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceFour" id="price-four" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option name="12in" value="65">12" $ 65.00 </option>
                <option name="14in" value="70">14" $ 70.00 </option>
                <option name="16in" value="75">16" $ 75.00 </option>
                <option name="18in" value="80">18" $ 80.00 </option>
                <option name="20in" value="85">20" $ 85.00 </option>
                <option name="22in" value="90">22" $ 90.00 </option>
                <option name="24in" value="95">24" $ 95.00 </option>
                <option name="26in" value="100">26" $ 100.00 </option>
                <option name="28in" value="105">28" $ 105.00 </option>
                <option name="30in" value="110">30" $ 110.00 </option>
              </select>
              <select name="priceFive" id="price-five" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option name="12in" value="65">12" $ 65.00 </option>
                <option name="14in" value="70">14" $ 70.00 </option>
                <option name="16in" value="75">16" $ 75.00 </option>
                <option name="18in" value="80">18" $ 80.00 </option>
                <option name="20in" value="85">20" $ 85.00 </option>
                <option name="22in" value="90">22" $ 90.00 </option>
                <option name="24in" value="95">24" $ 95.00 </option>
                <option name="26in" value="100">26" $ 100.00 </option>
                <option name="28in" value="105">28" $ 105.00 </option>
                <option name="30in" value="110">30" $ 110.00 </option>
              </select>
              <button type="submit" id="five-bundle-button"><span>Add to Cart</span></button>
            </form>
            <div className="fb-share-button" data-to="https://www.hairbyadara.com/bundles/5-bundles" data-layout="button" data-size="small" data-mobile-iframe="true">
              <h3>Share this product</h3>
              <BrowserRouter>
                <React.Fragment>
                  <Link target="_blank" to="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/bundles/5-bundles" className="fb-xfbml-parse-ignore">Share</Link>
                  <Link target="_blank" to="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/bundles/5-bundles" className="share-twitter">Tweet</Link>
                  <Link target="_blank" to="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/bundles/5-bundles&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" className="share-pinterest">Pin it</Link>
                  <Link target="_blank" to="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/bundles/5-bundles&Title=Brazilian%20Kinky%20Curl&cart=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" className="share-fancy">Fancy</Link>
                  <Link target="_blank" to="https://plus.google.com/share?url=https://www.hairbyadara.com/bundles/5-bundles" className="share-google">+1</Link>
                </React.Fragment>
              </BrowserRouter>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FiveBundle);
