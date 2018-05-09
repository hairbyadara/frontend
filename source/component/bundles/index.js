import React from 'react';
import bundlesPic from '../images/spiral-curl-five-bundles.JPG';

export default class Bundles extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>Bundles</h1>
        <h2>4 Bundles</h2>
        <a href="bundles/4-bundles"><img src={bundlesPic} width="35%" height="45%"/></a>
        <h2>5 Bundles</h2>
        <a href="bundles/5-bundles"><img src={bundlesPic} width="35%" height="45%"/></a>
      </div>
    );
  }
}