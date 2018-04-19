import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <footer>
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/HairbyAdara/"><img src={require(`${__dirname}/icons/facebook.png`)} className="icon"/></a>
        <a href="https://plus.google.com/108165777994246987880"><img src={require(`${__dirname}/icons/google.png`)} className="icon"/></a>
        <a href="https://www.instagram.com/hairbyadara/"><img src={require(`${__dirname}/icons/instagram.png`)} className="icon"/></a>
        <a href="https://twitter.com/hairbyadara"><img src={require(`${__dirname}/icons/twitter.png`)} className="icon"/></a>

        <h4>Contact Us</h4>
        <p>Contact us for local delivery in the greater Seattle area (206) 468-9047</p>
      </footer>
     )
  }
}
 
export default Footer;