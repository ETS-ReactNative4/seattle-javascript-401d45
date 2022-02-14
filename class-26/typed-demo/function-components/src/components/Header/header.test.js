import { render, screen } from '@testing-library/react';
import Header from './Function';

// what is the headers job??
// render the title of our webpage
describe('testing the Header Component', () => {
  it('Should render the webpage title in Header text', () => {
    // we should render our single component
    let title = "My Sweet SPA"
    render(
        <Header title={title}/>
    )
    let headerComponent = screen.getByText(title);
    // check it's output.
    expect(headerComponent).toBeInTheDocument();
  });
});
