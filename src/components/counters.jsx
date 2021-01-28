import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    const {counters,onIncrement,onDecrement,onDelete,onReset} = this.props ;
    return (
      <div>
        <button className="btn btn-primary bnt-sm m-2" onClick={onReset}>Reset</button>
        {counters.map((counter) => (
          <Counter onDecrement={onDecrement} onIncrement={onIncrement}  onDelete={onDelete} key={counter.id} counters={counter}>

          </Counter>
        ))}
      </div>
    );
  }

}

export default Counters;
