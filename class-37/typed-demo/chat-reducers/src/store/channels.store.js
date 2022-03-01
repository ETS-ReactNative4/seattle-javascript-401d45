const initialState = [
  {
    name: 'Code Fellows',
    description: 'Channel for Code Fellows stuff'
  }
];

const channelReducer = (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case "ADD_CHANNEL":
      return [...state, payload];
    default:
      return state;
  }
}

export const addChannel = channel => {
  return {
    type: 'ADD_CHANNEL',
    payload: channel,
  }
}

export default channelReducer;
