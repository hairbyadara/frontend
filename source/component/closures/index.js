import React from 'react';
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
        <h2>Brazilian Mink Straight Closure</h2>
        <a href="closures/straight-closure"><img src={straightClosure} width="25%" height="25%"/></a>
        <h2>Brazilian Mink Straight Frontal</h2>
        <a href="closures/straight-frontal"><img src={straightFrontal} width="25%" height="25%"/></a>
        <h2>Brazilian Mink Body Wave Closure</h2>
        <a href="closures/body-wave-closure"><img src={bodyWaveClosure} width="25%" height="25%"/></a>
        <h2>Brazilian Kinky Curl Closure</h2>
        <a href="closures/kinky-curl-closure"><img src={kinkyClosure} width="25%" height="25%"/></a>
        <h2>Brazilian Kinky Curl Frontal</h2>
        <a href="closures/kinky-curl-frontal"><img src={kinkyFrontal} width="25%" height="25%"/></a>
      </div>
    );
  }
}
 
export default Closures;