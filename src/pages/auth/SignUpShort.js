import React, { Component } from 'react'
import api from '../../utils/api.util'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



class SignupS extends Component {
  state = {
    email: '',
    password: '', 
    cep: '',  
    neighborhood: '',
    street: '',
    city: '',
    state: '',
    imgURL: 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png',
    score: 1, 
    lastZipCodeUpdate: Date().toLocaleString(),
    status: '10'
  }


  getNeighborhood = async () => {
    // const cep = this.state.cep.slice(0, -3)+"-"+this.state.cep.slice(-3)
    const cep = this.state.cep
    console.log(`cep: ${cep}`)
    try {
   let cepData =  await  axios.get(`http://viacep.com.br/ws/${cep}/json/unicode`)
   console.log(`info do api ${cepData}`)
            this.setState({
            neighborhood: cepData.data.bairro,
            street: cepData.data.logradouro,
            city: cepData.data.localidade,
            state: cepData.data.uf, 
        })
    } catch (error) {
        console.log(error.response);
    }
}

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  handleInput2 = (event) => {
    if (isFinite(event.target.value)) {
    // if (isNaN(Number(event.target.value))) {
      this.setState({ cep: event.target.value });
    } else {
        return;
    }
  }

  handleSubmit = async (event) => {
  try {
      event.preventDefault();
   await this.getNeighborhood()
    const user = await api.signup(this.state);
    this.props.handleLogin(true);
    this.props.history.push('/main')
    }
  catch (error) {
    console.log("error")
  }}


  render() {
    return (
      <div>  
    <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={paper}>
              <Typography component="h1" variant="h5">
                Inscrever-se
        </Typography>
              <form style={form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
      <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="cep"
                  label="cep"
                  id="cep"
                  type="text"
                  inputProps={{
    maxLength: 8,
  }}
                  autoComplete="cep"
                  value={this.state.cep}
                  onChange={this.handleInput2}
                />

                <Button 
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={submit}
                  onClick={this.handleSubmit}
                >
                  Registrar
          </Button>
              </form>
              <Link onClick={this.props.handleClick} href="#" variant="body2">
                      {"Já tem cadastro? LogIn"}
                    </Link>
            </div>
          </Container>

      </div>
    )
  }
}

const paper = {
  marginTop: "8px",
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
}

const form = {
  width: '100%', // Fix IE 11 issue.
marginTop: "1px"
}

const submit = {
  margin: "3px",
  background: "#2A4654",
  "&:hover": {
    background: "#e57373"
  },
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(9, 92, 95, .3)'
}




export default SignupS