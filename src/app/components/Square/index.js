import React, { Component } from 'react';

import './styles.css';

class Square extends Component {
  state = {
    value: null
  };

  render() {
    return (
      <button className={'square'} onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
