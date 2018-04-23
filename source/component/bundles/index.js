import React from 'react';

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
        <a href="bundles/4-bundles"><img src="http://via.placeholder.com/250x250"/></a>
        <h2>5 Bundles</h2>
        <a href="bundles/5-bundles"><img src="http://via.placeholder.com/250x250"/></a>
      </div>
    );
  }
}