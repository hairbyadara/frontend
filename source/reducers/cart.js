export default (state={}, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CART_CREATE': {
    console.log('this is state', state);
    console.log('this is payload', payload);
    const updateState = {...state}; 
    console.log('updatestate', updateState);
    if(!updateState.items) {
      updateState.items= [];
    }
    // const test = [...updateState, payload];
    updateState.items.push(payload);
    console.log('updatestate added', updateState);
    return updateState;
  }
  // case 'CART_UPDATE': return state.map(cart => cart._id === payload._id ? payload : cart);
  case 'CART_DELETE': return state.filter(items => items._id !== payload._id);
  case 'CART_RESET': return [];
  default: return state;
  }
};
