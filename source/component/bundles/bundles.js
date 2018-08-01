import React from 'react';
import { Link }  from 'react-router-dom';
import bundlesPic from '../images/spiral-curl-five-bundles.JPG';
import './style.scss';

export default class Bundles extends React.Component {
  render() {
    return (
      <div>
        <h1>Bundles</h1>
        <div id="col1">
          <Link to="bundles/4-bundles"><img className="bundlePic" src={bundlesPic} width="75%" height="75%"/></Link>
          <h2>4 Bundles</h2>
        </div>
        <div id="col2">
          <Link to="bundles/5-bundles"><img className="bundlePic" src={bundlesPic} width="75%" height="75%"/></Link>
          <h2>5 Bundles</h2>
        </div>
      </div>
    );
  }
}