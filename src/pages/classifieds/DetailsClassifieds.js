import React, { Component } from "react";
import api from "../../utils/api.util";
import clsx from 'clsx';
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
    setExpanded: false

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
      // const { id } = this.state
      const allComments = await api.getComments(this.props.match.params.id);
      this.setState({ comments: allComments });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.loadClassified();
    this.loadComments();
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
    const classified = await api.addComment(this.state.newComment);
    console.log("comentario enviado");
    this.loadComments();
  };

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
    this.state.setExpanded(!this.state.expanded);
  };

  
  render() {
    return (
      <div>

        <Card style={root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={avatar}>
             {this.state.neighborhood}
          </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.state.title}
            subheader={this.state.category}
          />
          <CardMedia
            style={media}
            image={this.state.imgURL}
            title={this.state.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {this.state.description}
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
              aria-expanded={this.state.expanded}
              aria-label="ver +"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Username: {this.state.userID}</Typography>
              <Typography paragraph>
              Preço: {this.state.price} por {this.state.measure} -   Entrega: {this.state.delivery}
          </Typography>
              <Typography paragraph>
                  
          Motivo:  {this.state.motive}
          <br/>
          Investimento Estimado:{this.state.investment}
          <br/>
          Endereço do Projeto:  {this.state.address}
          <br/>
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
            {" "}
            <form>
              <textarea
                name="comment"
                value={this.state.newComment.comment}
                onChange={this.handleInput}
              ></textarea>
              <button type="submit" onClick={this.addComment}>
                ENVIAR
              </button>
            </form>
            <button type="submit" onClick={this.submitLike}>
              CURTIR
            </button>
          </div>
        )}

        <ul>
        <Typography variant="h3">Comentários</Typography>
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.id}>
                {comment.comment}- {comment.category}- {comment.likes}
                {/* <form><input name="id" type="hidden" value={this.state.id}/>
              <button type="submit" onClick={this.submitLike}>CURTIR</button>
              </form> */}
              </li>
            );
          })}
        </ul>
        <div>
            <Link href="/main">Voltar</Link>
          </div>
      </div>
      
    );
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



export default DetailsClassifieds;
