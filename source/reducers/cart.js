export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CART_CREATE': {
    const updateState = {...state};
    if(!updateState.items) {
      updateState.items= [];
    }
    updateState.items.push(payload);
    return updateState;
  }
  case 'CART_DELETE': return state.filter(items => items._id !== payload._id);
  case 'CART_RESET': return [];
  default: return state;
  }
};
