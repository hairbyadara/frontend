import React from 'react';
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
          <a href="closures/straight-closure"><img src={straightClosure} width="100%" height="100%"/></a>
          <h3>Brazilian Mink Straight Closure</h3>
        </div>
        <div className="box">
          <a href="closures/straight-frontal"><img src={straightFrontal} width="100%" height="100%"/></a>
          <h3>Brazilian Mink Straight Frontal</h3>
        </div>
        <div className="box">
          <a href="closures/body-wave-closure"><img src={bodyWaveClosure} width="100%" height="100%"/></a>
          <h3>Brazilian Mink Body Wave Closure</h3>
        </div>
        <div className="box">
          <a href="closures/kinky-curl-closure"><img src={kinkyClosure} width="100%" height="100%"/></a>
          <h3>Brazilian Kinky Curl Closure</h3>
        </div>
        <div className="box">
          <a href="closures/kinky-curl-frontal"><img src={kinkyFrontal} width="100%" height="100%"/></a>
          <h3>Brazilian Kinky Curl Frontal</h3>
        </div>
      </div>
    );
  }
}
 
export default Closures;