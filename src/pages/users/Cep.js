import React, { Component } from "react";
import api from "../../utils/api.util";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'



class CepEdit extends Component {
  state = {
    id: "",
    cep: "",
    street: "",
    streetNumber: "",
    streetComplement: "",
    neighborhood: "",
    city: "",
    state: "",
    lastZipCodeUpdate: "",
  };

  loadUser = async () => {
    const id = localStorage.getItem("user")
    const user = await api.getUsersDetails({ id });
    this.setState({
      id: user._id,
      cep: user.cep,
      street: user.street,
      streetNumber: user.streetNumber,
      streetComplement: user.streetComplement,
      neighborhood: user.neighborhood,
      city: user.city,
      state: user.state,
      lastZipCodeUpdate: user.lastZipCodeUpdate,
      message: "",
    });
  };

  componentDidMount = () => {
    this.loadUser();
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    var today = new Date();
    var zipdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    this.setState({
      [name]: value,
      lastZipCodeUpdate: zipdate,
    });
  };

  getNeighborhood = async () => {
    const cep = this.state.cep
    try {
   let cepData =  await  axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            this.setState({
            neighborhood: cepData.data.bairro,
            street: cepData.data.logradouro,
            city: cepData.data.localidade,
            state: cepData.data.uf, 
        })
        return;
    } catch (error) {
        console.log(error);
    }
}

  handleInputCEP = (event) => {
    if (isFinite(event.target.value)) {
    // if (isNaN(Number(event.target.value))) {
      this.setState({ cep: event.target.value });
      this.getNeighborhood()
    } else {
        return;
    }
  }



  handleSubmit = async (event) => {
    // const { email, cpf, username, password, name, lastName, cep, street, streetNumber, streetComplement, neighborhood, city, state, phone,
    //   mobile, birthDate, profession, imgURL, score, lastZipCodeUpdate, status } = this.state;
    event.preventDefault();
    const user = await api.editCEP(this.state);
    this.setState({
      message: "CEP Editado",
    });
    this.props.history.push('/main')
  };


  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={paper}>
            <Typography component="h1" variant="h5">
              ALTERAR CEP 
        </Typography>

        { (this.state.lastZipCodeUpdate === "new" ) ? ( 
            <form style={form} noValidate>
             
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
                  onChange={this.handleInputCEP}
                />

             
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={submit}
                onClick={this.handleSubmit}
              >
                Alterar CEP
          </Button>
            </form>
        ) : (
                <div>
                <Typography>Você alterou seu CEP nos últimos 60 dias</Typography>
                </div>
        )
        }
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


export default CepEdit;
