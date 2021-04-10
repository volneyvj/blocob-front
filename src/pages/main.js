import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import classifiedDetails from './classifiedDetails';
import Classifieds from './Classifieds';


class Home extends Component {
  render() {
    return (
      <>
        <section id="main-page">
          <div className="main">
                TAMO NA MAIN

              <Classifieds />
 
        </div>
  </section>

      </>

    )
  }

}

export default Home
