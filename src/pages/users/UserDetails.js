import React, { Component } from 'react'
import api from '../../utils/api.util'
import '../../App.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LocationOffIcon from '@material-ui/icons/LocationOff';


class User extends Component {
  state = {
    id: '',
    email: '',
    cpf: '',
    username: '',
    password: '',
    name: '',
    lastName: '',
    cep: '',
    street: '',
    streetNumber: '',
    streetComplement: '',
    neighborhood: '',
    city: '',
    state: '',
    phone: '',
    mobile: '',
    birthDate: '',
    profession: '',
    imgURL: '',
    score: '',
    lastZipCodeUpdate: '',
    status: '',
    classifieds: [],
  }

  loadUser = async () => {
    const id = this.props.match.params.userID
    const user = await api.getUsersDetails({ id })
    this.setState({
      email: user.email,
      username: user.username,
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
      score: user.score,
      id: user.id
    })
  }


  loadClassifiedsFromUser = async () => {
    const { userID }  = this.props.match.params
    try {
      const classifieds = await api.getClassifiedsFromUser({ userID })
      this.setState({
        classifieds: classifieds
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  componentDidMount = () => {
    this.loadUser();
    this.loadClassifiedsFromUser();
  }


  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };


  render() {
    return (
      <div className="page">
<Grid container spacing={6}>

 <Grid item xs={12} sm={6} md={4}>

        <Card style={root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={avatar}>
               {this.state.score}
              </Avatar>
            }
          />
          <CardMedia
            style={media}
            image={this.state.imgURL}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {this.state.username} <br/>
            CEP: {this.state.cep} - {this.state.neighborhood}
            <br/> - {this.state.profession}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              onClick={() => this.handleExpandClick()}
              aria-label="ver +"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Endereço: {this.state.street} - {this.state.city}</Typography>
            </CardContent>
            <CardContent><ThumbUpIcon className="icon" onClick={()=> this.handleExpandClick()}/> <LocationOffIcon className="icon" onClick={()=> this.handleExpandClick()}  /></CardContent>
            
          </Collapse>
        </Card>
        </Grid>
        
     
               <Grid style={classifiedStyle} item xs={6} sm={6} md={6}>
        <Typography variant="h4">Classificados do {this.state.username}</Typography>
          <Grid container spacing={4}>
            {this.state.classifieds.map((card) => (
              <Grid item key={card._id} xs={6} sm={6} md={4}>
                <Card>
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
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>


        </Grid>
       

</Grid>
      </div>
    )
  }
}


const root = {
  maxWidth: 345,
  marginLeft: "0px",
  marginTop: "20px"
}

const media = {
  height: 0,
  paddingTop: '56.25%', // 16:9
}

const expand = {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: `opacity 300ms ease-in-out`,
}

const expandOpen = {
  transform: 'rotate(180deg)',
}

const avatar = {
  backgroundColor: red[500],
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

const cardGrid = {
  paddingTop: "8px",
  paddingBottom: "28px",
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

const classifiedStyle = {
  margin: "30px",
}


export default User