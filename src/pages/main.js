import React, { Component } from "react";
import "../App.css";
import api from "../utils/api.util";
import Classifieds from "./classifieds/Classifieds";
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

class Main extends Component {
  state = {
    // users: [],
    // neighborhood: '',
    email: "",
    username: "",
    name: "",
    cep: "",
    street: "",
    neighborhood: localStorage.getItem("neighborhood"),
    city: "",
    imgURL: "",
    score: "",
    userid: localStorage.getItem("user"),
    query: "",
  };

  loadUser = async () => {
    const id = this.state.userid;
    const user = await api.getUsersDetails({ id });
    this.setState({
      email: user.email,
      username: user.username,
      name: user.name,
      cep: user.cep,
      street: user.street,
      neighborhood: user.neighborhood,
      city: user.city,
      imgURL: user.imgURL,
      score: user.score,
    });
  };

  componentDidMount = async () => {
    await this.loadUser();
  };


  handleInput = (event) => {
    const { query } = event.target;
    this.setState({
      query: query
    });
  };
  

  render() {

    return (
      <>
        <section id="main-page">
          <div className="main">


            <form style={form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                id="query"
                label="Buscar Classificado"
                name="query"
                autoFocus
                onChange={this.handleInput}
              />
              <br/>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
              {/* <Link href={`./allclassifieds/${this.state.query}`}></Link>
                Buscar */}
          </Button>
            </form>

            <Button
              variant="contained"
              color="secondary"
              style={submit}
            >
              Busca Avançada
          </Button>


            <div style={main}>
              <Container maxWidth="sm">
                <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Bem Vindo {this.state.name} !<br></br>
                </Typography>
                <img src={this.state.imgURL} width="10%"></img>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>

                  {this.state.username}
                  
                    <b>{this.state.neighborhood}</b>
                  
              Seu CEP: {this.state.cep} - {this.state.street}.
              Seu Score: {this.state.score}
                </Typography>
                <div style={mainbuttons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        <Link href={`/users/useredit/${this.state.userid}`}>
                          Edit
                      </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>


           

            <Classifieds userNeighborhood={this.state.neighborhood} />
          </div>
        </section>

          <Typography><Link href={`/allclassifieds/${this.state.query}`}>Ver Todos Classificados do Bairro</Link></Typography>


        <section id="comofunciona">
          <Container style={comofunciona} maxWidth="lg">
            <Grid container spacing={8}>
              <Grid item xs={6} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image="/images/produtos.jpeg"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Produtos
                    </Typography>
                    <Typography>
                      Anuncie ou busque seus produtos .....
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image="/images/servicos.jpeg"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Serviços
                    </Typography>
                    <Typography>
                      Tem um servi;o..... ou busque...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image="/images/projetos.jpeg"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Projetos
                    </Typography>
                    <Typography>
                      Tem ideia de algum projeto social no seu bairro?
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>


      </>
    );
  }
}


const comofunciona = {

}

const main = {
  backgroundColor: "white",
  padding: "8px 0 6px"
}

const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "1px"
}

const submit = {
  margin: "3px"
}

const mainbuttons = {
  marginTop: "4px"
}


const cardGrid = {
  paddingTop: "8px",
  paddingBottom: "8px"
}

const card = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}

const cardMedia = {
  paddingTop: '56.25%', // 16:9
}

const cardContent = {
  flexGrow: 1,
}

export default Main;
