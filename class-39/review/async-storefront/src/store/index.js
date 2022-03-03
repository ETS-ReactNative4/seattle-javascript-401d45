import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products.store.js';

import thunk from 'redux-thunk';

let reducers = combineReducers({
  products: productsReducer,
});

export default function createReduxStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
