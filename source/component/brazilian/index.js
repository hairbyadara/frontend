import React from 'react';
import bodyWavePic from '../images/body-wave-three-brazilian-front-angle.JPG';
import straightPic from '../images/straight-3-bundles.JPG';
import kinkyPic from '../images/kinky-curl-3–bundles.JPG';

export default class Brazilian extends React.Component {
  render() { 
    return ( 
      <div className="brazilian-content">
        <h1>Brazilian</h1>
        <a href="brazilian/body-wave"><img src={bodyWavePic} width="250" height="250"/></a>
        <h3>Brazilian Mink Body Wave</h3>
        <h3>Hair By Adara Extensions</h3>
        <h4>From $75.00</h4>
        <a href="brazilian/straight"><img src={straightPic} width="250" height="250"/></a>
        <h3>Brazilian Mink Straight</h3>
        <h3>Hair By Adara Extensions</h3>
        <h4>From $75.00</h4>
        <a href="brazilian/kinky-curl"><img src={kinkyPic} width="250" height="250"/></a>
        <h3>Brazilian Kinky Curl</h3>
        <h3>Hair By Adara Extensions</h3>
        <h4>From $80.00</h4>
      </div>
    );
  }
}