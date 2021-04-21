import React, { Component } from 'react'
import '../App.css'
import Login from './auth/Login';
import SignUp from './auth/SignUpShort';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

class Home extends Component {
  state = {
    login: true,
  }

  handleClick = () => {
    this.setState({
      login: !this.state.login
    })
  }


  render() {

    return (

      <>
        <section id="login-signup">
          <div className="home-login">
            <div className="">
              <p className=""></p>
              {this.state.login === true ? <Login {...this.props} handleClick={this.handleClick} /> : <SignUp  {...this.props} handleClick={this.handleClick} />}
            </div>
          </div>
        </section>

        <section id="main">
          <Container maxWidth="lg">
            <Grid style={grid} container spacing={4}>
              <Grid item xl={6} xs={6}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Bloco B - Seu Bairro
                  </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Anuncie e Busque produtos, serviços ou até um projeto social para seu bairro.
                  Os usuários somente podem interagir com moradores do mesmo bairro.
                  </Typography>
              </Grid>
              <Grid item xl={6} xs={6}>
                <img style={images} width="35%" src="/images/bairro-desenho1.jpeg" alt="bairro" />
              </Grid>
            </Grid>
          </Container>
        </section>


        <section id="main2">
          <Container maxWidth="lg">
            <Grid style={grid} container spacing={4}>
              <Grid item xl={6} xs={6}>
                <img width="60%" src="/images/bairro-desenho2.jpeg" alt="bairro2" />
              </Grid>
              <Grid item xl={6} xs={6}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Sua microrregião mais desenvolvida
            </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Dessa forma você colabora com seus vizinhos, facilitando o contato, entrega e melhorando seu perímetro urbano.
            </Typography>
              </Grid>
              <Grid item xl={12} xs={12}>
              <Link href="/">
                <Button variant="outlined" style={button}> 
                  Explore +
                  </Button>
                  </Link>
              </Grid>
            </Grid>
          </Container>
        </section>


          <section id="comofunciona">
            <Container style={comofunciona} maxWidth="lg">
              <Grid container spacing={12}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card style={card}>
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
                  <Card style={card2}>
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
                  <Card style={card}>
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

    )
  }
}

const main = {

        }
const comofunciona = {
padding: "40px"
        }

const grid = {
          paddingTop: "25px",
}

const images = {

        }

const card = {
  padding: "0x",
  backgroundColor: "#d0d6d3"
}

const card2 = {
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

export default Home
