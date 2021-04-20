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

class Classifieds extends Component {
  
  constructor (props) {
    super(props) 

    this.state = {
    classifieds: [],
    sortedClassifieds: [],
    userClassifieds: [],
    neighborhood: localStorage.getItem("neighborhood"),
    userID: localStorage.getItem("user"),
    comment: '',
    query: "'",
  }
  }
  
 
  static getDerivedStateFromProps (props, state) {
    return {neighborhood: props.userNeighborhood}
  }

  loadClassifieds = async () => {
    const { neighborhood, query } = this.state
    try {
    const classifieds = await api.getClassifieds({neighborhood, query})
    this.setState({
      classifieds: classifieds
    })
  }
  catch (error) {
    console.log(error);
  }
  }

  loadSortedClassifieds = async () => {
    const { neighborhood } = this.state
    console.log(neighborhood)
  try {  
    const classifieds = await api.getSortedClassifieds({neighborhood})
    this.setState({
      sortedClassifieds: classifieds
    })
  }
  catch (error) {
    console.log(error);
  }
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


  componentDidMount = async () => {
  await this.loadClassifieds();
  await this.loadSortedClassifieds();
  await this.loadClassifiedsFromUser();
  }


  render() {
    return (
      <>



<Container style={cardGrid} maxWidth="md">
<Typography>Seus Classificados</Typography>
          <Grid container spacing={4}>
            {this.state.userClassifieds.map((card) => (
              <Grid item key={card._id} xs={6} sm={6} md={4}>
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
          <p> </p>
          <Grid container>
          <Grid item>
          <Link href={`/userclassifieds/`}>Ver todos seus clasificados </Link> 
        <p></p>
        <Link href={`/classifieds/add`}>Adicionar Novo Classificado </Link> 
        </Grid>
        </Grid>
        </Container>


      <p></p>

      <Container style={cardGrid} maxWidth="md">
<Typography>Classificados em Alta do Seu Bairro</Typography>
          <Grid container spacing={4}>
            {this.state.sortedClassifieds.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card style={card}>
                  <CardMedia
                    style={cardMedia}
                    image="https://source.unsplash.com/random"
                    title={card.title}
                  />
                  <CardContent style={cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                     {card.price} - {card.likes.length}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href={`/classifieds/details/${card._id}`}>
                    Ver Detalhes
                </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} 
          </Grid>
        </Container>


<p></p>

{/* <div className="sorted-classifieds">
      Outtros classifiedS DO SEu bairro
        <ul>
          {this.state.sortedClassifieds.map(classified => {
            return (
              <li>{classified.title} - {classified.price}  - {classified.likes.length}
              - <Link to={`/classifieds/details/${classified._id}`}>  DETAILS </Link> 
              </li>
            )
          })}
        </ul>
      </div> */}


</>

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

export default Classifieds
