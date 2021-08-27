import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Footer from "./components/footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 1, itemCategory: "Grocery" },
        { id: 2, value: 0, itemCategory: "Clothes" },
        { id: 3, value: 0, itemCategory: "Electronics" },
        { id: 4, value: 0, itemCategory: "Shoes" },
      ],
    };
  }

  handleDelete = (countId) => {
    const counters = this.state.counters.filter((c) => c.id !== countId);
    this.setState({ counters });
  };

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalItems={this.state.counters.reduce(
            (totalItems, c) => totalItems + c.value,
            0
          )}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onResetAll={this.handleResetAll}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
