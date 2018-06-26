import React from 'react';
import Slider from 'react-slick';
import './style.scss';
import slide1 from '../images/slide_1.jpg';
import slide2 from '../images/slide_2.jpg';
import slide3 from '../images/slide_3.jpg';
import slide4 from '../images/slide_4.jpg';
import slide5 from '../images/slide_5.jpg';


export default class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      fade: true,
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={slide1} className="slider-image" width="85%" height="85%"/>
          </div>
          <div>
            <img src={slide2} className="slider-image" width="85%" height="85%"/>
          </div>
          <div>
            <img src={slide3} className="slider-image" width="85%" height="85%"/>
          </div>
          <div>
            <img src={slide4} className="slider-image" width="85%" height="85%"/>
          </div>
          <div>
            <img src={slide5} className="slider-image" width="85%" height="85%"/>
          </div>
        </Slider>
      </div>
    );
  }
}