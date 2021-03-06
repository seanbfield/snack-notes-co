import React from 'react'
import axios from 'axios'
import Idea from './Idea';
import update from 'immutability-helper'
import IdeaForm from './IdeaForm'
import {
  allIdeas,
  newIdea,
  trashIdea,
  updateIdea
} from '../services/api';

import snl from '../assets/logo.png'

class IdeasContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notification: ''
    }
  }


  componentDidMount = async () => {
    if (this.props.currentUser) {
      const resp = await allIdeas()
      this.setState({ ideas: resp })
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.currentUser !== this.props.currentUser) {
      const resp = await allIdeas()
      this.setState({ ideas: resp })
    }
  }

  addNewIdea = async (e) => {
    e.preventDefault();
    const idea = await newIdea();
    console.log(idea);
    this.setState(prevState => ({
      ideas: [...prevState.ideas, idea],
      editingIdeaId: idea.id
    }))
  }


  updateIdea = async (idea) => {
    // const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const updatedIdea = await updateIdea(this.state.editingIdeaId, idea)
    this.setState(prevState => ({
      ideas: prevState.ideas.map(currentIdea => currentIdea.id === updatedIdea.id ? updatedIdea : currentIdea)
    }))
  }


  // prevstate.ideas.filter & filter out one with a matching id



  deleteIdea = async (id) => {
    await trashIdea(id);
    this.setState(prevState => ({
      ideas: prevState.ideas.filter(idea => idea.id !== id)
    }));
  }


  resetNotification = () => {
    this.setState(
      {
        notification: ''
      }
    )
  }
  enableEditing = (id) => {
    this.setState({ editingIdeaId: id }, () => { this.title.focus() })
  }
  render() {
    return (
      <div>
        <div class="header">
          <img src={snl} alt="logo" />
          <button
            className="newIdeaButton"
            onClick={this.addNewIdea}>New Idea</button>

          <span
            className="notification">
            {
              this.state.notification
            }
          </span>
        </div>
        {
          this.state.ideas.map((idea) => {
            if (this.state.editingIdeaId === idea.id) {
              return (
                <IdeaForm
                  idea={idea}
                  key={idea.id}
                  updateIdea={this.updateIdea}
                  titleRef={input => this.title = input}
                  resetNotification={this.resetNotification}
                />
              )
            } else {
              return (
                <Idea idea={idea}
                  key={idea.id}
                  enableEditing={this.enableEditing}
                  deleteIdea={this.deleteIdea}
                />)
            }
          })
        }
      </div >
    );
  }
}

export default IdeasContainer