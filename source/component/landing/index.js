import React from 'react';
import Slider from 'react-slick';

class Landing extends React.Component {
  render() { 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return ( 
      <div className="main-page">
        <h1>Welcome to Adara Hair Extensions!</h1>
        <Slider {...settings} id="slider-images">
          <div>
            <img src="http://via.placeholder.com/500x500"/>
          </div>
          <div>
            <img src="http://via.placeholder.com/500x400"/>
          </div>
          <div>
            <img src="http://via.placeholder.com/500x300"/>
          </div>
          <div>
            <img src="http://via.placeholder.com/500x200"/>
          </div>
          <div>
            <img src="http://via.placeholder.com/500x100"/>
          </div>
        </Slider>
        <div className="landing-content">
          <div className="landing-brazilian">
            <a href="brazilian"><img src="http://via.placeholder.com/250x250"/></a>
            <h2>Brazilian</h2>
          </div>
          <div className="landing-closure">
            <a href="closures"><img src="http://via.placeholder.com/250x250"/></a>
            <h2>Closures</h2>
          </div>
          <div className="landing-bundles">
            <a href="bundles"><img src="http://via.placeholder.com/250x250"/></a>
            <h2>Bundles</h2>
          </div>
          {/* <img src={require(`${__dirname}/stats.png`)} height="250" width="250"/> */}
        </div>
      </div>
    );
  }
}
 
export default Landing;