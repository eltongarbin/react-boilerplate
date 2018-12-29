import React, { Component } from 'react';

class App extends Component {
  state = { count: 0 };

  handleToggleCountClick = (mode) => () => {
    this.setState((prevState) => ({
      count: mode === 'increase' ? prevState.count + 1 : prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleToggleCountClick('increase')}>+</button>
        <button onClick={this.handleToggleCountClick('decrease')}>-</button>
      </div>
    );
  }
}

export default App;
