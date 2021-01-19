import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 1 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((c) => (
          <Counter selected="true" value={c.value} key={c.id}>
             {/* <b>counter # {c.id}#</b>  */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
