import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Navbar from '../component/navbar/index';
import Landing from '../component/landing/index.js';
import Footer from '../component/footer/index';
import Brazilian from './brazilian';
import Closures from './closures';
import Bundles from './bundles';
import BrazilianBodyWave from './brazilian/brazilian-types/body-wave';
import BrazilianKinkyCurl from './brazilian/brazilian-types/kinky-curl';
import BrazilianStraight from './brazilian/brazilian-types/straight';
import Cart from './checkout';
import KinkyCurlClosure from './closures/closure-options/kinky-curl-closure';
import KinkyCurlFrontal from './closures/closure-options/kinky-curl-frontal';
import BodyWaveClosure from './closures/closure-options/body-wave-closure';
import StraightClosure from './closures/closure-options/straight-closure';
import StraightFrontal from './closures/closure-options/straight-frontal';
import FourBundle from './bundles/bundle-options/4bundles';
import FiveBundle from './bundles/bundle-options/5bundles';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className='app'>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <div>
              <Route exact path='/'component={Landing}/>
              <Route exact path='/brazilian' component={Brazilian}/>
              <Route exact path='/brazilian/body-wave' component={BrazilianBodyWave}/>
              <Route exact path='/brazilian/kinky-curl' component={BrazilianKinkyCurl}/>
              <Route exact path='/brazilian/straight' component={BrazilianStraight}/>
              <Route exact path='/closures' component={Closures}/>
              <Route exact path='/closures/kinky-curl-closure' component={KinkyCurlClosure}/>
              <Route exact path='/closures/kinky-curl-frontal' component={KinkyCurlFrontal}/>
              <Route exact path='/closures/body-wave-closure' component={BodyWaveClosure}/>
              <Route exact path='/closures/straight-closure' component={StraightClosure}/>
              <Route exact path='/closures/straight-frontal' component={StraightFrontal}/>
              <Route exact path='/bundles' component={Bundles}/>
              <Route exact path='/bundles/4-bundles' component={FourBundle}/>
              <Route exact path='/bundles/5-bundles' component={FiveBundle}/>              
              <Route exact path='/cart' component={Cart}/>
            </div>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;