import { render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

describe('Testing the Counter Component', () => {
  it('should increment on button click', () => {
    render(<Counter />);
    let count = screen.getByText('0');
    expect(count).toBeInTheDocument();

    let add = screen.getByTestId('add');
    fireEvent.click(add);

    count = screen.getByText('1');
    expect(count).toBeInTheDocument();

    fireEvent.click(add);
    count = screen.getByText('2');
    expect(count).toBeInTheDocument();
  });
});
