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
      ],
      input: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.setState({ items: [this.state.input].concat(this.state.items) })
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
      <div>
        <List items={this.state.items}/>
      </div>
      <form onSubmit={this.handleFormSubmit}>
        <input
          placeholder="Enter new to do item"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <input value="Add" type="submit" />
      </form>
    </div>
    )
  }
}

export default App;
