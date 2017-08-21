import React, { Component } from 'react';
import './App.css';

import List from './components/List'

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [
        "buy gas",
        "go to bank",
        "pick up dry cleaning"
      ]
    }
  }

  render() {
    return (
      <div>
        <List items={this.state.items}/>
      </div>
    )
  }
}

export default App;
