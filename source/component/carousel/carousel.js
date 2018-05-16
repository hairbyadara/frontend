// import React from 'react';
// import ReactDOM from 'react-dom';
// // var ReactDOM = require('react-dom');
// import { Carousel } from 'react-responsive-carousel';

// class ImageCarousel extends React.Component {
//   render() {
//     return (
//       <Carousel >
//         <div>
//           <img src={slide1} />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src={slide2} />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src={slide3} />
//           <p className="legend">Legend 3</p>
//         </div>
//         <div>
//           <img src={slide4} />
//           <p className="legend">Legend 4</p>
//         </div>
//         <div>
//           <img src={slide5} />
//           <p className="legend">Legend 5</p>
//         </div>
//       </Carousel>
//     );
//   }
// }

// ReactDOM.render(<ImageCarousel />, document.querySelector('.demo-carousel'));
import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import slide1 from '../images/slide_1.jpg';
import slide2 from '../images/slide_2.jpg';
import slide3 from '../images/slide_3.jpg';
import slide4 from '../images/slide_4.jpg';
import slide5 from '../images/slide_5.jpg';

const fn = function () {
  /* do your action */
};

export default class ImageCarousel extends React.Component {
  render() {
    return (
      <Coverflow width="960" height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
      >
        {/* <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={slide1}
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
          <img
            src={slide2}
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
          <img
            src={slide3}
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
          <img
            src={slide4}
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
          <img
            src={slide5}
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </div> */}
        <img src={slide1} />
        <img src={slide2} />
        <img src={slide3} />
        <img src={slide4} />
        <img src={slide5} />
      </Coverflow>
    );
  }
}
// ReactDOM.render(<ImageCarousel />, document.querySelector('.demo-carousel'));
