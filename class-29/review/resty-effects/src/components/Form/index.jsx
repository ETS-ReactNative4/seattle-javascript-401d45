import { useState } from 'react';

function Form({ onSubmit }) {

  // we need an input for url
  let [form, setForm] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      method: form.method,
      url: form.url,
    };
    onSubmit(formData);
  }

  // we need an input for method
  function handleChange(event) {
    let {name, value } = event.target;
    setForm((prevState) => ({...prevState, [name]: value}));
  }

  function handleClick(event) {
    let { value } = event.target;
    setForm((prevState) => ({...prevState, method: value}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="url" onChange={handleChange} data-testid="url-input"/>
      <button onClick={handleClick} data-testid="get-btn" value="GET">GET</button>
      <button data-testid="submit-btn" type="submit">Go</button>
    </form>
  )
}

export default Form;
