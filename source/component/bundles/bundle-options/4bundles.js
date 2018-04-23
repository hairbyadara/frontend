import React from 'react';

export default class FourBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      texture: '',
      lengthOne: '',
      lengthTwo: '',
      lengthThree: '',
      lengthFour: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.handleAddToCart(this.state);
    this.setState({
      texture: '',
      lengthOne: '',
      lengthTwo: '',
      lengthThree: '',
      lengthFour: '',
    });
  }
  handleChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() { 
    return ( 
      <div>
        <h1>4 Bundle Deal</h1>
        <select name="texture" id="4-bundle-hair-texture" onChange={this.handleChange}>
          <option value="kinky-curl">Brazilian Mink Kinky Curl</option>
          <option value="straight">Brazilian Mink Straight</option>
          <option value="body-wave">Brazilian Mink Body Wave</option>
        </select>
        <select name="lengthOne" id="lengthOne" onChange={this.handleChange}>
          <option value="12in">12" $ 65.00 </option>
          <option value="14in">14" $ 70.00 </option>
          <option value="16in">16" $ 75.00 </option>
          <option value="18in">18" $ 80.00 </option>
          <option value="20in">20" $ 85.00 </option>
          <option value="22in">22" $ 90.00 </option>
          <option value="24in">24" $ 95.00 </option>
          <option value="26in">26" $ 100.00 </option>
          <option value="28in">28" $ 105.00 </option>
          <option value="30in">30" $ 110.00 </option>
        </select>
        <select name="lengthTwo" id="lengthTwo" onChange={this.handleChange}>
          <option value="12in">12" $ 65.00 </option>
          <option value="14in">14" $ 70.00 </option>
          <option value="16in">16" $ 75.00 </option>
          <option value="18in">18" $ 80.00 </option>
          <option value="20in">20" $ 85.00 </option>
          <option value="22in">22" $ 90.00 </option>
          <option value="24in">24" $ 95.00 </option>
          <option value="26in">26" $ 100.00 </option>
          <option value="28in">28" $ 105.00 </option>
          <option value="30in">30" $ 110.00 </option>
        </select>
        <select name="lengthThree" id="lengthThree" onChange={this.handleChange}>
          <option value="12in">12" $ 65.00 </option>
          <option value="14in">14" $ 70.00 </option>
          <option value="16in">16" $ 75.00 </option>
          <option value="18in">18" $ 80.00 </option>
          <option value="20in">20" $ 85.00 </option>
          <option value="22in">22" $ 90.00 </option>
          <option value="24in">24" $ 95.00 </option>
          <option value="26in">26" $ 100.00 </option>
          <option value="28in">28" $ 105.00 </option>
          <option value="30in">30" $ 110.00 </option>
        </select>
        <select name="lengthFour" id="lengthFour" onChange={this.handleChange}>
          <option value="12in">12" $ 65.00 </option>
          <option value="14in">14" $ 70.00 </option>
          <option value="16in">16" $ 75.00 </option>
          <option value="18in">18" $ 80.00 </option>
          <option value="20in">20" $ 85.00 </option>
          <option value="22in">22" $ 90.00 </option>
          <option value="24in">24" $ 95.00 </option>
          <option value="26in">26" $ 100.00 </option>
          <option value="28in">28" $ 105.00 </option>
          <option value="30in">30" $ 110.00 </option>
        </select>
        <button type="submit" onSubmit={this.handleSubmit}><span>Add to Cart</span></button>
      </div>
    );
  }
}