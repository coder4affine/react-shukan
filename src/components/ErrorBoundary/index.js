import React, { Component } from "react";
import PropTypes from "prop-types";

class index extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) {
      return <h1>Oops! something went wrong. Try After Sometime.</h1>;
    }
    return this.props.children;
  }
}

index.propTypes = {};

export default index;
