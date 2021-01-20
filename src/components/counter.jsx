import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  handleIncrement = () => {
    this.setState({ value: this.props.counter.value + 1 });
    console.log(this.props.counter);
  };
  formatCount = () => {
    return (this.props.counter.value === 0) ? "Zero" : this.props.counter.value;


  }

  getBadgeClasses = () => {
    let classes = "badge badge-";
    return classes += this.props.counter.value === 0 ? "warning" : "primary";
  }

  render() {


    return (

      <div>
        {/* {this.props.children} */}
        
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          className="btn btn-secondary  m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          increment
        </button>
        <button className="btn btn-danger " onClick={() => this.props.onDelete(this.props.counter.id)}>
          delete
        </button>
      </div>
    );
  }


}

export default Counter;
