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

  render() {
    return (
      <div className="tile">
        <form>
          <input className='input' type="text"
            name="title" placeholder='Enter a Title' />
          <textarea className='input' name="body"
            placeholder='Describe your idea'></textarea>
        </form>
      </div>
    );
  }
}

export default IdeaForm