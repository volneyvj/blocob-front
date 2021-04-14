import React, { Component } from 'react'
import api from '../../utils/api.util'
import { Link } from 'react-router-dom'


class EditClassifieds extends Component {
    state = {
        id: this.props.match.params.id,
        userID: '',
        category: '',
        subcategory: '',
        likes: '',
        dislikes: '',
        title: '',
        neighborhood: '',
        description: '',
        imgURL: '',
        price: '',
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
        status: '1',
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

  componentDidMount = () => {
    this.loadClassified();
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const classified = await api.editClassified(this.state);
    console.log("editado");
  }

  deleteClassified = async (id) => {
    
    try {
    const classified = await api.deleteClassified({id})
    console.log("DELETADO")
    this.loadClassifieds()
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
      <h1> EDIT CLASSIFIED </h1>
      <form>
      <input name="id" type="hidden" value={this.state.id}/>
                  
                    <label>Category</label>
                    <select onChange={this.handleInput} id="category" name="category">
                        <option value="product">Product</option>
                        <option value="service">Service</option>
                        <option value="project">Projet</option>
                    </select>
                   <label>subcategory</label>
                    <input name="subcategory" type="text" value={this.state.subcategory} onChange={this.handleInput} />
  
                    <label>title</label>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleInput} />
                    <label>neighborhood</label>
                    <input name="neighborhood" type="text" value={this.state.neighborhood} onChange={this.handleInput} />
                    <label>description</label>
                    <input name="description" type="text" value={this.state.description} onChange={this.handleInput} />
                    <label>imgURL</label>
                    <input name="imgURL" type="text" value={this.state.imgURL} onChange={this.handleInput} />
                    <label>PRICE</label>
                    <input name="price" type="number" value={this.state.price} onChange={this.handleInput} />
                    <label>measure</label>
                    <input name="measure" type="text" value={this.state.measure} onChange={this.handleInput} />
                    <label>delivery</label>
                    <input name="delivery" type="checkbox" value={this.state.delivery} onChange={this.handleInput} />
                    <label>motive</label>
                    <input name="motive" type="text" value={this.state.motive} onChange={this.handleInput} />
                    <label>investment</label>
                    <input name="investment" type="number" value={this.state.investment} onChange={this.handleInput} />
                    <label>filePDF</label>
                    <input name="filePDF" type="text" value={this.state.filePDF} onChange={this.handleInput} />
                    <label>address</label>
                    <input name="address" type="text" value={this.state.address} onChange={this.handleInput} />
                    <label>desiredDate</label>
                    <input name="desiredDate" type="date" value={this.state.desiredDate} onChange={this.handleInput} />
                
                    <button type="submit" onClick={this.handleSubmit}>+</button>
                </form>

                <button onClick={ () => this.deleteClassified(this.state.id)}>DELETE</button> 

      </div>
    )
  } 
}

export default EditClassifieds