import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList.jsx';
import { Provider } from 'react-redux';
import createReduxStore from '../../store/index.js';

import { setupServer } from 'msw/node';
import { rest } from 'msw';

// setup a mock service worker, to intercept all requets made from our testing environment.
let server = setupServer(
  rest.post('*/products', (req, res, ctx) => {
    return res(
      ctx.status(201, 'OK'),
      ctx.json({
        "_id": "0000",
        "name": "product from msw",
        "category": "test",
        "inStock": 20,
        "price": 5,
        "__v": 0
      }),
    )
  })
);

beforeAll(() => {
  server.listen();
});

describe('Tests for product list component', () => {
  it('Should display a list of products from our remote API', async () => {
    render(
      <Provider store={createReduxStore()}>
        <ProductList />
      </Provider>
    );

    let displayCount = screen.getByTestId('count');
    expect(displayCount).toHaveTextContent('1');

    let button = screen.getByTestId('create-btn');
    fireEvent.click(button);

    displayCount = await screen.findByText('2');
    expect(displayCount).toBeInTheDocument();

    let displayName = await screen.findByText('product from msw');
    expect(displayName).toBeInTheDocument();
  });
});
