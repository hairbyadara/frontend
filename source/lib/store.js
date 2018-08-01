import {createStore, applyMiddleware, combineReducers} from 'redux'; //allowing
import createEngine from 'redux-storage-engine-localstorage';
import * as storage from 'redux-storage';
import reducers from '../reducers/cart'; //route to directory, using index.js as an entry point and knowing which file to use.
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxSession from '../middleware/redux-session';


// const reducer = storage.reducer(combineReducers(reducers));

// const engine = createEngine('my-save-key');

// const middleware = storage.createMiddleware(engine);

// const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
// const store = createStoreWithMiddleware(reducer);

// const load = storage.createLoader(engine);
// load(store);

// load(store)
//   .then((newState) => console.log('Loaded state:', newState))
//   .catch(() => console.log('Failed to load previous state'));


export default () => createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxReporter, crashReporter, reduxSession)
));