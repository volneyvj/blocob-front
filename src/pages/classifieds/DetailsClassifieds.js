import React, { Component } from "react";
import api from "../../utils/api.util";
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
import { purple, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

class DetailsClassifieds extends Component {
  state = {
    id: "",
    userID: "",
    category: "",
    subcategory: "",
    likes: "",
    dislikes: "",
    title: "",
    neighborhood: "",
    description: "",
    imgURL: "",
    price: "1",
    measure: "",
    delivery: "",
    // exclusivos serviços testimonial exclusivos projeto
    motive: "",
    investment: "",
    filePDF: "",
    address: "",
    desiredDate: "",
    // confirmedUsers: '',
    comments: [],
    newComment: {
      comment: "",
      userID: "",
      classifiedID: "",
    },
    expanded: false,
    setExpanded: false,
    favorite: "default"

  };

  loadClassified = async () => {
    const id = this.props.match.params.id;
    const classified = await api.getClassifiedsDetails(id);
    this.setState({
      id: classified[0]._id,
      userID: classified[0].userID,
      category: classified[0].category,
      subcategory: classified[0].subcategory,
      likes: classified[0].likes,
      dislikes: classified[0].dislikes,
      title: classified[0].title,
      neighborhood: classified[0].neighborhood,
      description: classified[0].description,
      imgURL: classified[0].imgURL,
      price: classified[0].price,
      measure: classified[0].measure,
      delivery: classified[0].delivery,
      // exclusivos serviços testimonial exclusivos projeto
      motive: classified[0].motive,
      investment: classified[0].investment,
      filePDF: classified[0].filePDF,
      address: classified[0].address,
      desiredDate: classified[0].desiredDate,
      // confirmedUsers: '',
    });
  };

  loadComments = async () => {
    try {
      const allComments = await api.getComments(this.props.match.params.id);
      this.setState({ comments: allComments });
    } catch (error) {
      console.log(error);
    }
  };

  checkIfLiked = async () => {
    const hasLiked = await api.checkRankClassified({
      id: this.props.match.params.id,
      likes: localStorage.getItem("user"),
    });
    if (hasLiked === true) {
      this.setState({ favorite: "secondary" })
    }
  }

  componentDidMount = () => {
    this.loadClassified();
    this.loadComments();
    this.checkIfLiked();
  };

  handleInput = (event) => {
    this.setState({
      newComment: {
        comment: event.target.value,
        userID: localStorage.getItem("user"),
        classifiedID: this.props.match.params.id,
      },
    });
  };

  addComment = async (event) => {
    event.preventDefault();
    const { newComment } = this.state
    const classified = await api.addComment(newComment);
    this.loadComments();
    this.setState({
      comment: ""
    })
  };

  submitLike = async () => {
    const liked = await api.rankClassified({
      id: this.props.match.params.id,
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
    this.loadClassified();
  };


  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };


  render() {
    return (
      <div className="page">

        <Card style={root}>
          <CardHeader
            avatar={
              <Avatar style={avatar}>
                {this.state.neighborhood}
              </Avatar>
            }

            title={this.state.title}
            subheader={this.state.category}
          />

          <CardMedia >
            <img src={this.state.imgURL} style={image} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              color={this.state.favorite}
              onClick={() => this.submitLike()}
              aria-label="add to favorites">
              <FavoriteIcon

              /> {this.state.likes.length}
            </IconButton>
            <IconButton
              style={expandicon}
              onClick={() => this.handleExpandClick()}
              aria-label="ver +"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Username: <Link href={`/users/userdetails/${this.state.userID}`}>{this.state.userID}</Link></Typography>
              <Typography paragraph>
                Preço: {this.state.price} por {this.state.measure} -   Entrega: {this.state.delivery}
              </Typography>
              <Typography paragraph>

                Motivo:  {this.state.motive}
                <br />
          Investimento Estimado:{this.state.investment}
                <br />
          Endereço do Projeto:  {this.state.address}
                <br />
          Data Esperada para ínicio: {this.state.desiredDate}
              </Typography>
              <Typography>
                Download filePDF {this.state.filePDF}
              </Typography>
            </CardContent>
          </Collapse>


        </Card>




        {this.state.userID === localStorage.getItem("user") ? (
          <div>

          </div>
        ) : (
          <div>
            <form style={form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="comment"
                label="comment"
                name="comment"
                autoComplete="comment"
                value={this.state.comment}
                autoFocus
                onChange={this.handleInput}
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={submit}
                onClick={this.addComment}
              >
                Enviar Comentário
          </Button>
            </form>

          </div>
        )}
      <p></p>

        <Typography variant="h3">Comentários</Typography>
        <Paper style={paper}>  
        <ul>
        {this.state.comments.map((comment) => {
            return (
              <li key={comment._id}>
                {comment.comment} <i>De: {comment.userID.username}</i>
                {/* <form><input name="id" type="hidden" value={this.state.id}/>
              <button type="submit" onClick={this.submitLike}>CURTIR</button>
              </form> */}
              </li>
            );
          })}
        </ul>
        </Paper>
          
        <div><p></p>
          <Link href="/main">Voltar</Link>
        </div>
      </div>

    );
  }
}



const root = {
  maxWidth: 345,
  marginLeft: "37.5%",
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

const expandicon = {
  marginLeft: 'auto'
}

const expandOpen = {
  transform: 'rotate(180deg)',
}

const avatar = {
  backgroundColor: "orange",
  width: "100%"
}


const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "1px"
}

const submit = {
  margin: "3px"
}

const image = {
  width: "55%"
}

const paper = {
  width: "50%",
  marginLeft: "330px"
}
export default DetailsClassifieds;
