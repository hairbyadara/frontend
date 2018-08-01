import React from 'react';
import { Link }  from 'react-router-dom';
import './style.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="footer1">
          <h4>Follow Us</h4>
          <Link to="https://www.facebook.com/HairbyAdara/"><img src={require(`${__dirname}/icons/facebook.png`)} className="icon"/></Link>
          <Link to="https://plus.google.com/108165777994246987880"><img src={require(`${__dirname}/icons/google.png`)} className="icon"/></Link>
          <Link to="https://www.instagram.com/hairbyadara/"><img src={require(`${__dirname}/icons/instagram.png`)} className="icon"/></Link>
          <Link to="https://twitter.com/hairbyadara"><img src={require(`${__dirname}/icons/twitter.png`)} className="icon"/></Link>
        </div>
        <div id="footer2">
          <h4>Contact Us</h4>
          <p id="contact-info">Contact us for local delivery in the Greater Seattle area (206) 468-9047</p>
        </div>
        <div className="copyright">
          Copyright &copy; 2018 Adara Hair Extensions. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;