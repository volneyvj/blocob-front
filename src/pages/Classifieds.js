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
  }

  loadClassifieds = async () => {
    const { neighborhood } = this.state
    const classifieds = await api.getClassifieds(neighborhood)
    this.setState({
      classifieds: classifieds
    })
  }

  loadSortedClassifieds = async () => {
    const { neighborhood } = this.state
    const classifieds = await api.getSortedClassifieds(neighborhood)
    this.setState({
      sortedClassifieds: classifieds
    })
  }

  loadClassifiedsFromUser = async () => {
    const { userID } = this.state
    const classifieds = await api.getClassifiedsFromUser(userID)
    this.setState({
      userClassifieds: classifieds
    })
  }


  componentDidMount = () => {
    this.loadClassifieds();
    this.loadSortedClassifieds();
    this.loadClassifiedsFromUser();
  }

  render() {
    return (
      <div>
        {this.state.classifieds.map(classified => {
          return (
            <h2>{classified.title}</h2> 
          - <Link to='/classifieds/details'>DETAILS</Link> 
          - <Link to='/classifieds/edit'>EDIT </Link> 
          - <Link to='/classifieds/delete'>DELETE</Link> 
          - <Link to='/classifieds/rank'>RANK </Link>
          )
        })}
        <Link to='/classifieds/add'>ADD</Link>
         <Link to='/classifieds/user'>search</Link> 
      </div>
    )
  }
}

export default Classifieds
