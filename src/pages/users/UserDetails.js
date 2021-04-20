import React, { Component } from 'react'
import api from '../../utils/api.util'
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';


class User extends Component {
  state = {
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
    status: ''
  }


  loadUser = async () => {
    const id = this.props.match.params.id
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
    })
  }

  componentDidMount = () => {
    this.loadUser();
  }


  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  submitLike = async (event) => {
    event.preventDefault();
    const classified = await api.rankClassified({
      id: this.props.match.params.id,
      likes: localStorage.getItem("user"),
    });
    console.log("curtido");
    this.loadClassified();
  };


  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };


  render() {
    return (
      <div>

        <Card style={root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={avatar}>
               {this.state.score}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
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
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> {this.state.likes}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
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
          </Collapse>


        </Card>

      </div>
    )
  }
}


const root = {
  maxWidth: 345,
  marginLeft: "400px",
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

export default User