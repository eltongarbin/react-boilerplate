import React, { Component, lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';

const Warning = lazy(() => import('./Warning'));

class App extends Component {
  state = { count: 0 };

  handleToggleCountClick = (mode) => () => {
    this.setState((prevState) => ({
      count: mode === 'increase' ? prevState.count + 1 : prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Hello world!!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.handleToggleCountClick('increase')}>+</button>
        <button onClick={this.handleToggleCountClick('decrease')}>-</button>
        {count > 10 && (
          <Suspense fallback={null}>
            <Warning />
          </Suspense>
        )}
      </div>
    );
  }
}

export default hot(module)(App);
