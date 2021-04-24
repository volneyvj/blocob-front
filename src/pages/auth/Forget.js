import React, { Component } from 'react'
import api from '../../utils/api.util'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class Forget extends Component {
  state = {
    email: '',
    message: ''
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.forget(this.state);
      this.props.history.push('/')
    } catch (error) {
      console.log(error);
      this.setState({
        message: 'Caso você tenha cadastro,um E-mail foi enviado para sua conta'
      })
    }
  }


  render() {
    return (
      <div>
        {this.state.message && <h2>{this.state.message}</h2>}
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={paper}>
              <Typography component="h1" variant="h5">
                Esqueci minha senha
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
            
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={submit}
                  onClick={this.handleSubmit}
                >
                  Entrar 
              </Button>
    
              </form>
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
            '&:hover': {
              backgroundColor: '#e57373',
              color: '#fff',
          },
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(9, 92, 95, .3)'
  }


     

      export default Forget
