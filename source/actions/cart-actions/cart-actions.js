import uuid from 'uuid/v4';

export const cartCreate = cart => {
  cart._id = uuid();
  cart.timestamp = new Date();
  return  {
    type: 'CART_CREATE',
    payload: cart,
  };
};
export const cartUpdate = cart => ({
  type: 'CART_UPDATE',
  payload: cart,
});
export const cartDelete = cart => ({
  type: 'CART_DELETE',
  payload: cart,
});