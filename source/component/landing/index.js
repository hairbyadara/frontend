import React from 'react';

class Landing extends React.Component {
  render() { 
    return ( 
      <div className="main-page">
        <h1>Welcome to Adara Hair Extensions!</h1>
        <div className="landing-content">
          <div className="landing-brazilian">
            <a href="brazilian"><img src="http://via.placeholder.com/250x250"/></a>
          </div>
          <div className="landing-closure">
            <a href="closures"><img src="http://via.placeholder.com/250x250"/></a>
          </div>
          <div className="landing-bundles">
            <a href="bundles"><img src="http://via.placeholder.com/250x250"/></a>
          </div>
          {/* <img src={require(`${__dirname}/stats.png`)} height="250" width="250"/> */}
        </div>
      </div>
    );
  }
}
 
export default Landing;