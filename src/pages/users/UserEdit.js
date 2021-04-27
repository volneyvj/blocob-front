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
    score: 10,
    // lastZipCodeUpdate: "",
    status: 1,
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
      // score: user.score,
      // lastZipCodeUpdate: user.lastZipCodeUpdate,
      // status: user.status,
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

  handleFile = e => {
    this.setState({ imgURL: e.target.files[0] })
  }

  handleSubmit = async (event) => {
    // const { email, cpf, username, password, name, lastName, cep, street, streetNumber, streetComplement, neighborhood, city, state, phone,
    //   mobile, birthDate, profession, imgURL, score, lastZipCodeUpdate, status } = this.state;
    event.preventDefault();


    const formData = new FormData();
    formData.append('imgURL', this.state.imgURL);
    formData.append('id', this.state.id);
    formData.append('email', this.state.email);
    formData.append('cpf', this.state.cpf);
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);
    formData.append('name', this.state.name);
    formData.append('lastName', this.state.lastName);
    formData.append('cep', this.state.cep);
    formData.append('street', this.state.street);
    formData.append('streetNumber', this.state.streetNumber);
    formData.append('streetComplement', this.state.streetComplement);
    formData.append('neighborhood', this.state.neighborhood);
    formData.append('city', this.state.city);
    formData.append('state', this.state.state);
    formData.append('phone', this.state.phone);
    formData.append('mobile', this.state.mobile);
    formData.append('profession', this.state.profession);
    formData.append('birthDate', this.state.birthDate);
    // formData.append('lastZipCodeUpdate', this.state.lastZipCodeUpdate);

    const user = await api.edit(formData);
    this.setState({
      message: "Usuario Editado",
    });
    this.props.history.push('/main')
    // console.log("editado");
  };


  redirectIfNotUser() {
    if (this.props.match.params.id !== localStorage.getItem("user")) {
      this.props.history.push('/main')
    }
  }


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
                label="email"
                name="email"
                autoComplete="email"
                value={this.state.email}
                autoFocus
                inputProps={
                  { readOnly: true, }
                }
              />

              <TextField
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
                name="cep"
                label="cep"
                id="cep"
                autoComplete="cep"
                value={this.state.cep}
                inputProps={
                  { readOnly: true, }
                }
              />
              <Link onClick={this.props.handleClick} href="/users/cep" variant="body2">
                <Button color="secondary" variant="contained" size="large">"Preciso mudar o cep"</Button>
              </Link>


              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    value={this.state.name}
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    value={this.state.lastName}
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="street"
                    name="street"
                    label="Endereço"
                    fullWidth
                    autoComplete="rua"
                    value={this.state.street}
                    inputProps={
                      { readOnly: true, }
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="streetNumber"
                    name="streetNumber"
                    label="Número da rua"
                    fullWidth
                    autoComplete="streetNumber"
                    value={this.state.streetNumber}
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="streetComplement"
                    label="streetComplement"
                    id="streetComplement"
                    autoComplete="streetComplement"
                    value={this.state.streetComplement}
                    onChange={this.handleInput}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="phone"
                    id="phone"
                    autoComplete="phone"
                    value={this.state.phone}
                    onChange={this.handleInput}

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="mobile"
                    label="mobile"
                    id="mobile"
                    autoComplete="mobile"
                    value={this.state.mobile}
                    onChange={this.handleInput}

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="birthDate"
                    label="birthDate"
                    id="birthDate"
                    autoComplete="birthDate"
                    value={this.state.birthDate}
                    onChange={this.handleInput}

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="profession"
                    label="profession"
                    id="profession"
                    autoComplete="profession"
                    value={this.state.profession}
                    onChange={this.handleInput}

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <TextField
                 fullWidth
                name="imgURL"
                label="imgURL"
                id="imgURL"
                autoComplete="imgURL"
                value={this.state.imgURL}
                onChange={this.handleInput}

          /> */}

                  <input type='file' name="imgURL" id="imgURL" onChange={this.handleFile} />
                </Grid>

              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
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
  marginTop: "80px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "10px"
}

const submit = {
  margin: "3px",
  color: "white",
  background: "#2A4654"
}


export default UserEdit;
