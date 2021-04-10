import React, { Component } from 'react'
import Button from '../components/Button';
import api from '../utils/api.util'
import { Link } from 'react-router-dom'

class SignupS extends Component {
  state = {
    email: '',
    password: '', 
    cep: '',  
    imgURL: 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png',
    score: '0', 
    lastZipCodeUpdate: Date().toLocaleString(),
    status: '1'
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = async (event) => {
  try {
      event.preventDefault();
    const user = await api.signup(this.state);
    this.props.history.push('/main')
    }
  catch (error) {
  }
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
            <label>cep</label>
          <input name="cep" type="text" value={this.state.cep} onChange={this.handleInput}/>
          <button type="submit" onClick={this.handleSubmit}>Inscrever-se</button>
        </form>
      </div>
    )
  }
}

export default SignupS