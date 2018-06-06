import React from 'react';
import bundlePic from '../../../images/spiral-curl-five-bundles.JPG';
import './styles.scss';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/index';

class FiveBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cart
      ? this.props.cart
      : { 
        texture: '',
        lengthOne: '',
        lengthTwo: '',
        lengthThree: '',
        lengthFour: '',
        lengthFive: '',
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
              <select name="lengthOne" id="length-one" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option value="12in">12" $ 65.00 </option>
                <option value="14in">14" $ 70.00 </option>
                <option value="16in">16" $ 75.00 </option>
                <option value="18in">18" $ 80.00 </option>
                <option value="20in">20" $ 85.00 </option>
                <option value="22in">22" $ 90.00 </option>
                <option value="24in">24" $ 95.00 </option>
                <option value="26in">26" $ 100.00 </option>
                <option value="28in">28" $ 105.00 </option>
                <option value="30in">30" $ 110.00 </option>
              </select>
              <select name="lengthTwo" id="length-two" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option value="12in">12" $ 65.00 </option>
                <option value="14in">14" $ 70.00 </option>
                <option value="16in">16" $ 75.00 </option>
                <option value="18in">18" $ 80.00 </option>
                <option value="20in">20" $ 85.00 </option>
                <option value="22in">22" $ 90.00 </option>
                <option value="24in">24" $ 95.00 </option>
                <option value="26in">26" $ 100.00 </option>
                <option value="28in">28" $ 105.00 </option>
                <option value="30in">30" $ 110.00 </option>
              </select>
              <select name="lengthThree" id="length-three" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option value="12in">12" $ 65.00 </option>
                <option value="14in">14" $ 70.00 </option>
                <option value="16in">16" $ 75.00 </option>
                <option value="18in">18" $ 80.00 </option>
                <option value="20in">20" $ 85.00 </option>
                <option value="22in">22" $ 90.00 </option>
                <option value="24in">24" $ 95.00 </option>
                <option value="26in">26" $ 100.00 </option>
                <option value="28in">28" $ 105.00 </option>
                <option value="30in">30" $ 110.00 </option>
              </select>
              <select name="lengthFour" id="length-four" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option value="12in">12" $ 65.00 </option>
                <option value="14in">14" $ 70.00 </option>
                <option value="16in">16" $ 75.00 </option>
                <option value="18in">18" $ 80.00 </option>
                <option value="20in">20" $ 85.00 </option>
                <option value="22in">22" $ 90.00 </option>
                <option value="24in">24" $ 95.00 </option>
                <option value="26in">26" $ 100.00 </option>
                <option value="28in">28" $ 105.00 </option>
                <option value="30in">30" $ 110.00 </option>
              </select>
              <select name="lengthFive" id="length-five" onChange={this.handleChange}required>
                <option value="" defaultValue>Select length</option>
                <option value="12in">12" $ 65.00 </option>
                <option value="14in">14" $ 70.00 </option>
                <option value="16in">16" $ 75.00 </option>
                <option value="18in">18" $ 80.00 </option>
                <option value="20in">20" $ 85.00 </option>
                <option value="22in">22" $ 90.00 </option>
                <option value="24in">24" $ 95.00 </option>
                <option value="26in">26" $ 100.00 </option>
                <option value="28in">28" $ 105.00 </option>
                <option value="30in">30" $ 110.00 </option>
              </select>
              <button type="submit" id="five-bundle-button"><span>Add to Cart</span></button>
            </form>
            <div className="fb-share-button" data-href="https://www.hairbyadara.com/bundles/5-bundles" data-layout="button" data-size="small" data-mobile-iframe="true">
              <h3>Share this product</h3>
              <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/bundles/5-bundles" className="fb-xfbml-parse-ignore">Share</a>
              <a target="_blank" href="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/bundles/5-bundles" className="share-twitter">Tweet</a>
              <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/bundles/5-bundles&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" className="share-pinterest">Pin it</a>
              <a target="_blank" href="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/bundles/5-bundles&Title=Brazilian%20Kinky%20Curl&cart=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" className="share-fancy">Fancy</a>
              <a target="_blank" href="https://plus.google.com/share?url=https://www.hairbyadara.com/bundles/5-bundles" className="share-google">+1</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  carts: state,
});
const mapDispatchToProps = (dispatch, getState) => ({
  cartItemCartCreate: cart => dispatch(cartCreate(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiveBundle);
