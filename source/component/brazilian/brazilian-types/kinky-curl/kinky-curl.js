import React from 'react';
import bkcPic from '../../../images/kinky-curl-3–bundles.JPG';
import bwPic from '../../../images/body-wave-three-brazilian-front-angle.JPG';
import sPic from '../../../images/straight-3-bundles.JPG';
import './style.scss';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/index';


class BrazilianKinkyCurl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      length : '',
      quantity: '',
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
        <div id="col1-kc">
          <img src={bkcPic} id="kc-image" width="90%" height="52%"/>
        </div>
        <div id="col2-kc">
          <h1>Brazilian Kinky Curl</h1>
          <h3>$ 80.00</h3>
          <p>Length</p>
          <form className="brazilian-kinky-form" onSubmit={this.handleSubmit}>
            <select name="length" id="BKCLength" onChange={this.handleChange} required>
              <option value="" defaultValue>Select hair type...</option>
              <option value="14in">14"</option>
              <option value="16in">16"</option>
              <option value="18in">18"</option>
              <option value="20in">20"</option>
              <option value="22in">22"</option>
              <option value="24in">24"</option>
              <option value="26in">26"</option>
              <option value="28in">28"</option>
              <option value="30in">30"</option>
            </select>
            <p>Quantity</p>
            <select name="quantity" id="BKCQuantity" onChange={this.handleChange} required>
              <option value="" defaultValue>Select quantity...</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="one">5</option>
              <option value="one">6</option>
              <option value="one">7</option>
              <option value="one">8</option>
              <option value="one">9</option>
              <option value="ten">10</option>
            </select>
            <button type="submit"><span>Add to Cart</span></button>
          </form>
          <h5>
        Our kinky curly hair allows our customers to experience a wash and go look. This hair offers the same standard quality in softness, but amps up the volume with extra coils with its curly texture from root to tip. It is the tightest curl pattern that we carry. 
            <ul>
              <li>
              Grade 7A Virgin Remy hair
              </li>
              <li>
              Natural (1B) color; No two bundles are identical   
              </li>
              <li>
              3.5-4.0 oz per bundle
              </li>
              <li>
              Minimal shedding and tangle-free
              </li>
              <li>
              Minimal shedding and tangle-free
              </li>
              <li>
              All bundles can be cut, colored, bleached, and straightened (we recommend a professional for coloring.) 
              </li>
              <li>
              Can last 12-18 months with proper care
              </li>
            </ul>
          Note: Excessive heat/color can damage texture and curl pattern of your bundles. 
          </h5>
          <div className="fb-share-button" data-href="https://www.hairbyadara.com/brazilian/kinky-curl" data-layout="button" data-size="small" data-mobile-iframe="true">
            <h3>Share this product</h3>
            <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/brazilian-kinky-curl" className="fb-xfbml-parse-ignore">Share</a>
            <a target="_blank" href="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/brazilian-kinky-curl" className="share-twitter">Tweet</a>
            <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/brazilian-kinky-curl&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" className="share-pinterest">Pin it</a>
            <a target="_blank" href="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/brazilian-kinky-curl&Title=Brazilian%20Kinky%20Curl&Category=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" className="share-fancy">Fancy</a>
            <a target="_blank" href="https://plus.google.com/share?url=https://www.hairbyadara.com/brazilian-kinky-curl" className="share-google">+1</a>
          </div>
        </div>
        <div id="brazilian-collection-pic3">
          <h3>More from this collection</h3>
          <div className="brazilian-collection">
            <a href="https://www.hairbyadara.com/brazilian/straight"><img src={bwPic} width="350" height="350"/></a>
            <p>Brazilian Mink Straight</p>
          </div>
          <div className="brazilian-collection">
            <a href="https://www.hairbyadara.com/brazilian/body-wave"><img src={sPic} width="350" height="350"/></a>
            <p>Brazilian Mink Body-Wave</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrazilianKinkyCurl);