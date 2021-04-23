import React, { Component } from "react";
import "../App.css";
import api from "../utils/api.util";
import Classifieds from "./classifieds/Classifieds";
import Users from "./users/Users";
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';

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
         <div className="mainFlex">
        <Paper style={paper}>
          <div className="userInfo"> <img style={userpic} src={this.state.imgURL}></img>
          <Typography variant="h5" align="left" color="textPrimary" >
                  {this.state.username}
                  <hr></hr>
                  <b>{this.state.neighborhood}</b>
                  </Typography>
                  <b>Seu CEP:</b> {this.state.cep} 
                  <br/>{this.state.street}
                  <hr></hr>
                  <Typography variant="h6" fontWeight="400">
                  <EmojiEventsOutlinedIcon fontSize="large"/>   Seu Score: {this.state.score} <EmojiEventsOutlinedIcon fontSize="large"/> 
                  </Typography>
                 <hr></hr>
                    <div style={mainbuttons}>
                      <Grid container spacing={2} justify="left">
                        <Grid item>
                        <Link href={`/users/useredit/${this.state.userid}`}>
                          <Button variant="contained" style={button}>
                              Editar Perfil
                          </Button>
                          </Link>
                        </Grid>
                      </Grid>
                      <hr className="strongHR"></hr>
                      <Users />
               </div> 
               </div>
 </Paper>
          <div className=""></div>
          <div className="">         <Classifieds userNeighborhood={this.state.neighborhood} /> </div>
    
         </div>
        
        </section>


          <section id="comofunciona">
            <Container style={comofunciona} maxWidth="lg">
              <Grid container spacing={12}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card style={cardComo}>
                    <CardMedia
                      image="/images/produtos.jpeg"
                      title="Image title"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Produtos
                    </Typography>
                      <Typography>
                        Anuncie ou busque produtos no BlocoB.
                        Faça um simples cadastro e já começe utlizando nossa plataforma para vendas de alimentos, materiais, ou até doaçoes são bem vindas.
                        Sempre pensando na comunidade e harmonia de seu bairro
                    </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card style={cardComo2}>
                    <CardMedia
                      image="/images/servicos.jpeg"
                      title="Image title"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Serviços
                    </Typography>
                      <Typography>
                        Procura um serviço espcecífico ou tem habilidades para reparo, pintura, passeio com cachorro, enfim... 
                        Muitas opções para você divulgar seu trabalho ou contratar o serviço de alguém de confiança do seu próprio bairro. Não esqueça de escrever sua recomendação.
                    </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card style={cardComo}>
                    <CardMedia
                      image="/images/projetos.jpeg"
                      title="Image title"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Projetos
                    </Typography>
                      <Typography>
                        Tem ideia de algum projeto social no seu bairro? Aquela praça que precisa de uma revitalização com um pet-place, ou quem sabe
                        melhorar o acesso da passarela que comunica com o bairro vizinho. Escreva um projeto e encontre adeptos na comunidade. 
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


const main = {
  backgroundColor: "#EEEDEB",
  padding: "8px 0 6px",
  marginTop: "10px",
  fontFamily: 'Quicksand'
}

const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "1px"
}

const submit = {
  margin: "3px"
}

const userpic = { 
  width: "35%",
  borderRadius: "22%"
}

const mainbuttons = {
  marginTop: "4px"
}

const cardGrid = {
  paddingTop: "8px",
  paddingBottom: "8px",
  backgroundColor: "#EEEDEB"
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


const comofunciona = {
  padding: "40px"
          }
  
  const cardComo = {
    padding: "0x",
    backgroundColor: ""
  }
  
  const cardComo2 = {
    padding: "0x",
    backgroundColor: "#98B4D4"
  }
  
  const button = {
          background: "#2A4654",
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(9, 92, 95, .3)'
  }

  const paper = {
    background: "#E4E6DC"
  }
export default Main;
