import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {

  renderList(items) {
    return items.map((item, i) => <Item key={i} name={item}/>)
  }

  render() {
    return (
      <div>
        <h3>To Do List</h3>
        {this.renderList(this.props.items)}
      </div>

    )
  }
}
