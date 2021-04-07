import React, { Component } from 'react'
import api from '../utils/api.util'

class Comments extends Component {
  
  state = {
    comments: []
  }

  componentDidMount = async () => {
    const comments = await api.getAllProjects();
    this.setState({
      comments: comments
    })
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return <h2>{comment.comment}</h2>
        })}
      </div>
    )
  }
}

export default Comments