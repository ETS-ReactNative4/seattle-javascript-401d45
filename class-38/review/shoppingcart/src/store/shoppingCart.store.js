const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case "ADD_ITEM":
      return {...state, cart: [...state.cart, payload]}
    default:
      return state;
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export default cartReducer;
