import { useState } from 'react';

function Counter() {

  // returns an array, the first index is the getter, the second is the setter
  let [count, setCount] = useState(0);

  function handleClick(event) {

    let { value } = event.target;

    if (value === 'increment') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

  }

  return (
    <div>
      <button
        data-testid="add"
        onClick={handleClick}
        value="increment"
      >
        Increment
      </button>
      <p data-testid="count">{count}</p>
      <button
        data-testid="sub"
        onClick={handleClick}
        value="decrement"
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter;
