import React, { Component } from 'react'
import api from '../../utils/api.util'
import { Link } from 'react-router-dom'

class Comments extends Component {
  
  state = {
    comments: [],
    userId: '',
    category: '',
    classifiedID: '',
    answerOriginID: '',
    comment: '',
    likes: '',
    dislikes: ''
}

  loadComments = async () => {
    try {
      const { classifiedID } = this.state
    const comments = await api.getComments({classifiedID})
    this.setState({
      comments: comments
    })
  }
  catch (error) {
    console.log(error);
  }
  }

  componentDidMount = () => {
    this.loadComments();
  }


  submitLike = async (id, event) => {
    event.preventDefault();
    const commentLiked = await api.rankComment(id);
      console.log("curtido");
  }

  submitDelete = async (id, event) => {
    event.preventDefault();
    const commentLiked = await api.deleteComent(id);
      // console.log("editado");
  }

  

  render() {
    return (
      <div>

        <ul>
          {this.state.comments.map(comment => {
            return (
              <li key={comment.id}>{comment.comment} - {comment.category} - {comment.likes}
              <form><input name="id" type="hidden" value={comment._id}/>
              <button type="submit" onClick={this.submitLike(comment.id)}>CURTIR</button>
              </form>
             <form>
             <input name="id" type="hidden" value={comment._id}/>
             <button type="submit" onClick={this.submitDelete(comment.id)}>DELETAR</button></form> 



              </li>
            )
          })}
        </ul>

{/* 
        {this.state.classifieds.map(classified => {
          return (
            <h2>{classified.title}</h2> 
          - <Link to={`/classifieds/details/${classified.id}`}>  DETAILS </Link> 
          - <Link to={`/classifieds/edit/${classified.id}`}>EDIT </Link> 
          - <Link to={`/classifieds/delete/${classified.id}`}>DELETE</Link> 
          - <Link to='/classifieds/rank'>RANK </Link>
          )
        })} */}
        <p></p>
        <Link to='/classifieds/add'>ADD</Link> - 
         <Link to='/classifieds/user'>search</Link> 
      </div>
    )
  }
}

export default Comments