import React from 'react';
import { Link }  from 'react-router-dom';
import './styles.scss';
import straightClosure from '../images/straight-closure.JPG';
import straightFrontal from '../images/straight-frontal.JPG';
import bodyWaveClosure from '../images/body-wave-closure.JPG';
import kinkyClosure from '../images/kinky-curly-closure-main.JPG';
import kinkyFrontal from '../images/kinky-curl-frontal.JPG';

class Closures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <h1>Closures</h1>
        <div className="box box2">
          <Link to="closures/straight-closure"><img src={straightClosure} id="straight-closure" width="100%" height="100%"/></Link>
          <h3 className="closure-header">Brazilian Mink Straight Closure</h3>
        </div>
        <div className="box">
          <Link to="closures/straight-frontal"><img src={straightFrontal} id="straight-frontal" width="100%" height="100%"/></Link>
          <h3 className="closure-header">Brazilian Mink Straight Frontal</h3>
        </div>
        <div className="box">
          <Link to="closures/body-wave-closure"><img src={bodyWaveClosure} id="bodywave-closure" width="100%" height="100%"/></Link>
          <h3 className="closure-header">Brazilian Mink Body Wave Closure</h3>
        </div>
        <div className="box">
          <Link to="closures/kinky-curl-closure"><img src={kinkyClosure} id="kinky-closure" width="100%" height="100%"/></Link>
          <h3 className="closure-header">Brazilian Kinky Curl Closure</h3>
        </div>
        <div className="box">
          <Link to="closures/kinky-curl-frontal"><img src={kinkyFrontal} id="kinky-frontal" width="100%" height="100%"/></Link>
          <h3 className="closure-header">Brazilian Kinky Curl Frontal</h3>
        </div>
      </div>
    );
  }
}

export default Closures;