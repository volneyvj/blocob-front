import React, { Component } from 'react'
import api from '../../utils/api.util'
import { Link } from 'react-router-dom'

class Classifieds extends Component {
  
  constructor (props) {
    super(props) 
    
    this.state = {
    classifieds: [],
    sortedClassifieds: [],
    userClassifieds: [],
    neighborhood: 'Lapa',
    userID: localStorage.getItem("user"),
    comment: '',
  }
  }
  
 

  loadClassifieds = async () => {
    const { neighborhood } = this.state
    try {
      console.log(`o bairro eh ${neighborhood}`,this.state)
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
    const { neighborhood } = this.state
  try {  
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


  componentDidMount = async () => {
   await this.loadClassifieds();
   await this.loadSortedClassifieds();
   await this.loadClassifiedsFromUser();
  }


  render() {
    return (
      <>
      <div className="user-classifieds">
      Seus Classificados :
        <ul>
          {this.state.userClassifieds.map(classified => {
            return (
              <li key={classified.id}> {classified.title} - {classified.price} 
              - <Link to={`/classifieds/details/${classified._id}`}>  DETAILS </Link> 
          - <Link to={`/classifieds/edit/${classified._id}`}>EDIT </Link> 
              </li>
            )
          })}
        </ul>
        - <Link to={`/userclassifieds/`}>Ver todos seus clasificados </Link> 
        <p></p>
        <Link to='/classifieds/add'>Adicionar Novo Classificado</Link> - 
      </div>

      <p></p>

      <div className="sorted-classifieds">
      Classificados em Alta :
        <ul>
          {this.state.sortedClassifieds.map(classified => {
            return (
              <li key={classified.id}>{classified.title} - {classified.price}  - {classified.likes.length}
              - <Link to={`/classifieds/details/${classified._id}`}>  DETAILS </Link> 
              </li>
            )
          })}
        </ul>
      </div>

<p></p>

{/* <div className="sorted-classifieds">
      Outtros classifiedS DO SEu bairro
        <ul>
          {this.state.sortedClassifieds.map(classified => {
            return (
              <li>{classified.title} - {classified.price}  - {classified.likes.length}
              - <Link to={`/classifieds/details/${classified._id}`}>  DETAILS </Link> 
              </li>
            )
          })}
        </ul>
      </div> */}


</>

    )
  }
}

export default Classifieds
