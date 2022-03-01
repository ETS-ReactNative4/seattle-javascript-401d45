import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import channelReducer from './channels.store.js';
import friendReducer from './friends.store.js';
import messageReducer from './messages.store.js';

let reducers = combineReducers({
  channels: channelReducer,
  friends: friendReducer,
  messages: messageReducer,
});

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default createReduxStore;
