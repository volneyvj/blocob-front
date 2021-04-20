import React, { Component } from 'react'
import api from '../../utils/api.util'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


class UserClassifieds extends Component {
  
  state = {
    userClassifieds: [],
    userID: localStorage.getItem("user"),
  }

  loadClassifiedsFromUser = async () => {
    const { userID } = this.state
   try { 
    const classifieds = await api.getClassifiedsFromUser({userID})
    this.setState({
      userClassifieds: classifieds
    })
  }
  catch (error) {
    console.log(error);
  }
  }

 
  componentDidMount = () => {
    this.loadClassifiedsFromUser();
  }


  render() {
    return (
      <div>


<Container style={cardGrid} maxWidth="md">
<Typography>Seus Classificados</Typography>
          <Grid container spacing={4}>
            {this.state.userClassifieds.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card style={card}>
                  <CardMedia
                    style={cardMedia}
                    image={card.imgURL}
                    title={card.title}
                  />
                  <CardContent style={cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                     {card.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href={`/classifieds/details/${card._id}`}>
                    Ver Detalhes
                </Link>
                    </Button>
                    <Button size="small" color="primary">
                    <Link href={`/classifieds/edit/${card._id}`}>
                    Editar Classificado
                </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>
        <Link href={`/classifieds/add`}>Adicionar Novo Classificado </Link> 
        </Container>

      </div>
    )
  }
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

export default UserClassifieds
