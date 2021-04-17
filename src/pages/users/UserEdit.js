import React, { Component } from "react";
import api from "../../utils/api.util";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class UserEdit extends Component {
  state = {
    id: "",
    email: "",
    cpf: "",
    username: "",
    password: "",
    name: "",
    lastName: "",
    cep: "",
    street: "",
    streetNumber: "",
    streetComplement: "",
    neighborhood: "",
    city: "",
    state: "",
    phone: "",
    mobile: "",
    birthDate: "",
    profession: "",
    imgURL: "",
    score: "",
    lastZipCodeUpdate: "",
    status: "",
  };

  loadUser = async () => {
    const id = this.props.match.params.id;
    const user = await api.getUsersDetails({ id });
    this.setState({
      id: user._id,
      email: user.email,
      cpf: user.cpf,
      username: user.username,
      password: user.password,
      name: user.name,
      lastName: user.lastName,
      cep: user.cep,
      street: user.street,
      streetNumber: user.streetNumber,
      streetComplement: user.streetComplement,
      neighborhood: user.neighborhood,
      city: user.city,
      state: user.state,
      phone: user.phone,
      mobile: user.mobile,
      birthDate: user.birthDate,
      profession: user.profession,
      imgURL: user.imgURL,
      score: user.score,
      lastZipCodeUpdate: user.lastZipCodeUpdate,
      status: user.status,
      message: "",
    });
  };

  componentDidMount = () => {
    this.loadUser();
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    // const { email, cpf, username, password, name, lastName, cep, street, streetNumber, streetComplement, neighborhood, city, state, phone,
    //   mobile, birthDate, profession, imgURL, score, lastZipCodeUpdate, status } = this.state;
    event.preventDefault();
    const user = await api.edit(this.state);
    this.setState({
      message: "Usuario Editado",
    });
    this.props.history.push('/main')
    // console.log("editado");
  };

  // redirectIfNotUser() {
  //   if (this.props.match.params.id !== localStorage.getItem("user"))  {
  //     this.props.history.push('/main')
  //   }
  // }

  render() {
    return (
      <div>


        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={paper}>
            <Typography component="h1" variant="h5">
              EDITAR PERFIL
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
                autoFocus
                inputProps={
                  { readOnly: true, }
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="cep"
                label="cep"
                id="cep"
                autoComplete="cep"
                value={this.state.cep}
                inputProps={
                  { readOnly: true, }
                }
              />
              <Link onClick={this.props.handleClick} href="/user/cep" variant="body2">
                {"Preciso mudar o cep"}
              </Link>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="username"
                label="username"
                id="username"
                autoComplete="username"
                value={this.state.username}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="cpf"
                label="cpf"
                id="cpf"
                autoComplete="cpf"
                value={this.state.cpf}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                label="name"
                id="name"
                autoComplete="name"
                value={this.state.name}
                onChange={this.handleInput}
              />


              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="lastName"
                id="lastName"
                autoComplete="lastName"
                value={this.state.lastName}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="street"
                label="street"
                id="street"
                autoComplete="street"
                value={this.state.street}
                inputProps={
                  { readOnly: true, }
                }
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="streetNumber"
                label="streetNumber"
                id="streetNumber"
                autoComplete="streetNumber"
                value={this.state.streetNumber}
                onChange={this.handleInput}
              />


              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="streetComplement"
                label="streetComplement"
                id="streetComplement"
                autoComplete="streetComplement"
                value={this.state.streetComplement}
                onChange={this.handleInput}
              />


              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="neighborhood"
                label="neighborhood"
                id="neighborhood"
                autoComplete="neighborhood"
                value={this.state.neighborhood}
                inputProps={
                  { readOnly: true, }
                }
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="city"
                label="city"
                id="city"
                autoComplete="city"
                value={this.state.city}
                inputProps={
                  { readOnly: true, }
                }
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="state"
                label="state"
                id="state"
                autoComplete="state"
                value={this.state.state}
                inputProps={
                  { readOnly: true, }
                }
              />


              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="phone"
                id="phone"
                autoComplete="phone"
                value={this.state.phone}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="mobile"
                label="mobile"
                id="mobile"
                autoComplete="mobile"
                value={this.state.mobile}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="profession"
                label="profession"
                id="profession"
                autoComplete="profession"
                value={this.state.profession}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="birthDate"
                label="birthDate"
                id="birthDate"
                autoComplete="birthDate"
                value={this.state.birthDate}
                onChange={this.handleInput}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="imgURL"
                label="imgURL"
                id="imgURL"
                autoComplete="imgURL"
                value={this.state.imgURL}
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
                Alterar Perfil
          </Button>
            </form>
          </div>
        </Container>


      </div>
    );
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


export default UserEdit;
