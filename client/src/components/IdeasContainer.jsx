import React from 'react'
import axios from 'axios'
import Idea from './Idea';
class IdeasContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: []
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
        this.setState({ ideas: response.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <div>
          <button
            className="newIdeaButton"
            onClick={this.addNewIdea}>New Idea</button>
        </div>
        <div>
          {this.state.ideas.map((idea) => {
            return (
              <Idea idea={idea} key={idea.id} />
            )
          })}
        </div>
      </>
    )
  }
}

export default IdeasContainer