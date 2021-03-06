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
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Classifieds extends Component {

  constructor(props) {
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


  static getDerivedStateFromProps(props, state) {
    return { neighborhood: props.userNeighborhood }
  }


  loadSortedClassifieds = async () => {
    const { neighborhood } = this.state
    try {
      const classifieds = await api.getSortedClassifieds({ neighborhood })
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
      const classifieds = await api.getClassifiedsFromUser({ userID })
      this.setState({
        userClassifieds: classifieds
      })
    }
    catch (error) {
      console.log(error);
    }
  }


  componentDidMount = async () => {
    await this.loadSortedClassifieds();
    await this.loadClassifiedsFromUser();
  }


  render() {
    return (
      <>

        {(this.state.userClassifieds.length !== 0) ? (

          <Container style={cardGrid} maxWidth="md">
            <Typography variant="h4">Meus Classificados</Typography>
            <br/>
            <Grid container spacing={6}>
              {this.state.userClassifieds.map((card) => (
                <Grid item key={card._id} xs={4}>
                  <Card style={card}>
                    <CardMedia >
                    <Link href={`/classifieds/details/${card._id}`}>
                      <img src={card.imgURL} style={image} />
                      </Link>
                    </CardMedia>
                    <CardContent style={cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                      R$ {card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}/{card.measure}
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
          </Container>


        ) : (
          <br />
        )}

        <Grid style={gridb} container>
          <Grid item>

            <Link href={`/userclassifieds`}>
              <Button variant="contained" style={buttom}>
                Ver todos seus Classificados
                          </Button>
            </Link>
            <p></p>

            <Link href={`/classifieds/add`}>
              <Button variant="contained" style={buttom}>
                Adicionar Novo Classificado
                          </Button>
            </Link>
          </Grid>
        </Grid>

        <p></p>
        <hr style={hr}></hr>
        {(this.state.userClassifieds.length !== 0) ? (

          <Container style={cardGrid} maxWidth="md">
            <Typography variant="h4">Classificados em Alta no Bairro</Typography>
            <br/>
            <Grid container spacing={6}>
              {this.state.sortedClassifieds.map((card) => (
                <Grid item key={card._id} xs={4}>
                  <Card style={card}>
                  <CardMedia >
                  <Link href={`/classifieds/details/${card._id}`}>
                      <img src={card.imgURL} style={image} />
                      </Link>
                    </CardMedia>
                    <CardContent style={cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                      R$ {card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}/{card.measure}
                      </Typography>
                    </CardContent>
                    <CardContent style={heart}><FavoriteIcon color="secondary" /> {card.likes.length}</CardContent>
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

        ) : (
          <br />
        )}

        <Link href={`/allclassifieds/${this.state.query}`}>
          <Button variant="contained" style={buttom}>
            Ver Todos Classificados do Bairro
                          </Button>
        </Link>


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

const buttom = {
  background: "#2A4654",
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(9, 92, 95, .3)',
  marginTop: "8px",
  '&:hover': {
    backgroundColor: '#e57373',
    color: '#fff',
  },
}

const gridb = {
  paddingLeft: "40px"
}

const cardGrid = {
  paddingTop: "8px",
  paddingBottom: "28px",
  backgroundColor: "#EEEDEB",
  width: "200%"
}

const card = {
  height: '100%',
  display: 'flex',
}

const cardMedia = {
  paddingTop: '56.25%', // 16:9
}

const cardContent = {
  flexGrow: 1,
  padding: "2px"
}

const hr = {
  width: "150%",
  marginLeft: "40px"
}

const image = {
  width: "65%",
  height: "130px",
  borderRadius: "5%",
  marginTop: "5px"
}

const heart = {
  padding: "5px"
}
export default Classifieds
