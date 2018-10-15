import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { phase } = this.props;

    return (
      <div>
        <span>{phase}</span>
      </div>
    );
  }
}

export default Counter;
