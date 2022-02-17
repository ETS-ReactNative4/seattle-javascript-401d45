import { render, screen } from '@testing-library/react';
import Results from './index';

describe('Testing the Results component', () => {

  it('Should render json values', () => {

    let data = {
      "headers": {
        "property": "value"
      },
      "response": {
        "status": 200,
        "results": ["item"]
      }
    }

    render(<Results data={data} />)
    let headers = screen.getByText(/"property": "value"/);
    expect(headers).toBeInTheDocument();
    let response = screen.getByText(/"status": 200/);
    expect(response).toBeInTheDocument();
  });
});
