import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleIncrement =  counter => {
    const counters = [...this.state.counters] ;
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});

    

  }
  handleDelete = counterId => {

    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({ counters });
    console.log(counterId);
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log(counters);

  }
  render() {
    return (
      <div>
        <button className="btn btn-primary bnt-sm m-2"onClick={this.handleReset}>Reset</button>
        {this.state.counters.map((counter) => (
          <Counter  onIncrement={this.handleIncrement} onReset={this.handleReset} onDelete={this.handleDelete} key={counter.id} counter={counter}>

          </Counter>
        ))}
      </div>
    );
  }

}

export default Counters;
