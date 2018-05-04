export default (state=[], action) => {
  let {type, payload} = action;  switch (action.type) {
  case 'ADD_CART':
    return [...state, payload];
  case 'REMOVE_CART':
    return state.filter(item => item._id !== payload._id);
  case 'UPDATE_CART':
    return state.map(item => item._id === payload._id ? payload : item);
  case 'RESET_CART': return [];
  default: return state;
  }
};