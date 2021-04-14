import React, { Component } from 'react'
import api from '../../utils/api.util'
import { Link } from 'react-router-dom'


class User extends Component {
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


  loadUser = async () => {
    const email = this.props.match.params.email
    const user = await api.getUsersDetails({email})
    this.setState({
      email: user.email,
      cpf: user.cpf, 
      username: user.username,
      password: user.password, 
      name: user.name, 
      lastName: user.lastName, 
      cep: user.cep, 
      street: user.street,
      streetNumber: user.streetNumber,
      streetComplement: user.streetComplement, 
      neighborhood: user.neighborhood, 
      city: user.city, 
      state: user.state, 
      phone: user.phone,
      mobile: user.mobile, 
      birthDate: user.birthDate, 
      profession: user.profession, 
      imgURL: user.imgURL,
      score: user.score, 
      lastZipCodeUpdate: user.lastZipCodeUpdate,
      status: user.status
    })
  } 

  componentDidMount = () => {
    this.loadUser();
  }


  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }



  render() {
    return (
      <div>
      <h1> details USER </h1>
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

        </form>
      </div>
    )
  }
}

export default User