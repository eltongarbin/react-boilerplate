import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends PureComponent {
  state = { isError: false };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Something went wrong!</div> : children;
  }
}

DefaultErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultErrorBoundary;
