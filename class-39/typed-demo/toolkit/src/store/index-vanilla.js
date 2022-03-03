import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import peopleReducer from './people.store.js';
let reducers = combineReducers({ people: peopleReducer });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
