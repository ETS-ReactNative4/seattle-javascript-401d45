const initialState = {
  categories: [
    {
      normalizedName: 'electronics',
      displayName: 'Electronics',
      description: 'These are things that need electricity'
    }, {
      normalizedName: 'food',
      displayName: 'Food',
      description: 'these are things that you eat'
    }
  ],
  products: [
    {
      name: 'Donut',
      description: 'Jelly, Chocolate, spinkles',
      category: 'food',
      price: 2,
      inventory: 12
    },
    {
      name: 'Logitech 502 Wireless Mouse',
      description: 'wireless mouse for your computer, RGB included',
      category: 'electronics',
      price: 200,
      inventory: 1
    }
  ],
  activeCategory: ''
};

// allows you to immutably update state
const storeReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch(type) {
    case 'CHANGE_CATEGORY':
      if (state.categories.includes(payload)) {
        return {...state, activeCategory: payload.normalizedName}
      } else {
        return state;
      }
    case 'CHANGE_PAGE':
    default:
      return state;
  }
}

export function toggleCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
}

export default storeReducer;
