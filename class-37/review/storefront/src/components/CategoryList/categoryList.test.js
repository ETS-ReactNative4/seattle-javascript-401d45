import {  render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createReduxStore from '../../store/index.js';
import CategoryList from './CategoryList.jsx';

describe('Testing the Category list', () => {

  it('should display all categories in the store', () => {
    render(
      <Provider store={createReduxStore()}>
        <CategoryList />
      </Provider>
    );

    let electronicsDisplay = screen.getByText('Electronics');
    expect(electronicsDisplay).toBeInTheDocument();
  });

  it("Clicking a category should update active category", () => {
    render(
      <Provider store={createReduxStore()}>
        <CategoryList />
      </Provider>
    );

    let electronicsDisplay = screen.getByText('Electronics');
    fireEvent.click(electronicsDisplay);

    let activeCategory = screen.getByText('electronics');
    expect(activeCategory).toBeInTheDocument();
  });
});
