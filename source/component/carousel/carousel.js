import React from 'react';
import Slider from 'react-slick';
import './style.scss';
import slide1 from '../images/slide_1.jpg';
import slide2 from '../images/slide_2.jpg';
import slide3 from '../images/slide_3.jpg';
import slide4 from '../images/slide_4.jpg';
import slide5 from '../images/slide_5.jpg';


export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.pause = this.previous.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={slide1} className="slider-image" width="75%" height="75%"/>
          </div>
          <div>
            <img src={slide2} className="slider-image" width="75%" height="75%"/>
          </div>
          <div>
            <img src={slide3} className="slider-image" width="75%" height="75%"/>
          </div>
          <div>
            <img src={slide4} className="slider-image" width="75%" height="75%"/>
          </div>
          <div>
            <img src={slide5} className="slider-image" width="75%" height="75%"/>
          </div>
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}