import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { MoviesC } from './components/moviesC';
import Like from "./components/common/like";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  constructor(props){
    super(props);
    console.log( `{App -constructor}`,this.props);
  }
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
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
    console.log(counterId);
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log(counters);
  };
  componentDidMount(){
    console.log('app mounted');
  }
  render() {
    console.log('renderd');
        return (
      <React.Fragment>
        <Navbar totalcount={this.state.counters.filter(c => c.value >0 ).length} />
        <main className="container">
          
           <MoviesC></MoviesC> 

          {/* <Counters
            
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
