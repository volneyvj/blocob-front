import React, { Component } from 'react'
import api from '../../utils/api.util'
import '../../App.css'
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
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
const queryString = require('query-string');



class AllClassifieds extends Component {
  
  
  constructor (props) {
    super(props) 
    this.state = {
    classifieds: [],
    neighborhood: localStorage.getItem("neighborhood"),
    userID: localStorage.getItem("user"),
    query: this.props.location.search.match.query,
  }
  }
  
  loadAllClassifieds = async () => {
    const { query } = queryString.parse(this.props.location.search);
    console.log(query)
    const { neighborhood } = this.state
   
    try {
   
      let classifieds = await api.getClassifieds({neighborhood}) 
      this.setState({
        classifieds: classifieds
      })
    
    if (query !== undefined) {
    classifieds = await api.getSearchedClassifieds({neighborhood, query})
    this.setState({
      classifieds: classifieds
     })
    }
  }
  catch (error) {
    console.log(error);
  }
  }

  componentDidMount = async () => {
  await this.loadAllClassifieds();
  }

  handleInput = (event) => {
    const { query } = event.target;
    this.setState({
      query: query,
    });
  };

 
  render() {
    return (
      <div className="page">

    <Container style={cardGrid} maxWidth="md">

  
    <Typography>Classificados do Bairro</Typography>
              <Grid container spacing={4}>
                {this.state.classifieds.map((card) => (
                  <Grid item key={card._id} xs={12} sm={6} md={4}>
                    <Card style={card}>
                   
                    <CardMedia >
                      <img src={card.imgURL} style={image} />
                    </CardMedia>

                      <CardContent style={cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                        <Typography>
                         R$ {card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}/{card.measure}
                        </Typography>
                      </CardContent>
                      <CardContent style={heart}><FavoriteIcon color="primary" /> {card.likes.length}</CardContent>
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

const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "1px"
}

const submit = {
  margin: "3px"
}

const image = {
  width: "100px",
  height: "110px",
  marginTop: "10px",
  borderRadius: "5%"
}

const heart = {
  padding: "5px"
}

export default AllClassifieds
