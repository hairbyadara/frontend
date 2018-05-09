import React from 'react';
import bkcPic from '../../images/kinky-curl-3–bundles.JPG';
import bwPic from '../../images/body-wave-three-brazilian-front-angle.JPG';
import sPic from '../../images/straight-3-bundles.JPG';


export default class BrazilianKinkyCurl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      length : '',
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
        <h1>Brazilian Kinky Curl</h1>
        <img src={bkcPic} width="35%" height="45%"/>
        <h3>$ 80.00</h3>
        <p>Length</p>
        <select name="length" id="BMBWLength">
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
        <select name="quantity" id="BMBQuantity">
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
        <p>
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
        </p>
        <div class="fb-share-button" data-href="https://www.hairbyadara.com/brazilian/kinky-curl" data-layout="button" data-size="small" data-mobile-iframe="true">
          <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/brazilian-kinky-curl" class="fb-xfbml-parse-ignore">Share</a>
          <a target="_blank" href="https://twitter.com/share?text=Brazilian%20Kinky%20Curl&url=https://www.hairbyadara.com/brazilian-kinky-curl" class="share-twitter">Tweet</a>
          <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/brazilian-kinky-curl&media=http://cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476&description=Brazilian%20Kinky%20Curl" class="share-pinterest">Pin it</a>
          <a target="_blank" href="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/brazilian-kinky-curl&Title=Brazilian%20Kinky%20Curl&Category=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/brazilian-kinkycurl_1024x1024.jpg?v=1460084476" class="share-fancy">Fancy</a>
          <a target="_blank" href="https://plus.google.com/share?url=https://www.hairbyadara.com/brazilian-kinky-curl" class="share-google">+1</a>
        </div>
        <div>
          <h3>More from this collection</h3>
          <a href="https://www.hairbyadara.com/brazilian/straight"><img src={bwPic} width="25%" height="25%"/></a>
          <p>Brazilian Mink Straight</p>
          <a href="https://www.hairbyadara.com/brazilian/body-wave"><img src={sPic} width="25%" height="25%"/></a>
          <p>Brazilian Mink Body-Wave</p>
        </div>
      </div>
    );
  }
}