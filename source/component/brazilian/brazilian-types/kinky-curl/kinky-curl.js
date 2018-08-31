import React from 'react';
import { Link } from 'react-router-dom';
import bwPic from '../../../images/body-wave-three-brazilian-front-angle.JPG';
import sPic from '../../../images/straight-3-bundles.JPG';
import './styles.scss';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';
import Slider from 'react-slick';
import slide1 from '../../../images//kinky-curl-3–bundles.JPG';
import slide2 from '../../../images/brazil-kinkycurl-fetlew-front.jpg';
import slide3 from '../../../images/brazil-kinkycurl-fetlew-side.jpg';
import slide4 from '../../../images/brazil-kinkycurl-fetlew-back.jpg';

class BrazilianKinkyCurl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Brazilian Kinky-Curl',
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
        <h5 className="header-links"><Link className="header-links" to="../../">Home </Link> > <Link className="header-links" to="../brazilian">Brazilian </Link>> Brazilian Kinky Curl </h5>
        <div id="col1-kc">
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
        <div id="col2-kc">
          <h1>Brazilian Kinky Curl</h1>
          <p>Length</p>
          <form className="brazilian-kinky-form" onSubmit={this.handleSubmit}>
            <select name="length" id="BKCLength" onChange={this.handleChange} required>
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
            <h4>$ 80.00</h4>
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
        <h4 className="share-header">Share this product</h4>
        <div className="sharethis-inline-share-buttons"></div>
        <div className="brazilian-collection-pic">
          <h4>More from this collection</h4>
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