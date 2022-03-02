import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './shoppingCart.store.js';
import productReducer from './products.store.js';

import logger from './middleware/logger.js';
import thunk from './middleware/thunk.js'

let reducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default function createReduxStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunk)));
}
