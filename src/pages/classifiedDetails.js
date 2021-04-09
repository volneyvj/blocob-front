import React, { Component } from 'react'
import Button from '../components/Button';
import api from '../utils/api.util'
import { Link } from 'react-router-dom'


class classifiedDetails extends Component {
    state = {
        id: '',
        userID: '',
        category: '',
        subcategory: '',
        likes: '',
        dislikes: '',
        title: '',
        neighborhood: '',
        description: '',
        imgURL: '',
        price: '1',
        measure: '',
        delivery: '',
        // exclusivos serviços testimonial

        // exclusivos projeto
        motive: '',
        investment: '',
        filePDF: '',
        address: '',
        desiredDate: '',
        // confirmedUsers: '',
        comments: [],
        newComment: {
          comment: '',
          userID: '',
          classifiedID: ''
        },
    }

  loadClassified = async () => {
    const id = this.props.match.params.id
    const classified = await api.getClassifiedsDetails(id)
    this.setState({
        id: classified[0]._id,
        category: classified[0].category,
        subcategory: classified[0].subcategory,
        likes: classified[0].likes,
        dislikes: classified[0].dislikes,
        title: classified[0].title,
        neighborhood: classified[0].neighborhood,
        description: classified[0].description,
        imgURL: classified[0].imgURL,
        price: classified[0].price,
        measure: classified[0].measure,
        delivery: classified[0].delivery,
        // exclusivos serviços testimonial
        // exclusivos projeto
        motive: classified[0].motive,
        investment: classified[0].investment,
        filePDF: classified[0].filePDF,
        address: classified[0].address,
        desiredDate: classified[0].desiredDate,
        // confirmedUsers: '',
    
    })
  } 

  loadComments = async () => {
    try {
      // const { id } = this.state
    const allComments = await api.getComments(this.props.match.params.id)
    this.setState({
       comments: allComments
     })
  }
  catch (error) {
    console.log(error);
  }
  }

  componentDidMount = () => {
    this.loadClassified();
    this.loadComments();
  }

 
  handleInput = (event) => {
      this.setState
      ({newComment: {comment: event.target.value, userID: '606a68e0ba148414ef7114de', classifiedID: this.props.match.params.id}})
  }

  addComment = async (event) => {
    event.preventDefault();
    const classified = await api.addComment(this.state.newComment)
    console.log("comentario enviado");
    this.loadComments();
  }

  submitLike = async (event) => {
    event.preventDefault();
    const classified = await api.rankClassified({id: this.state.id, likes:1})
    console.log("curtido");
    this.loadClassified();
  }


  render() {
    return (
      <div>
      <h1>  CLASSIFIED details </h1>
      <form>
      <input name="id" type="hidden" value={this.state.id}/>
                    <label>User ID</label>
                    <input name="userID" type="text" value={this.state.userID} />
                    <label>Category</label>
                    <select id="category" name="category">
                        <option value="product">Product</option>
                        <option value="service">Service</option>
                        <option value="project">Projet</option>
                    </select>
                   <label>subcategory</label>
                    <input name="subcategory" type="text" value={this.state.subcategory} />
                    <label>likes</label>
                    <input name="likes" type="text" value={this.state.likes} />
                    <label>dislikes</label>
                    <input name="dislikes" type="text" value={this.state.dislikes} />
                    <label>title</label>
                    <input name="title" type="text" value={this.state.title} />
                    <label>neighborhood</label>
                    <input name="neighborhood" type="text" value={this.state.neighborhood} />
                    <label>description</label>
                    <input name="description" type="text" value={this.state.description} />
                    <label>imgURL</label>
                    <input name="imgURL" type="text" value={this.state.imgURL} />
                    <label>PRICE</label>
                    <input name="price" type="number" value={this.state.price} />
                    <label>measure</label>
                    <input name="measure" type="text" value={this.state.measure} />
                    <label>delivery</label>
                    <input name="delivery" type="checkbox" value={this.state.delivery} />
                    <label>motive</label>
                    <input name="motive" type="text" value={this.state.motive} />
                    <label>investment</label>
                    <input name="investment" type="number" value={this.state.investment} />
                    <label>filePDF</label>
                    <input name="filePDF" type="text" value={this.state.filePDF} />
                    <label>address</label>
                    <input name="address" type="text" value={this.state.address} />
                    <label>desiredDate</label>
                    <input name="desiredDate" type="date" value={this.state.desiredDate} />
                     <label>status</label>
                    <input name="status" type="number" value={this.state.status} />
                    
 </form>

 <form>
          <textarea name="comment" value={this.state.newComment.comment} onChange={this.handleInput} ></textarea>
              <button type="submit" onClick={this.addComment}>ENVIAR</button>
              </form>
            
              <button type="submit" onClick={this.submitLike}>CURTIR</button> 
              {/* <button type="submit" onClick={this.submitLike(comment.id)}>NAO CURTIR</button>  */}
             

              
              <ul>
          {this.state.comments.map(comment => {
            return (
              <li>{comment.comment} - {comment.category} - {comment.likes}
              {/* <form><input name="id" type="hidden" value={this.state.id}/>
              <button type="submit" onClick={this.submitLike}>CURTIR</button> 
              </form> */}
              </li>
            )
          })}
        </ul>


      </div>
    )
  }
}

export default classifiedDetails