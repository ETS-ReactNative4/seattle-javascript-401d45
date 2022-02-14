import { useState } from 'react';
import './header.scss';

function Header(props) {
    let state = {
      name: 'Jacob',
    }

    // the useState hook returns an array or "tuple", the first item is the value currently assigned to "state"
    let [bananaState] = useState(state);

    return (
      <div id="header">
        <h1>{props.title}</h1>
        <p>{bananaState.name}</p>
      </div>
    );
}

export default Header;
