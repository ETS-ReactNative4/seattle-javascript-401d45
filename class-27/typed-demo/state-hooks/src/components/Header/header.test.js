import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('testing the Header component', () => {
  it('Should render My Website on initial load', () => {
    let title = 'Test Site';

    render(<Header initialTitle={title} />);
    let heading = screen.getByText(title);
    expect(heading).toBeInTheDocument();
  });

  it('should react to user input', () => {
    render(<Header />);

    // we need to find the input element
    let input = screen.getByTestId('header-input');
    fireEvent.change(input, {target: {value: 'new title'}});

    let heading = screen.getByText('new title');
    expect(heading).toBeInTheDocument();
  });
});
