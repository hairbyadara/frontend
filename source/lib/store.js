import {createStore, applyMiddleware} from 'redux'; //allowing 
import cartReducer from '../reducers/cart'; //route to directory, using index.js as an entry point and knowing which file to use.
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxSession from '../middleware/redux-session';

export default () => createStore(cartReducer, composeWithDevTools(
  applyMiddleware(reduxReporter, crashReporter, reduxSession)
));