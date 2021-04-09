import React, { Component } from 'react'
import Button from '../components/Button';
import api from '../utils/api.util'
import { Link } from 'react-router-dom'

// console.log(Window.localStorage);

class Users extends Component {
  state = {
    users: [],
    neighborhood: '',
    // userid: localStorage.getItem("user"),
  }
  

  loadUsers = async () => {
    // const nomeBanana = this.props.match.params.banana
    // console.log(nomeBanana)
   try {

   const users = await api.getAllUsers()
    this.setState({
      users: users
    })
  }
  catch (error) {
    console.log(error);
  }
  } 

  componentDidMount = () => {
    this.loadUsers();
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { neighborhood } = this.state
    const users = await api.getUsers({neighborhood})
    console.log(users)
    this.setState({
      users: users
    })
  } 

  render() {
    return (
      <div>
        <form>
          <label>neighborhood</label>
          <input name="neighborhood" type="text" value={this.state.neighborhood} onChange={this.handleInput}/>
          <button type="submit" onClick={this.handleSubmit}>+</button>
        </form>

        <ul>
          {this.state.users.map(user => {
            return <li>{user.email} - {user._id}  <Link to={`/users/userdeatails/${user.email}`}>  DETAILS </Link> - <Link to={`/users/useredit/${user.email}`}>EDIT</Link> </li>
          })}
        </ul>

        <p>
        <Link to='/signup'>SignUp</Link>
        <Link to='/users/useredit/${}'>Edit</Link> 
        </p>
      </div>
    )
  }
}

export default Users
