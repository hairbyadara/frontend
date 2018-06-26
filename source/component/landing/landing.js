import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './style.scss';
import bundlesPic from '../images/spiral-curl-five-bundles.JPG';
import closurePic from '../images/kinky-curly-closure-main.JPG';
import brazilianPic from '../images/straight-3-bundles.JPG';
import Carousel from '../carousel/carousel';
// import { Slide } from 'react-slideshow-image';

class Landing extends React.Component {
  render() { 
    return ( 
      <BrowserRouter>
        <React.Fragment>
          <div className="main-page">
            <Carousel />
            <div className="landing-content">
              <div id="landing-brazilian">
                <Link to={'/brazilian'}><img src={brazilianPic} width="100%" height="100%"/></Link>
                <h2>Brazilian</h2>
              </div>
              <div id="landing-closure">
                <Link to="/closures"><img src={closurePic} id="closure-pic" width="100%" height="100%"/></Link>
                <h2>Closures</h2>
              </div>
              <div id="landing-bundles">
                <Link to="/bundles"><img src={bundlesPic} id="bundle-pic" width="90%" height="90%"/></Link>
                <h2>Bundles</h2>
              </div>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
 
export default Landing;