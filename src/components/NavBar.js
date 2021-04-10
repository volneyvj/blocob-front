import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import '../App.css';


class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='nav-bar' style={styleNav}>
          <div>
            <Link to='/'><span style={{ color: 'white' }}> <img width="25%" src="/images/blogo.jpeg" alt="logo"/></span></Link>
          </div>

          <div>
            <Link to='/#comofunciona'><span style={{ color: 'white' }}>Como Funciona</span></Link>
          </div>

          <div>
            <Link to='/signup'><span style={{ color: 'white' }}>Buscar um Classificado</span></Link>
          </div>

          <div>
            <Link to='/#comofunciona'><span style={{ color: 'white' }}>About</span></Link>
          </div>




          {/* <Link Link to='/users'><Button name = 'Users' /></Link>
          <Link Link to='/classifieds'><Button name = 'Classifieds' /></Link>
          <Link Link to='/comments'><Button name = 'Comments' /></Link>
          <Link Link to='/login/'><Button name = 'Login' /></Link> */}

          {/* {this.props.loggedInUser ? 
          (<>
            <Link Link to='/projects'><Button color= 'red' name = 'Projects' /></Link>
            <Link Link to='/students'><Button color= 'red' name = 'Students' /></Link>
          </>)
          : 
          (<div style={styleDiv}>
          <Link Link to='/signup'><Button color= 'red' name = 'Signup' /></Link>
          <Link to='/login'><Button  color='blue' name = 'Login'/></Link>
          </div>)} */}
        </nav>
      </div>
    )
  }
}

const styleNav = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'gray',
}

// const styleDiv = {
//   display: 'flex',
//   justifyContent: 'space-between',
// }

export default NavBar