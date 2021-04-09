import React, { Component } from 'react'
import api from '../utils/api.util'

class Login extends Component {
  state = {
    email:'',
    password:'',
    message:''
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.login(this.state);
      this.props.handleLogin(true);
      this.props.history.push('/')
    } catch (error) {
      console.log(error);
      this.setState({
        message:'Erro ao login'
      })
    }
  }

  handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      await api.logout();
      this.props.history.push('/')
    } catch (error) {
      console.log(error);
    }
  }



  render() {
    return (
      <div>
        {this.state.message && <h2>{this.state.message}</h2> }
        <form>
          <label>E-mail</label>
          <input type='text' name='email' value={this.state.email} onChange={this.handleInput}/>
          <label>Password</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleInput}/>
          <button type='submit'onClick={this.handleSubmit}>LOGIN</button>
        </form>
        <button type='submit'onClick={this.handleSubmit2}>LogOut</button>
      </div>
    )
  }
}

export default Login
