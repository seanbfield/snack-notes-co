import React from 'react'
import axios from 'axios'

class IdeaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    }
  }


  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleBlur = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.updateIdea(idea)
  }


  render() {
    return (
      <div className="list-card">
        <form onBlur={this.handleBlur}>
          <input className='input' type="text"
            name="title"
            placeholder='Enter a Title'
            value={this.state.title}
            onChange={this.handleInput}
            ref={this.props.titleRef} />

          <textarea
            className='input'
            name="body"
            placeholder='Describe your idea'
            value={this.state.body}
            onChange={this.handleInput}>
          </textarea>
        </form>
      </div>
    );
  }
}

export default IdeaForm