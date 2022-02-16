import { useState, useEffect } from 'react';

function PersonForm({ handleSubmit }) {

  let [name, setName] = useState('Jacob');
  let [age, setAge] = useState(31);

  useEffect(() => {
    console.log('Form is mounted');
  }, []);

  useEffect(() => {
    // returning a function causes this to run on un-mount
    return () => {
      console.log('form removed from DOM');
    }
  });

  function handleChange(event) {
    let {name, value} = event.target;
    if (name === 'name') {
      setName(value);
    } else {
      setAge(value);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit({name, age});
  }

  return (
    <form onSubmit={onSubmit}>
      <input data-testid="name-inpt" name="name" onChange={handleChange} />
      <input data-testid="age-inpt" name="age" onChange={handleChange} />
      <button data-testid="submit-btn" type="submit">Add Person</button>
    </form>
  )
}

export default PersonForm;
