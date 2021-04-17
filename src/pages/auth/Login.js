import React, { Component } from 'react'
import api from '../../utils/api.util'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



class Login extends Component {
  state = {
    email: '',
    password: '',
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
    console.log(`state da login ${this.state}`)
    try {
      await api.login(this.state);
      this.props.handleLogin(true);
      this.props.history.push('/main')
    } catch (error) {
      console.log(error);
      this.setState({
        message: 'Erro ao logar'
      })
    }
  }

  handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      await api.logout();
      this.props.history.push('/')
    } catch (error) {
      console.log(error);
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
                Login
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
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Esqueceu sua senha?
              </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={this.props.handleClick} href="#" variant="body2">
                      {"Ainda não tem uma conta? SignUp"}
                    </Link>
                  </Grid>
                </Grid>
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
            margin: "3px"
  }


     

      export default Login
