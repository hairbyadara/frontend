import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import bundlesPic from '../images/spiral-curl-five-bundles.JPG';
import './style.scss';

export default class Bundles extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>Bundles</h1>
        <BrowserRouter>
          <React.Fragment>
            <div id="col1">
              <Link to="bundles/4-bundles"><img className="bundlePic" src={bundlesPic} width="50%" height="50%"/></Link>
              <h2>4 Bundles</h2>
            </div>
            <div id="col2">
              <Link to="bundles/5-bundles"><img className="bundlePic" src={bundlesPic} width="50%" height="50%"/></Link>
              <h2>5 Bundles</h2>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}