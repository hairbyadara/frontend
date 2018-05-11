import React from 'react';
import straightClosure from '../../../images/straight-closure.JPG';
import straightFrontal from '../../../images/straight-frontal.JPG';
import bodyWaveClosure from '../../../images/body-wave-closure.JPG';
import kinkyClosure from '../../../images/kinky-curly-closure-main.JPG';
import kinkyFrontal from '../../../images/kinky-curl-frontal.JPG';

export default class KinkyCurlFrontal extends React.Component {
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
  handleChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddToCart(this.state);
    this.setState({
      length: '',
      quantity: '',
    });
  }
  render() { 
    return ( 
      <div>
        <h1>Brazilian Kinky Curl Frontal</h1>
        <img src={kinkyFrontal} width="35%" height="35%"/>
        <h3>$ 145.00</h3>
        <p>Length</p>
        <select name="kinky frontal length" id="kinky-frontal-length">
          <option value="12in">12"</option>
          <option value="14in">14"</option>
          <option value="16in">16"</option>
          <option value="18in">18"</option>
        </select>
        <p>Hair Type</p>
        <select name="kinky frontal type" id="kinky-frontal-type">
          <option value="lace">Lace</option>
        </select>
        <p>Quantity</p>
        <select name="kinky frontal quantity" id="kinky-frontal-quantity">
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
        <br/>
        <button type="submit"><span>Add to Cart</span></button>
        <p>
        A closure is a small piece of lace fabric, usually about 4"x4", with individual strands of hair ventilated through and knotted directly to the lace. Our Lace Closures are without a doubt undetectable and appear to be coming directly from your scalp. Our closures blend effortlessly with our bundles finishing off your style with a virtually seamless weave. We carry 12", 14", 16" in stock (18" and 20" available upon request.) All lace closures measure at 4"x4".
          <br/>
          Note: closure knots do not come bleached and this closure is a free part.
          <br/>
          Silk closures have a layer of silk as well as a layer of lace. Silk closures tend to be a little thicker than lace, but have more realistic scalp-like appearance due to the silk fabric. Silk closures provides a more natural "scalp". The "scalp" on the silk base closure is more human like than that of a lace closure, therefore requiring less preparation. Hair is individually implanted into the base, knotted, and secured with a strong adhesive. Closures are a great way to protect your natural hair from heat and or inclement weather. The measurement of our closures is the standard size of 4"x4". We carry 12", 14", 16" in stock (18" and 20" available upon request.)
        </p>
        {/* <div class="fb-share-button" data-href="https://www.hairbyadara.com/brazilian/kinky-curl" data-layout="button" data-size="small" data-mobile-iframe="true">
          <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/brazilian-kinky-curl" class="fb-xfbml-parse-ignore">Share</a>
          <a target="_blank" href="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/brazilian-kinky-curl" class="share-twitter">Tweet</a>
          <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/brazilian-kinky-curl&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" class="share-pinterest">Pin it</a>
          <a target="_blank" href="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/brazilian-kinky-curl&Title=Brazilian%20Kinky%20Curl&Category=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" class="share-fancy">Fancy</a>
          <a target="_blank" href="https://plus.google.com/share?url=https://www.hairbyadara.com/brazilian-kinky-curl" class="share-google">+1</a>
        </div> */}
        <div>
          <h3>More from this collection</h3>
          <a href="https://www.hairbyadara.com/closures/body-wave-closure"><img src={bodyWaveClosure} width="25%" height="25%"/></a>
          <p>Brazilian Body Wave Closure</p>
          <a href="https://www.hairbyadara.com/closures/kinky-curl-closure"><img src={kinkyClosure} width="25%" height="25%"/></a>
          <p>Brazilian Kinky Curl Closure</p>
          <a href="https://www.hairbyadara.com/closures/straight-closure"><img src={straightClosure} width="25%" height="25%"/></a>
          <p>Brazilian Mink Straight Closure</p>
          <a href="https://www.hairbyadara.com/closures/straight-frontal"><img src={straightFrontal} width="25%" height="25%"/></a>
          <p>Brazilian Mink Straight Frontal</p>
        </div>
      </div>
    );
  }
}