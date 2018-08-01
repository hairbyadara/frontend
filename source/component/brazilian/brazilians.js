import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import bodyWavePic from '../images/body-wave-three-brazilian-front-angle.JPG';
import straightPic from '../images/straight-3-bundles.JPG';
import kinkyPic from '../images/kinky-curl-3–bundles.JPG';

export default class Brazilian extends React.Component {
  render() {
    return (
      <div className="brazilian-content">
        <h1>Brazilian</h1>
        <div id="body-wave">
          <Link to="brazilian/body-wave"><img src={bodyWavePic}  id="bodywave-img" width="100%" height="100%"/></Link>
          <h3 className="brazilian-header">Brazilian Mink Body Wave</h3>
          <h4>From $75.00</h4>
        </div>
        <div id="straight">
          <Link to="brazilian/straight"><img src={straightPic}  id="straight-img" width="100%" height="100%"/></Link>
          <h3 className="brazilian-header">Brazilian Mink Straight</h3>
          <h4>From $75.00</h4>
        </div>
        <div id="kinky-curl">
          <Link to="brazilian/kinky-curl"><img src={kinkyPic}  id="kinky-img" width="100%" height="100%"/></Link>
          <h3 className="brazilian-header">Brazilian Kinky Curl</h3>
          <h4>From $80.00</h4>
        </div>
      </div>
    );
  }
}