import React, { Component } from 'react'
import Button from '../components/Button';
import api from '../utils/api.util'
import { Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    email: '',
    cpf: '', 
    username: '',
    password: '', 
    name: '', 
    lastName: '', 
    cep: '', 
    street: '',
    streetNumber: '',
    streetComplement: '', 
    neighborhood: '', 
    city: '', 
    state: '', 
    phone: '',
    mobile: '', 
    birthDate: '', 
    profession: '', 
    imgURL: '',
    score: '', 
    lastZipCodeUpdate: '',
    status: ''
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = async (event) => {
    // const { email, cpf, username, password, name, lastName, cep, street, streetNumber, streetComplement, neighborhood, city, state, phone,
    //   mobile, birthDate, profession, imgURL, score, lastZipCodeUpdate, status } = this.state;
    event.preventDefault();
    const user = await api.signup(this.state);
      // console.log("registrado");
  }

  render() {
    return (
      <div>
      <h1> SignUp </h1>
        <form>
          <label>e-mail</label>
          <input name="email" type="text" value={this.state.email} onChange={this.handleInput}/>
          <label>Password</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleInput}/>
          <label>CPF</label>
          <input name="cpf" type="text" value={this.state.cpf} onChange={this.handleInput}/>
          <label>username</label>
          <input name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
           <label>name</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleInput}/>
          <label>lastName</label>
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleInput}/>
            <label>cep</label>
          <input name="cep" type="text" value={this.state.cep} onChange={this.handleInput}/>
          <label>street</label>
          <input name="street" type="text" value={this.state.street} onChange={this.handleInput}/>
          <label>street number</label>
          <input name="streetNumber" type="text" value={this.state.streetNumber} onChange={this.handleInput}/>
          <label>streetComplement</label>
          <input name="streetComplement" type="text" value={this.state.streetComplement} onChange={this.handleInput}/>
          <label>neighborhood</label>
          <input name="neighborhood" type="text" value={this.state.neighborhood} onChange={this.handleInput}/>
          <label>city</label>
          <input name="city" type="text" value={this.state.city} onChange={this.handleInput}/>
          <label>state</label>
          <input name="state" type="text" value={this.state.state} onChange={this.handleInput}/>
          <label>phone</label>
          <input name="phone" type="text" value={this.state.phone} onChange={this.handleInput}/>
          <label>mobile</label>
          <input name="mobile" type="text" value={this.state.mobile} onChange={this.handleInput}/>
           <label>birthDate</label>
          <input name="birthDate" type="date" value={this.state.birthDate} onChange={this.handleInput}/>
          <label>profession</label>         
          <input name="profession" type="text" value={this.state.profession} onChange={this.handleInput}/>
             <label>imgURL</label>
          <input name="imgURL" type="text" value={this.state.imgURL} onChange={this.handleInput}/>
           <label>score</label>
          <input name="score" type="number" value={this.state.score} onChange={this.handleInput}/>
             <label>lastZipCodeUpdate</label>
          <input name="lastZipCodeUpdate" type="date" value={this.state.lastZipCodeUpdate} onChange={this.handleInput}/>
           <label>status</label>
          <input name="status" type="number" value={this.state.status} onChange={this.handleInput}/>

          <button type="submit" onClick={this.handleSubmit}>+</button>
        </form>
      </div>
    )
  }
}

export default Signup