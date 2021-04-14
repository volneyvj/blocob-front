import React, { Component } from 'react'
import api from '../../utils/api.util'
import { Link } from 'react-router-dom'

class UserClassifieds extends Component {
  
  state = {
    userClassifieds: [],
    userID: localStorage.getItem("user"),
  }

  loadClassifiedsFromUser = async () => {
    const { userID } = this.state
   try { 
    const classifieds = await api.getClassifiedsFromUser({userID})
    this.setState({
      userClassifieds: classifieds
    })
  }
  catch (error) {
    console.log(error);
  }
  }

 
  componentDidMount = () => {
    this.loadClassifiedsFromUser();
  }


  render() {
    return (
      <div>
      <div className="user-classifieds">
      Seus Classificados :
        <ul>
          {this.state.userClassifieds.map(classified => {
            return (
              <li key={classified.id}>{classified.title} - {classified.price} 
              - <Link to={`/classifieds/details/${classified._id}`}>  DETAILS </Link> 
          - <Link to={`/classifieds/edit/${classified._id}`}>EDIT </Link> 
              </li>
            )
          })}
        </ul>
        <p></p>
        <Link to='/classifieds/add'>Adicionar Novo Classificado</Link> - 
      </div>

      <p></p>
      </div>
    )
  }
}

export default UserClassifieds
