import React, { Component } from 'react'
import '../App.css'
import Login from './auth/Login';
import SignUp from './auth/SignUpShort';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
      
      <div>
        <section id="login-signup">
          <div className="home-login">


          <div className="">
              <p className=""></p>
              {this.state.login === true ?  <Login {...this.props} handleClick={this.handleClick}/> :   <SignUp  {...this.props} handleClick={this.handleClick}/>}

            </div>
          </div>  
        </section>

        <section id="main">
        <div style={main}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Bloco B - Seu Bairro 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Anuncie seu produto, serviço ou um projeto social no seu bairro.
            Os usuários somente podem interagir com moradores do mesmo bairro.
              entirely.
            </Typography>
            <div style={main}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <img width="30%" src="/images/bairro-desenho1.jpeg" alt="bairro" />
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </section>

        <section id="main2">
        <div style={main}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sua microrregião mais desenvolvida
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Dessa forma você colabora com seus vizinhos, facilitando o contato, entrega e melhorando seu perimetro urbano.
            </Typography>
            <div style={main}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <img width="30%" src="/images/bairro-desenho2.jpeg" alt="bairro2" />
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Explore +
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </section>




        <section id="comofunciona">
        <Container style={comofunciona} maxWidth="lg">
          <Grid container spacing={12}>
              <Grid item xs={12} sm={6} md={4}>
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
              <Grid item xs={12} sm={6} md={4}>
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
              <Grid item xs={12} sm={6} md={4}>
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


      </div>

    )
  }
}

const main = {

}
const comofunciona = {

}



export default Home
