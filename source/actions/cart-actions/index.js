import uuid from 'uuid/v4';

export const cartAdd = expense => {
  expense._id = uuid();
  expense.timestamp = new Date();
  return  {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};
export const cartUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});
export const cartDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});