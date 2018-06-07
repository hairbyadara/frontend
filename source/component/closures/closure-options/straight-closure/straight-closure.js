import React from 'react';
import './style.scss';
import straightClosure from '../../../images/straight-closure.JPG';
import straightFrontal from '../../../images/straight-frontal.JPG';
import bodyWaveClosure from '../../../images/body-wave-closure.JPG';
import kinkyClosure from '../../../images/kinky-curly-closure-main.JPG';
import kinkyFrontal from '../../../images/kinky-curl-frontal.JPG';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';


class StraightClosure extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
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
        <div id="straight-closure-pic">
          <img src={straightClosure} width="100%" height="100%"/>
        </div>
        <div id="straight-closure-info">
          <h1>Brazilian Mink Straight Closure</h1>
          <h3>$ 95.00</h3>
          <form className="straight-closure-form" onSubmit={this.handleSubmit}>        
            <p className="label">Length</p>
            <select name="length" id="straight-closure-length" onChange={this.handleChange} required>
              <option value="" defaultValue>Select length...</option>
              <option value="12in">12"</option>
              <option value="14in">14"</option>
              <option value="16in">16"</option>
              <option value="18in">18"</option>
              <option value="20in">20"</option>
            </select>
            <p className="label">Hair Type</p>
            <select name="type" id="straight-closure-type" onChange={this.handleChange} required>
              <option value="" defaultValue>Select hair type...</option>
              <option value="lace">Lace</option>
              <option value="silk">Silk</option>
            </select>
            <p className="label">Quantity</p>
            <select name="quantity" id="straight-closure-quantity" onChange={this.handleChange} required>
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
        A closure is a small piece of lace fabric, usually about 4"x4", with individual strands of hair ventilated through and knotted directly to the lace. Our Lace Closures are without a doubt undetectable and appear to be coming directly from your scalp. Our closures blend effortlessly with our bundles finishing off your style with a virtually seamless weave. We carry 12", 14", 16" in stock (18" and 20" available upon request.) All lace closures measure at 4"x4".
            <br/>
          Note: closure knots do not come bleached and this closure is a free part.
            <br/>
          Silk closures have a layer of silk as well as a layer of lace. Silk closures tend to be a little thicker than lace, but have more realistic scalp-like appearance due to the silk fabric. Silk closures provides a more natural "scalp". The "scalp" on the silk base closure is more human like than that of a lace closure, therefore requiring less preparation. Hair is individually implanted into the base, knotted, and secured with a strong adhesive. Closures are a great way to protect your natural hair from heat and or inclement weather. The measurement of our closures is the standard size of 4"x4". We carry 12", 14", 16" in stock (18" and 20" available upon request.)
          </h5>
          <div className="fb-share-button" data-href="https://www.hairbyadara.com/closure/straight-closure" data-layout="button" data-size="small" data-mobile-iframe="true">
            <h3>Share this product</h3>
            <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/closure/straight-closure" className="fb-xfbml-parse-ignore">Share</a>
            <a target="_blank" href="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/closure/straight-closure" className="share-twitter">Tweet</a>
            <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/closure/straight-closure" className="share-pinterest">Pin it</a>
            <a target="_blank" href="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/closure/straight-closure" className="share-fancy">Fancy</a>
            <a target="_blank" href="https://plus.google.com/share?url=https://www.hairbyadara.com/closure/straight-closure" className="share-google">+1</a>
          </div>
        </div>
        <div>
          <h3>More from this collection</h3>
          <div className="closure-frontal-collection">
            <a href="https://www.hairbyadara.com/closures/body-wave-closure"><img src={bodyWaveClosure} id="bw-collection-pic3" width="100%" height="100%"/></a>
            <p>Brazilian Body Wave Closure</p>
          </div>
          <div className="closure-frontal-collection">
            <a href="https://www.hairbyadara.com/closures/kinky-curl-closure"><img src={kinkyClosure} id="kc-collection-pic3" width="100%" height="100%"/></a>
            <p>Brazilian Kinky Curl Closure</p>
          </div>
          <div className="closure-frontal-collection">
            <a href="https://www.hairbyadara.com/closures/kinky-curl-frontal"><img src={kinkyFrontal} id="kf-collection-pic3" width="100%" height="100%"/></a>
            <p>Brazilian Kinky Curl Frontal</p>
          </div>
          <div className="closure-frontal-collection">
            <a href="https://www.hairbyadara.com/closures/straight-frontal"><img src={straightFrontal} altid="sf-collection-pic3" width="100%" height="100%"/></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(StraightClosure);