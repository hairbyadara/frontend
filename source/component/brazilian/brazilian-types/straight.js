import React from 'react';

export default class BrazilianStraight extends React.Component {
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
        <h1>Brazilian Straight</h1>
        <img src="http://via.placeholder.com/250x250" alt="" srcset=""/>
        <h3>$ 75.00</h3>
        <p>Length</p>
        <select name="length" id="BMSLength">
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
        <select name="quantity" id="BMSQuantity">
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
          Our 100% Virgin Mink Brazilian Hair is the highest quality Virgin Mink Brazilian hair on the market. Each selection has been collected from one donor. All cuticles are intact and you will notice each selection of our virgin hair has a natural taper at the end. All our Virgin Brazilian Hair has undergone a stringent quality assurance process to ensure it is free of imperfections. Our Virgin Brazilian Hair is available in a natural off black color 1b and will last well up to a year with proper care and maintenance          <ul>
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
              No shedding and tangle-free
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
        <div class="fb-share-button" data-href="https://www.hairbyadara.com/brazilian/straight" data-layout="button" data-size="small" data-mobile-iframe="true">
          <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.hairbyadara.com/brazilian-straight" class="fb-xfbml-parse-ignore">Share</a>
          <a target="_blank" href="https://twitter.com/share?text=Brazilian%20Mink%20Straight&url=https://www.hairbyadara.com/brazilian-straight" class="share-twitter">Tweet</a>
          <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/brazilian-straight&media=http://cdn.shopify.com/s/files/1/1235/5700/products/imageedit_4_8203888054_1024x1024.jpg?v=1476923593&description=Brazilian%20Mink%20Straight" class="share-pinterest">Pin it</a>
          <a target="_blank" href="https://fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/brazilian-straight&Title=Brazilian%20Mink%20Straight&Category=Other&ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/imageedit_4_8203888054_1024x1024.jpg?v=1476923593" class="share-fancy">Fancy</a>
          <a target="_blank" href="https://plus.google.com/share?url=https://www.hairbyadara.com/brazilian-straight" class="share-google">+1</a>
        </div>
        <div>
          <h3>More from this collection</h3>
          <a href="https://www.hairbyadara.com/brazilian/straight"><img src="http://via.placeholder.com/250x250"/></a>
          <p>Brazilian Kinky Curl</p>
          <a href="https://www.hairbyadara.com/brazilian/body-wave"><img src="http://via.placeholder.com/250x250"/></a>
          <p>Brazilian Mink Body-Wave</p>
        </div>
      </div>
    );
  }
}