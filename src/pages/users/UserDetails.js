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
import BuildIcon from '@material-ui/icons/Build';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


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
    favorite: "default",
    denuncia: "default",
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


  checkIfLiked = async () => {
    const hasLiked = await api.checkRankUser({
      id: this.props.match.params.userID,
      likes: localStorage.getItem("user"),
    });
    if (hasLiked === true) {
      this.setState({ favorite: "secondary" })
    }
  }

  checkDislike = async () => {
    const hasLiked = await api.checkDislikeUser({  
      id: this.props.match.params.userID,
      likes: localStorage.getItem("user"),
    });
    if (hasLiked === true) {
      this.setState({ denuncia: "secondary" })
    }
  }


  componentDidMount = () => {
    this.loadUser();
    this.loadClassifiedsFromUser();
    this.checkIfLiked();
  }


  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  submitLike = async () => {
    const liked = await api.rankUser({
      id: this.props.match.params.userID,
      likes: localStorage.getItem("user"),
    });
    if (liked === false) {
      this.setState({
        favorite: ""
      })
    }
    else {
      this.setState({
        favorite: "secondary"
      })
    }
    this.loadUser();
  };

  submitDislike = async () => {
    const liked = await api.disrankUser({
      id: this.props.match.params.userID,
      likes: localStorage.getItem("user"),
    });
    if (liked === false) {
      this.setState({
        denuncia: ""
      })
    }
    else {
      this.setState({
        denuncia: "primary"
      })
    }
    this.loadUser();
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
         <Typography variant="h5"> 
            {this.state.username} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            CEP: {this.state.cep} - {this.state.neighborhood}
            <br/> <BuildIcon fontSize="small"/> {this.state.profession}
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
            <CardContent style={cardContent}>
              <Typography>Endereço: {this.state.street} - {this.state.city}</Typography>
            </CardContent>
            <CardContent style={cardContent}>
              <Typography>Nome: {this.state.name} {this.state.lastName}</Typography>
            </CardContent>
            <CardContent style={cardContent}>
              <Typography color="primary"> <WhatsAppIcon /> {this.state.mobile} </Typography>
            </CardContent>
            <CardContent>
            
 <IconButton
              color={this.state.favorite}
              onClick={() => this.submitLike()}
              aria-label="add to favorites">
              <ThumbUpIcon/> 
            </IconButton>

            <IconButton
              color={this.state.denuncia}
              onClick={() => this.submitDislike()}
              aria-label="add to favorites">
              <LocationOffIcon/> 
            </IconButton>
          </CardContent>
            
          </Collapse>
        </Card>
        </Grid>
        
     
               <Grid style={classifiedStyle} item xs={6} sm={6} md={6}>
        <Typography variant="h4">Classificados do {this.state.username}</Typography>
        <br/>

        {this.state.classifieds.length ? (
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
                     R${card.price}/{card.measure}
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
          ) : (

<div>Não há classificados registrados </div>
        )
        }

        </Grid>
       

</Grid>
      </div>
    )
  }
}


const root = {
  maxWidth: 345,
  marginLeft: "0px",
  marginTop: "20px",
  background: "#E4E6DC"
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
  padding: "4px"
}

const classifiedStyle = {
  margin: "30px",
}



export default User