import React, { Component } from 'react'
import api from '../../utils/api.util'
import SignUp from './SignUpShort';

class SignupS extends Component {
//   state = {
//     email: '',
//     cpf: '', 
//     username: '',
//     password: '', 
//     name: '', 
//     lastName: '', 
//     cep: '', 
//     street: '',
//     streetNumber: '',
//     streetComplement: '', 
//     neighborhood: '', 
//     city: '', 
//     state: '', 
//     phone: '',
//     mobile: '', 
//     birthDate: '', 
//     profession: '', 
//     imgURL: '',
//     score: '', 
//     lastZipCodeUpdate: '',
//     status: ''
//   }

//   handleInput = (event) => {
//     const { name, value } = event.target
//     this.setState({
//       [name]:value
//     })
//   }

//   handleSubmit = async (event) => {
//     // const { email, cpf, username, password, name, lastName, cep, street, streetNumber, streetComplement, neighborhood, city, state, phone,
//     //   mobile, birthDate, profession, imgURL, score, lastZipCodeUpdate, status } = this.state;
//     try {
//       event.preventDefault();
//     const user = await api.signup(this.state);
//     }
//   catch (error) {
//   }
//   }

  render() {
    return (
      <div>
  <SignUp />
      </div>
    )
  }
}

export default SignupS