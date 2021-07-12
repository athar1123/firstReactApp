import React from 'react';

class CounterApp extends React.Component {

    constructor(props) {
      super(props);
      this.incrementCounter = this.incrementCounter.bind(this);
      this.state = {
        count: 0
      };
    }
  
      incrementCounter() {
        this.setState({
          count: this.state.count + 1
        });
      };
   
    render() {
      return (
        <div>
           <h1> Count: {this.state.count}</h1>
          <button type="button" onClick={this.incrementCounter}>Counter</button>
        </div>
      );
    }
  }

  export default CounterApp;