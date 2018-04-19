import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Navbar from '../component/navbar/index';
import Landing from '../component/landing/index.js';
import Footer from '../component/footer/index';

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
          </div>
          {/* <Footer /> */}
        </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;