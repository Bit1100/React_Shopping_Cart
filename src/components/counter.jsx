import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onReset, onDelete } = this.props;
    return (
      <React.Fragment>
        {this.props.children}
        <div className="container">
          <h2 className={this.classAdd()}>{this.formatCount()}</h2>

          <button className="btn " onClick={() => onIncrement(counter)}>
            +
          </button>

          <button className="btn " onClick={() => onDecrement(counter)}>
            -
          </button>

          <button className="btn " onClick={() => onReset(counter)}>
            R
          </button>

          <button className="btn " onClick={() => onDelete(counter.id)}>
            X
          </button>
        </div>
      </React.Fragment>
    );
  }
  classAdd() {
    let classes = "heading heading-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }
  formatCount() {
    let { value } = this.props.counter;
    return value < 1 ? "Zero" : value;
  }
}

export default Counter;
