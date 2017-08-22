import React, { Component } from 'react'
import '../App.css'

export default class Item extends Component {

  constructor() {
    super()
    this.state = {
      active: true
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <li>
        <span className={this.state.active ? "list-item-active" : "list-item-done"}>{this.props.name}</span>
        <span><button onClick={this.handleButtonClick}>done</button></span>
      </li>
    )
  }
}
