import React from 'react'
import axios from 'axios'
import Idea from './Idea';
import update from 'immutability-helper'
import IdeaForm from './IdeaForm'

class IdeasContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3000/ideas')
      .then(response => {
        console.log(response)
        this.setState({ ideas: response.data })
      })
      .catch(error => console.log(error))
  }

  addNewIdea = () => {
    axios.post('http://localhost:3000/ideas',
      {
        idea:
        {
          title: '',
          body: ''
        }
      }
    )
      .then(response => {
        console.log(response)
        const ideas = update(this.state.ideas, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({ ideas: ideas, editingIdeaId: response.data.id })
      })
      .catch(error => console.log(error))
  }

  updateIdea = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const ideas = update(this.state.ideas, {
      [ideaIndex]: { $set: idea }
    })
    this.setState({ ideas: ideas })
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="newIdeaButton"
            onClick={this.addNewIdea}>New Idea</button>
        </div>
        {this.state.ideas.map((idea) => {
          if (this.state.editingIdeaId === idea.id) {
            return (<IdeaForm idea={idea} key={idea.id} updateIdea={this.updateIdea} />)
          } else {
            return (<Idea idea={idea} key={idea.id} />)
          }
        })}
      </div >
    );
  }
}

export default IdeasContainer