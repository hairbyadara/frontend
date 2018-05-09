import React from 'react';
import brazilianPic from '../images/spiral-curl-five-bundles.JPG';
import closurePic from '../images/kinky-curly-closure-main.JPG';
import straightPic from '../images/straight-3-bundles.JPG';

class Landing extends React.Component {
  render() { 
    return ( 
      <div className="main-page">
        <h1>Welcome to Adara Hair Extensions!</h1>
        <div className="landing-content">
          <div className="landing-brazilian">
            <a href="brazilian"><img src={brazilianPic} width="25%" height="35%"/></a>
            <h2>Brazilian</h2>
          </div>
          <div className="landing-closure">
            <a href="closures"><img src={closurePic} width="25%" height="35%"/></a>
            <h2>Closures</h2>
          </div>
          <div className="landing-bundles">
            <a href="bundles"><img src={straightPic} width="25%" height="35%"/></a>
            <h2>Bundles</h2>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Landing;