import { useState } from 'react';

function Header({ initialTitle }) {

  // setTitle('Jacob'); // a meaningful update to my state has happened and I need to re-render
  let [title, setTitle] = useState(initialTitle);

  function changeTitle(string) {
    setTitle(string); // whenever this is called, react triggers an "I have been updated" event
  }

  function handleChange(event) {
    let { value } = event.target;
    changeTitle(value);
  }

  return (
    <div id="header-container">
      <h1>{title}</h1>
      <input data-testid="header-input" onChange={handleChange} />
    </div>
  )

}

export default Header;
