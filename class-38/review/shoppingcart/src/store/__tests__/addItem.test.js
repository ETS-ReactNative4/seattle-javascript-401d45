import { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import createReduxStore from '../index.js';
import { addItem } from '../shoppingCart.store.js';
import { useSelector, useDispatch } from 'react-redux';

// connect to our store via a Hook!
const TestCart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(addItem({
      name: 'Rubber Ducky',
      description: 'Floats in the water, made of rubber.',
      category: 'toys',
      price: 3,
      inventory: 80
    }));
  }, []);

  return (
    <>
      <p>{cart.length}</p>
    </>
  );
}

describe('Testing the addItem action', () => {
  it ('should track products added to our cart from the products store', () => {
    render(
      <Provider store={createReduxStore()}>
        <TestCart />
      </Provider>
    );

    let cartCount = screen.getByText(1);

    expect(cartCount).toBeInTheDocument();
  });
});
