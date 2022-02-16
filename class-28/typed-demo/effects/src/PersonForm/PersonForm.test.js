import { render, screen, fireEvent } from '@testing-library/react';
import PersonForm from './PersonForm';

describe('Testing person form component', () => {

  it('Form should execute a callback', () => {
    const callback = jest.fn();

    render(<PersonForm handleSubmit={callback}/>);

    // grab inputs
    let name = screen.getByTestId('name-inpt');
    let age = screen.getByTestId('age-inpt');

    // add values to input elements
    fireEvent.change(name, {target: {value: 'test'}});
    fireEvent.change(age, { target: {value: '100' }});

    // click on submit
    let submit = screen.getByTestId('submit-btn');
    fireEvent.click(submit);

    expect(callback).toHaveBeenCalledWith({name: 'test', age: '100'});
  });
});

