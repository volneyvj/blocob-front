import React, { Component } from 'react'
import api from '../../utils/api.util'
import '../../App.css'
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core'

// console.log(Window.localStorage);

class Users extends Component {
  state = {
    users: [],
    neighborhood: localStorage.getItem("neighborhood"),
  }
  

  loadUsers = async () => {
    const { neighborhood } = this.state
   try {
   const users = await api.getAllUsers({neighborhood})
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


  render() {
    return (
      <div className="chat">
      <Typography variant="h6">Usuários da {`${this.state.neighborhood}`}</Typography> 
       <ul>
          {this.state.users.map(user => {
            return <li key={user._id}>
            <img className="small-img" src={user.imgURL} alt={user._id}></img> 
            {user.username} <Link color="secondary" href={`/users/userdetails/${user._id}`}>+</Link> 
            </li>
          })}
        </ul>

      </div>
    )
  }
}

export default Users
