import React, { Component } from 'react'
import Button from '../components/Button';
import api from '../utils/api.util'
import { Link } from 'react-router-dom'

class classifiedAdd extends Component {
    state = {
        userID: '',
        category: 'product',
        subcategory: '',
        likes: '',
        // dislikes: '',
        // title: '',
        neighborhood: '',
        description: '',
        imgURL: '',
        price: '1',
        measure: '',
        delivery: 'false',
        // exclusivos serviços testimonial

        // exclusivos projeto
        motive: '',
        investment: '1',
        filePDF: '',
        address: '',
        desiredDate: '',
        // confirmedUsers: '',
        status: '1',
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = await api.addClassified(this.state);
        console.log("classiificado registrado");
    }

    render() {
        return (
            <div>
                <h1> Adicionar Classificado </h1>
                <form>
                    <label>User ID</label>
                    <input name="userID" type="text" value={this.state.userID} onChange={this.handleInput} />
                    <label>Category</label>
                    <select onChange={this.handleInput} id="category" name="category">
                        <option value="product">Product</option>
                        <option value="service">Service</option>
                        <option value="project">Projet</option>
                    </select>
                   <label>subcategory</label>
                    <input name="subcategory" type="text" value={this.state.subcategory} onChange={this.handleInput} />
                    {/* <label>likes</label>
                    <input name="likes" type="text" value={this.state.likes} onChange={this.handleInput} />
                    <label>dislikes</label>
                    <input name="dislikes" type="text" value={this.state.dislikes} onChange={this.handleInput} /> */}
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
                     <label>status</label>
                    <input name="status" type="number" value={this.state.status} onChange={this.handleInput} />
                    

                    <button type="submit" onClick={this.handleSubmit}>+</button>
                </form>
            </div>
        )
    }
}

export default classifiedAdd