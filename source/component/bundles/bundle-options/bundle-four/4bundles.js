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
      name: '',
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
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div>
        <h1>4 Bundle Deal</h1>
        <div id="four-bundle-main">
      
          <div id="col1-bundle">
            <img src={bundlePic} width="75%"/>
          </div>
          <div id="col2-bundle">
            <form className="four-bundle-form" onSubmit={this.handleSubmit}>
              <select name="texture" id="4-bundle-hair-texture" onChange={this.handleChange} required>
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
        <div className="fb-share-button" data-to="https://www.hairbyadara.com/bundles/4-bundles" data-layout="button" data-size="small" data-mobile-iframe="true">
          <h3 className="share-header">Share this product</h3>
          <Link to="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/bundles/4-bundles" target="_blank" className="share-button" className="fb-xfbml-parse-ignore share-facebook">Share</Link>
          <Link to="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/bundles/4-bundles" target="_blank" className="share-button" className="share-twitter">Tweet</Link>
          <Link to="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/bundles/4-bundles&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" target="_blank" className="share-button" className="share-pinterest">Pin it</Link>
          <Link to="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/bundles/4-bundles&Title=Brazilian%20Kinky%20Curl&Category=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" target="_blank" className="share-button" className="share-fancy">Fancy</Link>
          <Link to="https://plus.google.com/share?url=https://www.hairbyadara.com/bundles/4-bundles" target="_blank" className="share-button" className="share-google">+1</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(FourBundle);