import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { cartDelete, cartUpdate } from '../../actions/cart-actions/cart-actions';
// import PaypalExpressBtn from 'react-paypal-express-checkout';
// import { renderIf } from '../../lib/utilities';
// import { map } from  '../../lib/utilities';


class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cart: this.props.cart ? this.props.cart : {},
      edit: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    this.props.cartItemCartDelete(this.state);
  }

  handleUpdate () {
    this.props.cartItemCartUpdate(this.state);
  }

  handleName() {
    if (this.props.cart.length > 0) {
      for (var i in this.props.cart) {
        return (this.props.cart.items[0].name);
      }
    }
    else return 0;
  }

  render() {
    // let totalSpend = this.state.cart.items ? this.state.cart.items.map(total => {total.quantity * total.price;}) : undefined;
    let totalSpend = this.state.cart.items ? this.state.cart.items[0].quantity * this.state.cart.items[0].price : undefined;
    console.log(totalSpend);

    // const onSuccess = (payment) => {
    //   // Congratulation, it came here means everything's fine!
    //   console.log('The payment was succeeded!', payment);
    //   // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    // };

    // const onCancel = (data) => {
    //   // User pressed "cancel" or close Paypal's popup!
    //   console.log('The payment was cancelled!', data);
    //   // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    // };

    // const onError = (err) => {
    //   // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    //   console.log('Error!', err);
    //   // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    //   // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    // };

    // let env = 'sandbox'; // you can set here to 'production' for production
    // let currency = 'USD'; // or you can set this value from your props or state
    // let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    // const client = {
    //   sandbox:    'YOUR-SANDBOX-APP-ID',
    //   production: 'YOUR-PRODUCTION-APP-ID',
    // };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <div>
        <h1>Your Cart</h1>
        <div id="cart-header">
          <div id="cart-col-1" className="cart-header">
            <h4>Item</h4>
            <ul>
              { this.state.cart.items ?
                <li>{this.state.cart.items[0].name}</li>
                // this.state.cart.items.map((items,index) =>
                //   <li key={index}>{items.name}</li>
                // )
                :
                undefined
              }
            </ul>
          </div>
          <div id="cart-col-2" className="cart-header">
            <h4>Quantity</h4>
            <ul>
              { this.state.cart.items ?
                <li id="item-quantity">{this.state.cart.items[0].quantity}</li>
                // this.state.cart.items.map((items,index) =>
                //   <li key={index}>{items.quantity}</li>
                // )
                :
                undefined
              }
            </ul>
          </div>
          <div id="cart-col-3" className="cart-header">
            <h4>Price</h4>
            <ul>
              { this.state.cart.items ?
                <li id="item-total">{totalSpend}</li>
                // this.state.cart.items.map((items,index) =>
                //   <li key={index}>{items.name}</li>
                // )
                :
                undefined
              }
            </ul>
          </div>
        </div>
        <div id="cart-col-4">
          <h4>Tax:</h4>
          <h4>Total:</h4>
        </div>
        {/* <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} /> */}
      </div>
    );
  }
}
const mapStateToProps = state =>  ({
  cart: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  cartItemCartUpdate: cart => dispatch(cartUpdate(cart)),
  cartItemCartDelete: cart => dispatch(cartDelete(cart)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
