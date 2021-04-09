import React, { Component } from 'react'
import api from '../utils/api.util'
import { Link } from 'react-router-dom'

class Classifieds extends Component {
  
  state = {
    classifieds: [],
    sortedClassifieds: [],
    userClassifieds: [],
    neighborhood: '',
    userID: '',
    comment: '',
  }

  loadClassifieds = async () => {
    try {
      const { neighborhood } = this.state
    const classifieds = await api.getClassifieds({neighborhood})
    this.setState({
      classifieds: classifieds
    })
  }
  catch (error) {
    console.log(error);
  }
  }

  loadSortedClassifieds = async () => {
  try {  const { neighborhood } = this.state
    const classifieds = await api.getSortedClassifieds({neighborhood})
    this.setState({
      sortedClassifieds: classifieds
    })
  }
  catch (error) {
    console.log(error);
  }
  }

  loadClassifiedsFromUser = async () => {
   try { const { userID } = this.state
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
    this.loadClassifieds();
    // this.loadSortedClassifieds();
    // this.loadClassifiedsFromUser();
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

        <ul>
          {this.state.classifieds.map(classified => {
            return (
              <li>{classified.title} - {classified.price} 
              - <Link to={`/classifieds/details/${classified._id}`}>  DETAILS </Link> 
          - <Link to={`/classifieds/edit/${classified._id}`}>EDIT </Link> 
          <button onClick={ () => this.deleteClassified(classified._id)}>DELETE</button> 
              </li>
            )
          })}
        </ul>


        <p></p>
        <Link to='/classifieds/add'>ADD</Link> - 
         <Link to='/classifieds/user'>search</Link> 
      </div>
    )
  }
}

export default Classifieds
