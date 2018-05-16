import React from 'react';
import './style.scss';
import bundlesPic from '../images/spiral-curl-five-bundles.JPG';
import closurePic from '../images/kinky-curly-closure-main.JPG';
import brazilianPic from '../images/straight-3-bundles.JPG';
import Carousel from '../carousel/carousel';
// import { Slide } from 'react-slideshow-image';

class Landing extends React.Component {
  render() { 
    return ( 
      <div className="main-page">
        <div className="landing-content">
          <Carousel />
          <div id="landing-brazilian">
            <a href="brazilian"><img src={brazilianPic} width="100%" height="100%"/></a>
            <h2>Brazilian</h2>
          </div>
          <div id="landing-closure">
            <a href="closures"><img src={closurePic} id="closure-pic" width="100%" height="100%"/></a>
            <h2>Closures</h2>
          </div>
          <div id="landing-bundles">
            <a href="bundles"><img src={bundlesPic} id="bundle-pic" width="80%" height="85%"/></a>
            <h2>Bundles</h2>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Landing;