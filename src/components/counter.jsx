import React, { Component } from "react";
class Counter extends Component {



  formatCount = () => {
    return (this.props.counters.value === 0) ? "Zero" : this.props.counters.value;


  }

  getBadgeClasses = () => {
    let classes = "badge badge-";
    return classes += this.props.counters.value === 0 ? "warning" : "primary";
  }

  render() {


    return (
      
      <div className='row'>
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        </div>
        <div className="col">
        <button
          className="btn btn-secondary m-2 "
          onClick={() => this.props.onIncrement(this.props.counters)}
        >
          +
        </button>
        <button
          className="btn btn-secondary m-2 "
          onClick={() => this.props.onDecrement(this.props.counters)} disabled={this.props.counters.value ===0 ? "disabled" : ''}
        >
          -
        </button>
        <button className="btn btn-danger " onClick={() => this.props.onDelete(this.props.counters.id)}>
          delete
        </button>
        </div>
       
        {/* {this.props.children} */}
        
      

        </div>       
    );
  }


}

export default Counter;
