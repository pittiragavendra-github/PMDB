import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    console.log(this.props);
  };
   formatCount() {
    return (this.props.value === 0) ?   <p>Zero</p> : this.props.value
    

  }

  
  render() {

    return (

      <div>
        {/* {this.props.children} */}
        <span className="badge badge-warning m-2">{this.formatCount()}</span>

        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleIncrement()}
        >
          increment
        </button>
      </div>
    );
  }
}

export default Counter;
