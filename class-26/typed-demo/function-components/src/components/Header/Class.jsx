import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props); // activate React.Component Powers
    this.state = {
      name: 'Jacob',
    }
  }

  render() {
    return (
      <div id="header">
        <h1>{this.props.title}</h1>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Header;


