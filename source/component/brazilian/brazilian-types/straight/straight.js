import React from 'react';
import { Link } from 'react-router-dom';
import kinkyPic from '../../../images/kinky-curl-3–bundles.JPG';
import bodyWavePic from '../../../images/body-wave-three-brazilian-front-angle.JPG';
import './styles.scss';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';
import Slider from 'react-slick';
import slide1 from '../../../images/straight-3-bundles.JPG';
import slide2 from '../../../images/brazil-straight-front.jpg';
import slide3 from '../../../images/brazil-straight-side.jpg';
import slide4 from '../../../images/brazil-straight-back.jpg';

class BrazilianStraight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Brazilian Straight',
      price: 75,
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
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      fade: true,
      arrows: false,
      centerMode: true,
    };
    return (
      <div>
        <h5 className="header-links"><Link className="header-links" to="../../">Home </Link> > <Link className="header-links" to="../brazilian">Brazilian </Link>> Brazilian Straight </h5>
        <div id="col1-straight">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div>
              <img src={slide1} className="slider-image" width="100%" height="100%"/>
            </div>
            <div>
              <img src={slide2} className="slider-image" width="100%" height="100%"/>
            </div>
            <div>
              <img src={slide3} className="slider-image" width="100%" height="100%"/>
            </div>
            <div>
              <img src={slide4} className="slider-image" width="100%" height="100%"/>
            </div>
          </Slider>
        </div>
        <div id="col2-straight">
          <h1>Brazilian Straight</h1>
          <h4>$ 75.00</h4>
          <form className="brazilian-straight-form" onSubmit={this.handleSubmit}>
            <p>Length</p>
            <select name="length" id="BMSLength" onChange={this.handleChange} required>
              <option value="" defaultValue>Select hair type...</option>
              <option value="14 Inches">14"</option>
              <option value="16 Inches">16"</option>
              <option value="18 Inches">18"</option>
              <option value="20 Inches">20"</option>
              <option value="22 Inches">22"</option>
              <option value="24 Inches">24"</option>
              <option value="26 Inches">26"</option>
              <option value="28 Inches">28"</option>
              <option value="30 Inches">30"</option>
            </select>
            <p>Quantity</p>
            <select name="quantity" id="BMSQuantity" onChange={this.handleChange} required>
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
        <h5 className="content">
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
        </h5>
        <h4 className="share-header">Share this product</h4>
        <div className="sharethis-inline-share-buttons"></div>
        <div className="brazilian-collection-pic">
          <h4>More from this collection</h4>
          <div className="brazilian-collection">
            <Link to="../brazilian/kinky-curl"><img src={kinkyPic} width="75%" height="75%"/></Link>
            <p>Brazilian Kinky Curl</p>
          </div>
          <div className="brazilian-collection">
            <Link to="../brazilian/body-wave"><img src={bodyWavePic} width="75%" height="75%"/></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrazilianStraight);