import React, { Component } from 'react'

class Idea extends Component {

  handleClick = () => {
    this.props.enableEditing(this.props.idea.id)
  }

  handleDelete = () => {
    this.props.deleteIdea(this.props.idea.id)
  }

  render() {
    return (
      <div className="tile" onClick={this.handleClick}>
        <span
          className="deleteButton"
          onClick={(e) => {
            e.stopPropagation()
            this.handleDelete(this.props.idea.id)
          }}>
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