import React from 'react';
import { Link }  from 'react-router-dom';
import './style.scss';
import bundlesPic from '../images/promo_image_3.jpg';
import closurePic from '../images/promo_image_2.JPG';
import brazilianPic from '../images/promo_image_1.JPG';
import Carousel from '../carousel/carousel';

class Landing extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Carousel />
        <div className="landing-content">
          <div id="landing-brazilian">
            <Link to={'/brazilian'}><img src={brazilianPic} id="brazilian-pic" width="100%" height="100%"/></Link>
          </div>
          <div id="landing-closure">
            <Link to="/closures"><img src={closurePic} id="closure-pic" width="100%" height="100%"/></Link>
          </div>
          <div id="landing-bundles">
            <Link to="/bundles"><img src={bundlesPic} id="bundle-pic" width="100%" height="100%"/></Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;