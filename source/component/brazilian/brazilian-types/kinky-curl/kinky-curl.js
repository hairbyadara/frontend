import React from 'react';
import { Link } from 'react-router-dom';
import bkcPic from '../../../images//kinky-curl-3–bundles.JPG';
import bwPic from '../../../images/body-wave-three-brazilian-front-angle.JPG';
import sPic from '../../../images/straight-3-bundles.JPG';
import './styles.scss';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';


class BrazilianKinkyCurl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'brazilian kinky-curl',
      price: 80,
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
        <h1>Brazilian Kinky Curl</h1>
        <div id="col1-kc">
          <img src={bkcPic} id="kc-image" width="100%" height="100%"/>
        </div>
        <div id="col2-kc">
          <h4>$ 80.00</h4>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button type="submit"><span>Add to Cart</span></button>
          </form>
        </div> 
        <h5 className="content">Our kinky curly hair allows our customers to experience a wash and go look. This hair offers the same standard quality in softness, but amps up the volume with extra coils with its curly texture from root to tip. It is the tightest curl pattern that we carry. 
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
                All bundles can be cut, colored, bleached, and straightened (we recommend a professional for coloring.)
            </li>
            <li>
                Can last 12-18 months with proper care
            </li>
          </ul>
            Note: Excessive heat/color can damage texture and curl pattern of your bundles.
        </h5>
        <div className="placeholder kc-ph">
          <div className="fb-share-button" data-to="https://www.hairbyadara.com/brazilian/kinky-curl" data-layout="button" data-size="small" data-mobile-iframe="true">
            <h4>Share this product</h4>
            <Link to="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/brazilian-kinky-curl" target="_blank" className="share-button" className="fb-xfbml-parse-ignore share-facebook">Share</Link>
            <Link to="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/brazilian-kinky-curl" target="_blank" className="share-button" className="share-twitter">Tweet</Link>
            <Link to="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/brazilian-kinky-curl&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" target="_blank" className="share-button" className="share-pinterest">Pin it</Link>
            <Link to="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/brazilian-kinky-curl&Title=Brazilian%20Kinky%20Curl&Category=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" target="_blank" className="share-button" className="share-fancy">Fancy</Link>
            <Link to="https://plus.google.com/share?url=https://www.hairbyadara.com/brazilian-kinky-curl" target="_blank" className="share-button" className="share-google">+1</Link>
          </div>
        </div>
        <h4>More from this collection</h4>
        <div className="brazilian-collection-pic">
          <div className="brazilian-collection">
            <Link to="../brazilian/straight"><img src={sPic} width="75%" height="75%"/></Link>
            <p>Brazilian Mink Straight</p>
          </div>
          <div className="brazilian-collection">
            <Link to="../brazilian/body-wave"><img src={bwPic} width="75%" height="75%"/></Link>
            <p>Brazilian Mink Body-Wave</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrazilianKinkyCurl);