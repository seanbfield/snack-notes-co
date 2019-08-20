import React, { Component } from 'react'

class Idea extends Component {

  handleClick = () => {
    this.props.enableEditing(this.props.idea.id)
  }

  handleDelete = (e) => {
    e.stopPropagation()
    this.props.deleteIdea(this.props.idea.id)
  }

  render() {
    return (
      <div className="tile" onClick={this.handleClick}>
        <span
          className="deleteButton"
          onClick={this.handleDelete}>
          x
          </span>


        <h4>
          {this.props.idea.title}
        </h4>
        <p>
          {this.props.idea.body}
        </p>
      </div>
    )
  }
}

export default Idea