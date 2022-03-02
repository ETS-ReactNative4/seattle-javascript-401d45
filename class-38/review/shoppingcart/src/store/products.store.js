const initialState = [
  {
    name: 'Rubber Ducky',
    description: 'Floats in the water, made of rubber.',
    category: 'toys',
    price: 3,
    inventory: 80
  }
]

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      // we have a couple things to do
      // find the rubber ducky object
      for (let item of state) {
        if (item.name === payload.name) {
          // itemToDecrement = item;
          // decrement it's inventory value
          item.inventory--;
        };
      }
      return state;
    default:
      return state;
  }
}

export default productReducer;
