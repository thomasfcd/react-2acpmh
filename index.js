import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Thomas'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Here is some time:
        </p>
      </div>
    );
  }
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    
  }
   tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
      
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
render(<Timer />, document.getElementById('detail'));