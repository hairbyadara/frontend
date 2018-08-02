import React from 'react';
import owner from '../images/samwindfinal_large.jpg';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          HairbyAdara has positioned itself at the forefront of the hair market by exclusively supplying premium quality Grade 7A Virgin Remy Hair with origins from Brazil and Malaysia. Dedicated to maintaining our reputation of offering exceptional products, our group of experts carefully inspect each bundle through a meticulous process ensuring high standards of service and providing quality hair to women of all ethnicities. We are an online Seattle-based company also offering same-day local pickup.
        </p>
        <p>
          Our virgin hair bundles provide you with some of the finest unprocessed hair on the market. Our collection comes in straight, body wave, kinky curl, spiral, and loose curl in lengths ranging from 14”-30”. Closures and frontals are also available for all Brazilian textures allowing you to take your look to the next level with HairbyAdara.
        </p>
        <img src={owner}/>
      </div>
    );
  }
}

export default AboutUs;