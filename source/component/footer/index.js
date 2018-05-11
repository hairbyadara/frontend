import React from 'react';
import './style.scss';
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <footer>
        <div id="footer1">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/HairbyAdara/"><img src={require(`${__dirname}/icons/facebook.png`)} className="icon"/></a>
          <a href="https://plus.google.com/108165777994246987880"><img src={require(`${__dirname}/icons/google.png`)} className="icon"/></a>
          <a href="https://www.instagram.com/hairbyadara/"><img src={require(`${__dirname}/icons/instagram.png`)} className="icon"/></a>
          <a href="https://twitter.com/hairbyadara"><img src={require(`${__dirname}/icons/twitter.png`)} className="icon"/></a>
        </div>
        <div id="footer2">
          <h4>Contact Us</h4>
          <p>Contact us for local delivery in the greater Seattle area (206) 468-9047</p>
        </div>
        <div className="copyright"> 
          Copyright &copy; 2018 Adara Hair Extensions. All rights reserved.
        </div>
      </footer>
    );
  }
}
 
export default Footer;