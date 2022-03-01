import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import storeReducer from './storeReducer.js';

const createReduxStore = () => {
  return createStore(storeReducer, composeWithDevTools());
}

export default createReduxStore;
