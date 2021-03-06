import React from 'react';
import { Link }  from 'react-router-dom';
import './style.scss';
import straightClosure from '../../../images//straight-closure.JPG';
import straightFrontal from '../../../images//straight-frontal.JPG';
import bodyWaveClosure from '../../../images//body-wave-closure.JPG';
import kinkyClosure from '../../../images//kinky-curly-closure-main.JPG';
import kinkyFrontal from '../../../images//kinky-curl-frontal.JPG';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';


class BodyWaveClosure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'body-wave-closure',
      length : '',
      type: '',
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
        <h1>Brazilian Mink Body Wave Closure</h1>
        <div id="body-wave-closure-pic">
          <img src={bodyWaveClosure} width="100%" height="100%"/>
        </div>
        <div id="body-wave-closure-info">
          <h4>$ 95.00</h4>
          <form className="bodywave-closure-form" onSubmit={this.handleSubmit}>
            <p className="label">Length</p>
            <select name="length" id="body-wave-closure-length" onChange={this.handleChange} required>
              <option value="" defaultValue>Select length...</option>
              <option value="12in">12"</option>
              <option value="14in">14"</option>
              <option value="16in">16"</option>
              <option value="18in">18"</option>
              <option value="20in">20"</option>
            </select>
            <p className="label">Hair Type</p>
            <select name="type" id="body-wave-closure-type" onChange={this.handleChange} required>
              <option value="" defaultValue>Select hair type...</option>
              <option value="lace">Lace</option>
              <option value="silk">Silk</option>
            </select>
            <p className="label">Quantity</p>
            <select name="quantity" id="body-wave-closure-quantity" onChange={this.handleChange} required>
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
            <br/>
            <button id="body-wave-button" type="submit"><span>Add to Cart</span></button>
          </form>
        </div>
        <h5 className="content">
        A closure is a small piece of lace fabric, usually about 4"x4", with individual strands of hair ventilated through and knotted directly to the lace. Our Lace Closures are without a doubt undetectable and appear to be coming directly from your scalp. Our closures blend effortlessly with our bundles finishing off your style with a virtually seamless weave. We carry 12", 14", 16" in stock (18" and 20" available upon request.) All lace closures measure at 4"x4".
          <br/>
          Note: closure knots do not come bleached and this closure is a free part.
          <br/>
          Silk closures have a layer of silk as well as a layer of lace. Silk closures tend to be a little thicker than lace, but have more realistic scalp-like appearance due to the silk fabric. Silk closures provides a more natural "scalp". The "scalp" on the silk base closure is more human like than that of a lace closure, therefore requiring less preparation. Hair is individually implanted into the base, knotted, and secured with a strong adhesive. Closures are a great way to protect your natural hair from heat and or inclement weather. The measurement of our closures is the standard size of 4"x4". We carry 12", 14", 16" in stock (18" and 20" available upon request.)
        </h5>
        <div className="fb-share-button"id="share-links-bc" data-to="https://www.hairbyadara.com/closures/body-wave" data-layout="button" data-size="small" data-mobile-iframe="true">
          <h4>Share this product</h4>
          <Link to="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/closures/body-wave" target="_blank" className="share-button" className="fb-xfbml-parse-ignore share-facebook">Share</Link>
          <Link to="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/closures/body-wave" target="_blank" className="share-button" className="share-twitter">Tweet</Link>
          <Link to="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/closures/body-wave" target="_blank" className="share-button" className="share-pinterest">Pin it</Link>
          <Link to="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/closures/body-wave" target="_blank" className="share-button" className="share-fancy">Fancy</Link>
          <Link to="https://plus.google.com/share?url=https://www.hairbyadara.com/closures/body-wave" target="_blank" className="share-button" className="share-google">+1</Link>
        </div>
        <div>
          <h4>More from this collection</h4>
          <div className="closure-frontal-collection">
            <Link to="../closures/kinky-curl-closure"><img src={kinkyClosure} id="kc-collection-pic1" width="100%" height="100%"/></Link>
            <p>Brazilian Kinky Curl Closure</p>
          </div>
          <div className="closure-frontal-collection">
            <Link to="../closures/kinky-curl-frontal"><img src={kinkyFrontal}  id="kf-collection-pic1" width="100%" height="100%"/></Link>
            <p>Brazilian Kinky Curl Frontal</p>
          </div>
          <div className="closure-frontal-collection">
            <Link to="../closures/straight-closure"><img src={straightClosure}  id="sc-collection-pic1" width="100%" height="100%"/></Link>
            <p>Brazilian Mink Straight Closure</p>
          </div>
          <div className="closure-frontal-collection">
            <Link to="../closures/straight-frontal"><img src={straightFrontal}  id="sf-collection-pic1" width="100%" height="100%"/></Link>
            <p>Brazilian Mink Straight Frontal</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyWaveClosure);